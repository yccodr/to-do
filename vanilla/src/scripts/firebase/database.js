import dotenv from 'dotenv';

dotenv.config();

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_DOMAIN,
  storageBucket: process.env.FIRESTATORY_STORAGE_BUCKET,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
