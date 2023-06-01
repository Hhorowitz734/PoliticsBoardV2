import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3003;

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

    const post = req.body;
    const user = req.body.userObject;

    const ServerVars = {
        userName: req.body.anonymous ? 'Anonymous' : user.name,
        userPic: req.body.anonymous ? 'https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/anonymous-512.png' : user.pfp,
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
