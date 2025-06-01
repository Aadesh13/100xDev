const express = require('express');
const app = express();

function userMiddleware(req, res, next) {
  if(username != 'harkirat' && password != 'pass') {
    res.status(403).json({
      msg : 'user doesnot exist',
    });
  } else {
    next();
  }
};

function kidneyMiddleware(req, res, next) {
  if(kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg : "wrong inputs",
    });
  } else {
    next();
  }
};

app.get('/health-checkup', userMiddleware, kidneyMiddleware, (req, res) => {
  //kidney stuff
  res.send("You are fit");
});

app.get('/kidney-checkup', userMiddleware, kidneyMiddleware, (req , res) => {
  res.send("Your kdiney is healthy");
});

app.get('/heart-checkup', userMiddleware, (req, res) => {
  res.send("Your heart is healthy");
});

app.listen(3000);
