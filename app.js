const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Marblewolf app running...');
});

app.listen(80, function () {
    console.log('App listening on port 80!');
});