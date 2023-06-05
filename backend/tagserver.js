import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3004;

const url = 'mongodb://localhost:27017';
const dbName = 'soapboxdb';

const client = new MongoClient(url, {useUnifiedTopology: true})

client.connect((err) => {
    console.log('Error connecting to MongoDB: ', err);
    return;
})
console.log('Connected to mongoDB server.');

const db = client.db(dbName);

//Post method for adding tags
app.post('/api/tags', async (req, res) => { 
    //Since one post may create multiple tags, this code takes in a list of tags and adds them all if they dont exist

    const tagCollection = db.collection('tags');
    const tags = req.body.tags;
    const article = req.body.article;

    for (const tag of tags) {
        const tagExists = await tagCollection.findOne({ topic: tag.topic });
        if (tagExists) {
            console.log(tagExists);
            //If tag exists, adds article to article property of existing tag
            tagExists.articles.push(article);
            await tagCollection.updateOne({ topic: tag.topic }, { $set: { articles: tagExists.articles } });
        }
        else {
            //Otherwise, creates new tag
            const tagData = {
                topic: tag.topic,
                articles: [article],
                color: `rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, `,
            }

            const result = await tagCollection.insertOne(tagData); //Do something with this result variable, idk yet?
        }
    }

    res.json({status: 'ok'});

});

// Get method for retrieving all tags
app.get('/api/tags', async (req, res) => {
    const tagCollection = db.collection('tags');
    const tags = await tagCollection.find().toArray();
    res.json(tags);
  });



// Delete method for removing all tags
app.delete('/api/tags', async (req, res) => {
    const tagCollection = db.collection('tags');
    const deleteResult = await tagCollection.deleteMany({});
    res.json({ deletedCount: deleteResult.deletedCount });
  });




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
