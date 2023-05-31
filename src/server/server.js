const express = require('express');
const app = express();
const user_inform = require('./routes/user_inform');

app.use('/user_inform', user_inform);

const port =8080;
app.listen(port, ()=> console.log('server is running'));

app.get('/', function(req, res){
    res.send('hello wordl');
})