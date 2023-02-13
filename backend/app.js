const express = require('express')
const app = express()
const port = 1234
const cors = require('cors')
const { sumOfTwoNumbers } = require('./utils/addTwoNumbers')

// Communicate Between 2 Servers
app.use(cors())

// Data Coming in Body or URL.
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Steps for addition of 2 numbers
app.post('/steps', (req, res) => {
  var { num1, num2 } = req.body
  console.log({ num1, num2 })
  const result = sumOfTwoNumbers(parseInt(num1), parseInt(num2))
  res.json({ status: 200, steps: result })
})

// Server
app.listen(process.env.PORT || port, () => {
  console.log('Backend Server Started on port', port)
})
