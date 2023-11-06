const express = require('express');
const app = express();
const fs = require('fs');

const PORT = 7000;

app.get('/', (req, res) => {
  fs.readFile('./database/people-counter-db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});