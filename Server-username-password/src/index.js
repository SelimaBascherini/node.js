import express from 'express'
const app = express()
const port = 3000

import bodyParser from 'body-parser'
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })); // .urlencoded indicates that we are parsing URL encoded data from the body. When working with forms, we use the urlencoded parser because by default, forms send data in URL encoded format. extended is an option allowing you to choose which library you want to use to parse the URL encoded data. By default, this option is set to true and will use the qs library. When set to false it uses the QueryString library.

import * as user from './routes-users.mjs'

app.get('/', user.getIndex )
app.get('/signup', user.getSignup )
app.post('/signup', user.signup)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})