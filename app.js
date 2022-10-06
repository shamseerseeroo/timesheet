const express = require('express');
const app = express()
const bodyParser=require('body-parser');
const db=require("./db/connection");
const routes = require('./routes');
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', routes); 

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports= app;