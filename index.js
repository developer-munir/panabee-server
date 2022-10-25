const express = require('express');
const app = express();
const cors = require('cors');
const Port = process.env.Port || 5000;
app.use(cors());
const categories = require('./Data/categories.json');
app.get('/', (req, res) => {
    res.send('server is ok');
})
app.get('/course-categories', (req, res) => {
    res.send(categories);
})


app.listen(Port, () => {
    console.log('Server is running ohh!!');
})