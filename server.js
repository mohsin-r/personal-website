const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, '/client')))

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html')
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
}) 