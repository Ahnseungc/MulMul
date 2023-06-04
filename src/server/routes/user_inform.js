const express = require('express')
const router =express.Router();
const db1 = require("../config/db");
const util = require('util');
const multer = require("multer");
const db2 = require("../config/db_product");
const cors = require("cors");
const fs = require('fs');
const path = require("path");


const storage = multer.diskStorage({


    destination: "./public/Img/",    
    filename: function(req,file,cb) {
        cb(null, "imgfile"+Date.now()+path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000}
});

router.get('/login',(req, res)=>{
    res.send({data: 'data'})
});

router.post('/productadd',upload.single("img"),(req,res)=>{
    res.send({
        fileName: req.body.body.img
    })
    
    console.log("접근");
    console.log(req.body);    
    // let img = req.body.img;    
    // console.log(img);
    // var data = [req.body.p_name, req.body.p_price,req.body.p_content];
    // let sql = 'insert into products (p_name,p_price,p_content) values(?,?,?)';
    // db2.query(sql, data, (rows,err)=>{
    //     res.send(rows);
    // })
})

router.post('/onLogin',(req,res)=>{
    // console.log(`= = = > req : ${util.inspect(req)}`);
    const user_id = req.query.user_id;
    const user_pw = req.query.user_pw;
    
    const sql1 = 'SELECT COUNT(*) AS result FROM user WHERE id = ?'
    
    db1.query(sql1,user_id,(err,data)=>{

        console.log(data);
        if(!err){
            if(data[0].result<1){
                res.send({'msg':'입력하신 id가 일치하지 않습니다.'})
            }
            else{
                const sql2 =`SELECT 
                CASE (SELECT COUNT(*) FROM user WHERE id = ? AND password = ?)
                    WHEN '0' THEN NULL
                    ELSE (SELECT id FROM user WHERE id = ? AND password = ?)
                END AS Id
                , CASE (SELECT COUNT(*) FROM user WHERE id = ? AND password = ?)
                    WHEN '0' THEN NULL
                    ELSE (SELECT password FROM user WHERE id = ? AND password = ?)
                END AS Password`;
                const params = [user_id, user_pw, user_id, user_pw, user_id, user_pw, user_id, user_pw]
                db1.query(sql2, params, (err, data) => {                    
                    if(!err) {
                        res.send(data[0])
                    } else {
                        res.send(err)
                    }
                })
            }
        }
        else{
            res.send(err);
        }
    })
    
})


module.exports = router;