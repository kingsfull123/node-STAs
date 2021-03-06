const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404 Page'
    })
})

app.listen(port, () => {
    console.log(`Server is running ar port ${port}`)
})