import express from 'express'
import { 
  hello,
  mGet,
} from './routeLibri.mjs'
const app = express()
const port = 3000
import  bodyParser from 'body-parser'
app.use(bodyParser.json())


app.get('/', hello)
app.get('/libri', mGet)
// app.get('/mobiliIkea/search/:area', areaGet)
// app.post('/mobiliIkea', postMobile )
// app.delete('/mobiliIkea/elimina/:area', deleteArea)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})