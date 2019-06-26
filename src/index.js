const express = require('express');
const app = express();
const path = require('path');

//setting
app.set('port',3000)
app.set('views',path.join(__dirname, 'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');
//route
app.use(require('./routes/route'));
//public file o static file
app.use(express.static(path.join(__dirname,'public')));


app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'));
    console.log(__dirname) ;
});