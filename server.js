const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const url = 'mongodb+srv://ravijhasatghara2:root@cluster0.6spzi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 
}).then(() => {
    console.log("MongoDB connected");
}).catch(err => {
    console.error(err);
});

// Import routes
const articlesRoute = require('./routes/articles');
app.use('/articles', articlesRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on${PORT}`);
});

