const express = require('express');
const server = express();

server.all('/', (req, res) => {
  res.send('AFKBot is alive!');
});

server.listen(3000, () => {
  console.log('Keep-alive server running...');
});
