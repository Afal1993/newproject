const moment = require('moment');
const express = require('express');
const app = express()

app.get('/', (req, res) => {
    const {name} = req.query;
    res.send('Welcome ' + name);
})

app.listen(3001, function(){
    console.log('server on port: ' + 3001);
})