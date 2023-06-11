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
            //If tag exists, adds article to article property of existing tag
            tagExists.articles.push(article._id);
            await tagCollection.updateOne({ topic: tag.topic }, { $set: { articles: tagExists.articles } });
        }
        else {
            //Otherwise, creates new tag
            const tagData = {
                topic: tag.topic,
                articles: [article._id],
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

//Get method for getting tag  given its id
app.get('/api/tags/gettag/:id', async (req, res) => {

    try {
        const tagId = req.params.id;
        const tagCollection = db.collection('tags');
        const tag = await tagCollection.findOne({ _id: new ObjectId(tagId) });

        if (tag) {
          res.json(tag);
        } else {
          res.status(404).json({ error: 'Tag not found.' });
        }
      } catch (error) {
        console.error('Error retrieving tag:', error);
        res.status(500).json({ error: 'An error occurred while retrieving the post.' });
      }
});

//Get method for getting tag given a tag topic
app.get('/api/tags/gettagid/:topic', async (req, res) => {
    try {
        const tagTopic = req.params.topic;
        const tagCollection = db.collection('tags');
        const tag = await tagCollection.findOne({ topic: tagTopic });

        if (tag) {
          res.json(tag);
        } else {
          res.status(404).json({ error: 'Tag not found.' });
        }
      } catch (error) {
        console.error('Error retrieving post:', error);
        res.status(500).json({ error: 'An error occurred while retrieving the post.' });
      }
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
