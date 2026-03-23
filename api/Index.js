const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();

const salt = bcrypt.genSaltSync(10);


app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ashfinrahman:MYEz8b7VhrgbfNZd@cluster0.dlxgojx.mongodb.net/?appName=Cluster0');

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({username, password: bcrypt.hashSync(password, salt)});
        res.json(userDoc);
        console.log(userDoc);
    } catch(e) {
        res.status(400).json(e);
        console.log(e);

    }
    
    
    
});
app.listen(4000);
//mongodb+srv://ashfinrahman:MYEz8b7VhrgbfNZd@cluster0.dlxgojx.mongodb.net/?appName=Cluster0
