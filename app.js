const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.get('/', function (req, res) {
    res.send('Marblewolf app running...');
});

app.listen(PORT, function () {
    console.log('App listening on port ' + PORT + '!');
});