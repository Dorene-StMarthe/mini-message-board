const express = require('express');
const app = express();
const port = 3000
const messages = require('./models/messages')
console.log(messages)
//index route
app.get('/messages', ( req, res )=>{
    res.send(messages);
  });

  app.get('/new', ( req, res )=>{   
    res.send('New Messages')
});


//show route
app.get('/messages/:indexOfMessagesArray', ( req, res )=>{
    res.render('show.ejs')
}) 
 
















  app.listen(port,()=>{
    console.log('message app is running on port',  port)
  })