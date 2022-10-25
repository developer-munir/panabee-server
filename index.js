const express = require('express');
const app = express();
const cors = require('cors');
const Port = process.env.Port || 5000;
app.use(cors());
const categories = require('./Data/categories.json');
const course = require('./Data/course.json');
app.get('/', (req, res) => {
    res.send('server is ok');
})
app.get('/course-categories', (req, res) => {
    res.send(categories);
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === 'all') {
        res.send(course);
    }
    const courses =course.filter((c) => c.category_id === id);
    res.send(courses);
})

app.listen(Port, () => {
    console.log('Server is running ohh!!');
})