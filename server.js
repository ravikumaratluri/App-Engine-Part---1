require('@google-cloud/debug-agent').start();
let express = require('express')
let app = express()
let url = require('url')

// intially setting timesHelloed to 0 
let timesHelloed = 0;

app.set('view engine', 'ejs')
// respond when a GET request is made to the homepage
// use a response to send things back
// GET method route

// handling default request
app.get('/', (req, res) => {
//  res.send(timesHelloed)
res.render('home.ejs')
})

// handling /hello request
app.get('/hello', (req, res) => {
    timesHelloed++;
    res.send("Value has been increased")
})

// handling /timesHelloed request
app.get('/timesHelloed', (req, res) => {
      res.send("Number of time calles is: "+timesHelloed);
})

// handling /resetTimesHelloed request
app.get('/resetTimesHelloed', (req, res) => {
    timesHelloed = 0;
    res.send("Value has been resetted")
})

let port = process.env.PORT || 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


