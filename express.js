const express = require('express')
const app = express()
const port = 4000


/*
// if u passing multiple middlewares so next function should be there
const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

app.get('/example/d', [cb0, cb1], (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res,next) => {
  res.send('Hello from D!')
})

*/
// PARAM


/*

app.param(['id', 'page'],  (req, res, next, value1,val) =>{
  console.log('CALLED ONLY ONCE with', value1+" " +val)
  next()
})

app.get('/user/:id/:page', function (req, res, next) {
  console.log('although this matches')
  next()
})

app.get('/user/:id/:page', function (req, res) {
  console.log('and this matches too')
  res.end()
})

// OUTPUT IS 
// CALLED ONLY ONCE with 42 id
// CALLED ONLY ONCE with 3 page
// although this matches
// and this matches too



*/



// param is depreciated
// app.param(function (param, option) {
//   return function (req, res, next, val) {
//     if (val === option) {
//       next()
//     } else {
//       next('route')
//     }
//   }
// })

// using the customized app.param()
// app.param('id', 1337)

// route to trigger the capture



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/profile', function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})



// APP.ON (EVENTS)

var admin = express()
 
admin.on('mount', function (parent) {
  console.log('Admin Mounted')
 // console.log(parent) // refers to the parent app
})

admin.get('/:id', function (req, res) {
  res.send('Admin Homepage')
})

app.use('/admin', admin) 


var greet = express.Router()

greet.get('/jp', function (req, res) {
  console.log(req.body) // /greet
  res.send('Konichiwa!')
}) 

app.use('/greet', greet) // load the router on '/greet'
 







const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  console.log('req.')
  next()
}
app.use(requestTime)


app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})
 





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})