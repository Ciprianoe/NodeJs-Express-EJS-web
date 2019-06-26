const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html',{title:'Home Page'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html',{title: 'Contct Page'});
});


module.exports = router; 