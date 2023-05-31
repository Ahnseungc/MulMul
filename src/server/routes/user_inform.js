const express = require('express');
const router =express.Router();
const db = require("../config/db");
const util = require('util');

router.get('/login',(req, res)=>{
    res.send({data: 'data'})
});

router.post('/onLogin',(req,res)=>{
    // console.log(`= = = > req : ${util.inspect(req)}`);
    const user_id = req.query.user_id;
    const user_pw = req.query.user_pw;
    
    const sql1 = 'SELECT COUNT(*) AS result FROM user WHERE id = ?'
    
    db.query(sql1,user_id,(err,data)=>{

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
                db.query(sql2, params, (err, data) => {
                    
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