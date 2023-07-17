// import connectMongo from "./db"
const connectMongodb = require("./db");
const express = require('express')
connectMongodb();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

