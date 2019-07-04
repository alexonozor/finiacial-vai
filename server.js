const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const user = require('./src/input');
const path = require('path');


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/user/:id', (req, res) => {
  res.send(user);
});

// Serve only the static files form the dist directory
app.use(express.static('./build'));

app.get('/*', function(req,res) { 
   res.sendFile(path.join(__dirname,'/build/index.html'));
});
