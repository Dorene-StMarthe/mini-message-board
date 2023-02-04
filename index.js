const express = require('express');
const app = express();

app.get('/', ( req, res )=>{
    res.send('Hello World!');
  });

  app.get('/new', ( req, res )=>{   
    res.send('New Messages')
});


const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
 ];















  app.listen(3000);