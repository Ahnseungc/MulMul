const express = require('express');
const app = express();
const user_inform = require('./routes/user_inform');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');


app.use(multipart());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/user_inform', user_inform);


const port =8080;
app.listen(port, ()=> console.log('server is running'));

