import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
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
app.post('/api/posts', async (req, res) => { //REPLACE THIS WITH GET ALL POSTS FUNCTION
    const postCollection = db.collection('posts');

    const post = req.body;
    const user = req.body.userObject;

    const ServerVars = {
        userName: req.body.anonymous ? 'Anonymous' : user.name,
        userPic: req.body.anonymous ? 'https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/anonymous-512.png' : user.pfp,
        userId: req.body.anonymous ? null : user._id,
        dateTimePosted: new Date().toISOString(), //Gets current datetime
        affiliationScore: 0, //Tracks the poltical affiliation of the post from -1 to 1
        likes: 0 //Amount of likes a post has
    }
    const postData = { 
        ...ServerVars, //Variables built in automatically for post
        ...req.body  //Variables defined later
    }

    
    const result = await postCollection.insertOne(postData);

    res.json(result.insertedId); //Returns id of post
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

//Get request to get one post by its id
app.get('/api/posts/viewone/:id', async (req, res) => {
    try {
      const postId = req.params.id;
      const postsCollection = db.collection('posts');
      const post = await postsCollection.findOne({ _id: new ObjectId(postId) });
  
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ error: 'Post not found.' });
      }
    } catch (error) {
      console.error('Error retrieving post:', error);
      res.status(500).json({ error: 'An error occurred while retrieving the post.' });
    }
  });


//Get request for posts by a specific user
app.get('/api/posts/viewuserposts/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const postsCollection = db.collection('posts');
    const posts = await postsCollection.find({ userId : userId }).toArray();

    res.json(posts);

  } catch (error) {
    console.error('Error retrieving post:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the post.' });
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
