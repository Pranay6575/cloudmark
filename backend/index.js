// import connectMongo from "./db"
const connectMongodb = require("./db");
const express = require('express')
connectMongodb();

const app = express()
const port = 3000


app.use(express.json())
//Available Routes
app.use('/api/auth', require("./routes/auth"))
// app.use('api/notes', require("./routes/notes.js"))

app.listen(port, () => {
  console.log(`Example app listening at http://127.0.0.1:${port}`)
})


