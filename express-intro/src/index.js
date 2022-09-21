const express = require('express');
//import express from 'express';

const app = express();
const port = 3000; //typical for local development

app.get('/', (req, res) => {
    res.send('Hello world');
    console.log('Request received');
});

app.get('/apples', (req, res) => {
    res.send('APPLES');
    console.log('Hey');
    console.log('Hey Apple');
});

app.listen(port, () => {
    console.log('App is listening on port', port);
    //console.log(`App is listening on port ${port}`);
});