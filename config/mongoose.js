const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/my_db';

const db = mongoose.connection;
mongoose.connect(mongoURI);

db.on('error', (err)=>{
    console.log('MongoDb connection error', err);
});

db.once('open', ()=>{
    console.log('Connected to MongoDB!');
});

module.exports = db;

