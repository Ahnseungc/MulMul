const express = require('express');
const router =express.Router();
const db = require("../config/db");
const util = require('util');

router.get('/login',(req, res)=>{
    res.send({data: 'data'})
});

router.post('/onLogin',(req,res)=>{
    console.log(`= = = > req : ${util.inspect(req)}`);
})





module.exports = router;