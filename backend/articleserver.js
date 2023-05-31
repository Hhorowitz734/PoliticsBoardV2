import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3002;

const url = 'mongodb://localhost:27017';
const dbName = 'soapboxdb';

const client = new MongoClient(url, {useUnifiedTopology: true})

client.connect((err) => {
    console.log('Error connecting to MongoDB: ', err);
    return;
})
console.log('Connected to mongoDB server.');

const db = client.db(dbName);

//Post method for creating articles
app.post('/api/posts', (req, res) => { //REPLACE THIS WITH GET ALL POSTS FUNCTION
    const postCollection = db.collection('posts');

    const ServerVars = {
        userName: req.body.anonymous ? 'Anonymous' : 'Unknown',
        userPic: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcSvE0xxddDSqkbskSN7RVDSYcpTkG8-AcXVPIZqE8OhwVpDJ6h50hhBZTTnLXKLvJWBHtMeyw3AXsc5iqI&psig=AOvVaw1ylCRiobc-plMuIYZaYo4S&ust=1685474640982000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCbt7ugm_8CFQAAAAAdAAAAABAE',
        userUrl: null,
        articleUrl: null,
        dateTimePosted: new Date().toISOString(), //Gets current datetime
        affiliationScore: 0, //Tracks the poltical affiliation of the post from -1 to 1
        likes: 0 //Amount of likes a post has
    }
    const postData = { 
        ...ServerVars, //Variables built in automatically for post
        ...req.body  //Variables defined later
    }

    

    postCollection.insertOne(postData, (err, result) => {
    });
});

//Get method to retrieve articles
app.get('/api/posts', async (req, res) => { //ADD METHODS FOR GET ALL, GET ONE, AND GET A FEW
  try {

      const postsCollection = db.collection('posts');
      const posts = await postsCollection.find({}).toArray();
      res.json(posts);

  } catch (error) {

      console.error('Error retrieving posts:', error);
      res.status(500).json({ error: 'An error occurred while retrieving posts.' });

  }
});

//Delete method to delete articles
app.delete('/api/posts', async (req, res) => { //ADD METHODS FOR DELETE ONE, DELETE ALL
  try {

      const postsCollection = db.collection('posts');
      const deleteResult = await postsCollection.deleteMany({});
      res.json({ deletedCount: deleteResult.deletedCount });
      
  } catch (error) {

      console.error('Error clearing posts collection:', error);
      res.status(500).json({ error: 'An error occurred while clearing posts collection.' });

  }
});

  



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
