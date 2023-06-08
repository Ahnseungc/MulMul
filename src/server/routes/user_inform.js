const express = require('express')
const router =express.Router();
const db1 = require("../config/db");
const multer = require("multer")
const db2 = require("../config/db_product");
const db3 = require("../config/db_com");
const path = require("path");
const { faTruckMedical } = require('@fortawesome/free-solid-svg-icons');
router.use(express.json());
router.use(express.urlencoded({extended: false}));


// downgrading to multer 1.4.3
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'public/Img/')
    },    
    filename: function(req,file,cb) {
        const ext = path.extname(file.originalname);
        cb(null,path.basename(file.originalname, ext)+"-"+Date.now()+ext);
    },
});

const upload =({storage: storage})

router.get('/login',(req, res)=>{
    res.send({data: 'data'})
});

// ,upload.single("file")
router.post('/productadd',(req,res)=>{
    
    
    // upload.single("img")
    const name = req.body.name;
    const price = req.body.price;
    const content = req.body.content;
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null,"image/")
        },
        filename: function(req,file,cb){
            cb(null,"img");
        }    
    })

    // const upload = multer({ storage: storage}).single("filee");
    // upload(req,res, function(err){
    //     if(err){
    //         return res.json({sucess: false, err});
    //     }
        
    //     res.json({
    //         sucess: true,
    //         message: "Image uploaded",
    //     })
    // })
    
   
   const image = `/image/${req.files.file.originalFilename}`;
   const datas = [name,price,content,image]
   console.log(datas);


    // const sql = "INSERT INTO products (p_name,p_price,p_content,image) values (?,?,?,?)"
    // db2.query(sql,datas,(err,rows)=>{
    //     if(err){
    //         console.log("err: "+err);
    //     }
    //     else{
    //         console.log("rows: "+ JSON.stringify(rows));

    //         res.redirect("/products");
    //     }
    // })

})

router.post('/community',(req,res)=>{
    console.log(req.body);
    const header = req.body.header;
    const body = req.body.body;
    // const address = req.query;
    const user = req.body.user;

    const sql3 = 'INSERT INTO com (id,header,body) VALUES (?,?,?);';
    db3.query(sql3, [user,header,body],(err,result)=>{
        console.log(err);
        res.send(result);
    })
})

router.get('/community',(req,res)=>{
    const sql4 = 'SELECT * FROM com';
    db3.query(sql4,(err,result)=>{
        res.send(result);
        console.log(err);
    })
    
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