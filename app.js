const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const router = require('./config/routes');
const config = require('./config/config');

/*DOCU: Declare middlewares */
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/assets'));
app.use('/', router)


/*DOCU: Port to listen to.*/
app.listen(config.port, ()=>console.log(`listening to port ${config.port}💦`))