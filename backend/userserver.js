import express from 'express';
import { MongoClient } from 'mongodb';
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
        posts: []
    }

    const userData = {
        name: name,
        email: email,
        password: hash,
        ...serverData,
    }

    //Part 2 --> Submitting user data to the database

    const usersCollection = db.collection('users');
    await usersCollection.insertOne(userData, (err, result) => {

    });

    res.json({status: 'ok'})

});

//Get method to retrieve users
app.get('/api/users', async (req, res) => { //ADD METHODS FOR GET ALL, GET ONE, AND GET A FEW
  try {

      const usersCollection = db.collection('users');
      const users = await usersCollection.find({}).toArray();
      res.json(users);

  } catch (error) {

      console.error('Error retrieving useres:', error);
      res.status(500).json({ error: 'An error occurred while retrieving users.' });

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

