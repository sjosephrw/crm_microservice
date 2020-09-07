const express = require('express');
const axios = require('axios');

const app = express();

//body parser, reading data from body, into req.body { limit: '10kb' } - limit body data to 10 kb
app.use(express.json({ limit: '10kb' }));

app.post('/api/v1/events', (req, res, next) => {
  const event = req.body;
  console.log(event);

  axios.post('http:/localhost:5001/api/v1/events', event);//post to user service
  axios.post('http:/localhost:5002/api/v1/events', event);//post to QueryUser service

  res.send({status: "OK"});

})

const port = 5000;

app.listen(port, () => {
  console.log(`Server listening on Port ${port}`);
});
