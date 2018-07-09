const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send('Marblewolf app running...');
});

app.listen(port, function () {
    console.log('App listening on port ' + port + '!');
});