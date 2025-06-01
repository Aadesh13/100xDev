const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://admin:Kbt%401310@cluster0.uydoodl.mongodb.net/userAppNew')

const User = mongoose.model('Users', {name: String, email: String, password: String});

app.post('/signup', (req , res) => {
  const username = req.body.username;
  const name = req.body.name;
  const password = req.body.password;

  const existingUser = User.findOne({email: username});
  if(existingUser) {
    return res.status(400).send("Username aready exists")
  }

  const user = new User({
    name : name,
    email : username,
    password : password
  });

  user.save();
  res.json({
    msg : "User Created Successfully"
  })
})

app.listen(3000);

