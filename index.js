const express = require('express');
const app = express();
const port = 3000
const messages = require('./models/messages')




//middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static('public'));



//index route
app.get('/messages', ( req, res )=>{
  res.render('index.ejs',{allMessages: messages
  });
});

app.get('/messages/new', ( req, res )=>{   
    res.render('form.ejs')
});


//create route
app.post('/messages/new', ( req, res )=>{
  console.log(req.body)
  messages.push(req.body)
  res.redirect('/messages');
})

//show route
app.get('/messages/:indexOfMessagesArray', ( req, res )=>{
    res.render('show.ejs', { message:messages[req.params.indexOfMessagesArray]})
}) 

 
















  app.listen(port,()=>{
    console.log('message app is running on port',  port)
  })