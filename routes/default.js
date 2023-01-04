const express = require('express');
const router = express.Router();


router.get('/index',function(req , res){

    res.render('index');
    });


router.get('/confirm',function(req , res){

    res.render('confirm');
     });

router.get('/about',function(req , res){

    res.render('about');
    });

module.exports=router;