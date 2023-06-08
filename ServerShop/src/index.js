import express from 'express'
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/shop', sGet)
app.delete('/shop/:id', sDelete)
app.get('/shop/ricerca/:nome', sSearch)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

import {
 sGet,
 sDelete, 
 sSearch
} from './routeShop.mjs'