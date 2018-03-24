const express = require('express');

const app = express();

app.get('/',(req,res) => {
  res.send(`hello world at ${process.env.PORT}`);
});

app.listen(process.env.PORT, () => {
  console.log(`app listening at ${process.env.PORT}`);
});
