const express = require("express");

const app = express();

app.use(() => {
  console.log('test')
  console.log('asu')
})

app.listen(4000);
