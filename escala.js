const express = require('express')
const app = express()

const db = require('./db/db.json')

app.get('./api',(req,res,next) =>{
    res.send()
})

app.listen(3001, () =>{
  console.log('Servidor iniciado' )
})