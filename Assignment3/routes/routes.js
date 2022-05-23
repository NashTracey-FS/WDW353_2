const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.render('index',{
        pagename: "Assignment 3",
    });
});

router.get('/about',(req,res)=>{
    res.render('about',{
        pagename: 'About',
    });
});

router.get('/contact',(req,res)=>{
    res.render('contact',{
        pagename: 'Contact',
    });
});

router.get('/portfolio',(req,res)=>{
    res.render('portfolio',{
        pagename: 'Portfolio',
    });
});

router.get('/register',(req,res)=>{
    res.render('register',{
        pagename: 'Register',
    })
});




module.exports = router;