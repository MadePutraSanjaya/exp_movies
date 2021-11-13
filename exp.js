const express = require('express')
const app = express()
const port = 4000
const path = require('path');

app.get('/home', (req, res) => {
    console.log(__dirname)
  res.sendFile(path.join('D:/Github/exp_movies/HTML/index.html'))
})

app.get('/home/index2', (req, res) => {
    console.log(__dirname)
  res.sendFile(path.join('D:/Github/exp_movies/HTML/index2.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/home`)
})


