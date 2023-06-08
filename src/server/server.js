const express = require('express');
const app = express();
const user_inform = require('./routes/user_inform');
const multipart = require('connect-multiparty');


app.use(multipart());
app.use('/user_inform', user_inform);




const port =8080;
app.listen(port, ()=> console.log('server is running'));

