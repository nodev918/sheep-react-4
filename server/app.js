'use strict';
const path = require('path')
const PORT = process.env.PORT || 5000;

const express = require('express')
const app = express()

/*
const pathn = path.resolve(__dirname,'build')
app.use(express.static(pathn))
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.html'))
})
*/

const data =[
  {
    title:"post1",
    body:"content1",
    comment:"comment1"
  },
  {
    title:"post2",
    body:"content2",
    comment:"comment2"
  },
  {
    title:"post3",
    body:"content3",
    comment:"comment3"
  }
]

app.get('/allpost',(req,res)=>{
  console.log("request in")
  res.json(data)
})

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});