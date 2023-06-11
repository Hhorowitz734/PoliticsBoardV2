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
        votersCount: 0,
        voterObjects: [],
        likes: 0, //Amount of likes a post has
        comments: [] 
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
      res.status(500).json({ error: 'An error occurred while retrieving the post.', _id : null });
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

// POST method handles updating post score
app.post('/api/posts/updatepostscore', async (req, res) => {
  try {
    const postId = req.body.postId;
    const vote = req.body.vote;
    const userId = req.body.userId;

    const postCollection = db.collection('posts');

    const post = await postCollection.findOne({ _id: new ObjectId(postId) });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    let newAS; // New post score

    const updatedPost = {
      ...post,
      votersCount: post.votersCount || 0,
      voterObjects: post.voterObjects || []
    };

    let userFound = false;
  
    updatedPost.voterObjects.forEach(voterObject => {
      if (voterObject.userId === userId) {
        userFound = true;
        updatedPost.affiliationScore = ((post.affiliationScore * post.votersCount) - voterObject.vote + vote) / post.votersCount;
        voterObject.vote = vote;
      }
    });

    if (!userFound) {
      updatedPost.affiliationScore = ((post.affiliationScore * post.votersCount) + vote) / (post.votersCount + 1);
      updatedPost.votersCount += 1;
      updatedPost.voterObjects.push({ userId: userId, vote: vote });
    }

    newAS = updatedPost.affiliationScore; // Set newAS to the new post score

    // Update the post with the updated score
    await postCollection.updateOne(
      { _id: new ObjectId(postId) },
      { $set: { affiliationScore: updatedPost.affiliationScore, votersCount: updatedPost.votersCount, voterObjects: updatedPost.voterObjects } }
    );

    res.json({ newAS }); // Return updated post score

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during post voting.' });
  }
});



//Adds a comment to a post given a postID and comment
app.post('/api/posts/addcomment', async (req, res) => {
  try {
    const postId = req.body.postId;
    const commentBaseData = req.body.comment;

    const commentServerData = {
      _id: Math.random().toString(36).substr(2, 9),
      votersCount: 0,
      voterObjects: [], //Stores userID and vote
      affiliationScore: 0
    }

    const comment = {
      ...commentBaseData,
      ...commentServerData
    }

    const postCollection = db.collection('posts');

    const post = await postCollection.findOne({ _id: new ObjectId(postId) });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    post.comments.push(comment);
    await postCollection.updateOne({ _id: new ObjectId(postId) }, { $set: { comments: post.comments } });

    res.json({status: 'ok'});

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during comment adding.' });
  }
});

//Post method handles updating comment score
app.post('/api/posts/updatecommentscore', async (req, res) => {
  try {
    const postId = req.body.postId;
    const commentId = req.body.commentId;
    const vote = req.body.vote;
    const userId = req.body.userId;

    const postCollection = db.collection('posts');

    const post = await postCollection.findOne({ _id: new ObjectId(postId) });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    let newAS; // New affiliation score

    const updatedComments = post.comments.map(comment => {
      if (comment._id === commentId) {
        let updatedAffiliationScore;
        let updatedVoterObjects = [];
        let userFound = false;

        comment.voterObjects.forEach(voterObject => {
          if (voterObject.userID === userId) {
            userFound = true;
            updatedAffiliationScore = ((comment.affiliationScore * comment.votersCount) - voterObject.vote + vote) / comment.votersCount;
            voterObject.vote = vote;
            updatedVoterObjects.push(voterObject);
          } else {
            updatedVoterObjects.push(voterObject);
          }
        });

        if (!userFound) {
          updatedAffiliationScore = ((comment.affiliationScore * comment.votersCount) + vote) / (comment.votersCount + 1);
          comment.votersCount += 1;
          updatedVoterObjects.push({ userID: userId, vote: vote });
        }

        newAS = updatedAffiliationScore; // Set newAS to the new affiliation score

        return {
          ...comment,
          affiliationScore: updatedAffiliationScore,
          votersCount: comment.votersCount,
          voterObjects: updatedVoterObjects // Update voter objects
        };
      }
      return comment;
    });

    // Update the post with the updated comments
    await postCollection.updateOne(
      { _id: new ObjectId(postId) },
      { $set: { comments: updatedComments } }
    );

    res.json({ newAS }); // Returns updated affiliation score

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during comment voting.' });
  }
});



  



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
