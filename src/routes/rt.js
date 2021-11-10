const { Router } = require('express');
const router = Router();

const User = require('../models/user');

//GET
router.get('/getUsers',(req, res)=>{
    User.find()
    .then((doc)  => {
        res.send(doc);
    })
})

//POST

router.post('/addUser',(req, res)=>{
    try{
        user.insertMany([{name: req.body.name, last_name: req.body.last_name, code: req.body.code}], 
            (err) =>{
                if(err){
                    console.log('Error while POST');
                }else{
                    res.send('POST OK');
                }
            });
    }catch(err){
        console.log(err)
    }
})

//UPDATE
router.put('/updateCourse/:key', (req, res) =>{
    const { key } = req.params;
    user.findOneAndUpdate({code: key},
        {
            name : req.body.name,
            last_name : req.body.last_name,
            code : key
        },(err)=>{
            if(err){
                console.log(err);
            }else{
                res.send('UPDATE OK');
            }
        })

});
//DELETE

router.delete('/deleteUser/:key',(req,res) =>{
    const {key} = req.params;
    user.findOneAndDelete({code: key}, (err, doc) =>{
        if(err){
            console.log(err);
        }else{
            user.json(doc);
        }
    })
})

module.exports = router;