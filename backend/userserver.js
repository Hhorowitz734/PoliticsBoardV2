import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import cors from 'cors';
import bcrypt from 'bcryptjs';


const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3002;

const url = 'mongodb://localhost:27017';
const dbName = 'soapboxdb';

const client = new MongoClient(url, {useUnifiedTopology: true})
const db = client.db(dbName);


client.connect((err) => {
    console.log('Error connecting to MongoDB: ', err);
    return;
})
console.log('Connected to mongoDB server.');


app.post('/api/users', async (req, res) => { 

    const {name, email, password} = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    if (!hash) { //Handles errors in password encryption
        res.json({status: 'error', error: 'could not get hash'})
    }


    const serverData = { //Any data other than name, password, and email that needs to be set for a user
        posts: [],
        pfp: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Taka_Shiba.jpg/1200px-Taka_Shiba.jpg'
    }

    const userData = {
        name: name,
        email: email,
        password: hash,
        ...serverData,
    }

    //Part 2 --> Submitting user data to the database

    const usersCollection = db.collection('users');
    const result = await usersCollection.insertOne(userData);

    const encryptedInsertedId = result.insertedId.toString() //IN THE FUTURE ENCRYPT THIS

    res.json({insertedId: encryptedInsertedId}); //now, decrypt this in the frontend and use it to manage state by saving the user object as a setstate
    
});

app.post('/api/users/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const usersCollection = db.collection('users');
    const user = await usersCollection.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password.' });
    }

    res.json({ status: 'ok', userId: user._id }); // Return the user ID to the frontend for further authentication or state management

  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'An error occurred while logging in.' });
  }
});




app.get('/api/users', async (req, res) => {
  try {
    const { _id } = req.query; // Extract the _id from the query parameters

    const usersCollection = db.collection('users');
    const user = await usersCollection.findOne({ _id: new ObjectId(_id) }); // Convert _id to ObjectId

    if (!user) {
      return res.status(404).json(null);
    }

    res.json(user);

  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the user.' });
  }
});

  
  

app.delete('/api/users', async (req, res) => {

    try {

      const usersCollection = db.collection('users');
      const deleteResult = await usersCollection.deleteMany({});
      res.json({ deletedCount: deleteResult.deletedCount });

    } catch (error) {

      console.error('Error clearing users collection:', error);
      res.status(500).json({ error: 'An error occurred while clearing users collection.' });

    }
  });
  






app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

