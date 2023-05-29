import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const PORT = 3001;

const url = 'mongodb://localhost:27017';
const dbName = 'soapboxdb';

const client = new MongoClient(url, {useUnifiedTopology: true})

client.connect((err) => {
    console.log('Error connecting to MongoDB: ', err);
    return;
})
console.log('Connected to mongoDB server.');

const db = client.db(dbName);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})