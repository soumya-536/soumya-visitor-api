const express = require('express')
const mongoose = require('mongoose');
const router = express.Router();

const app = express();
const port = 8000;

app.use(express.json());


const mongoURI = process.env.MONGO_URI || 'mongodb+srv://visotordb:vistor123@cluster0.58rgi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

const visitRoutes = require('./routes/router'); 
app.use('/api', visitRoutes);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

//   mongodb+srv://visotordb:vistor123@cluster0.58rgi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0