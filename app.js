const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// Preferably response with release number?
app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/notHealth', (req, res) => {
  res.status(404).send()
})

app.get('/version', (req, res) => {
  res.send('v1')
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
