const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors([
    "http://localhost:5173/"
]))

app.get('/', (req, res) => {
    res.send('Server is running!')
});

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});