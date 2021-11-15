var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const dotenv = require('dotenv');
dotenv.config();

const textapi = new meaningCloud({
    application_key: process.env.API_KEY
});

const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apikey}&url=${req.body.url}&lang=en`
let response = await fetch(apiUrl)
let data = await response.json()

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})