'use strict';

// [START gae_node_request_example]
const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors())
app.use(express.json())

const path = require('path')


const pathn = path.resolve(__dirname,'build')
app.use(express.static(pathn))
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.html'))
})

/*
const pathn = path.resolve(__dirname,'..','igui','build')
app.use(express.static(pathn))
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'..','igui','build','index.html'))
})
*/

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});