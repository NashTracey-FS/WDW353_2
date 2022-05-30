const express = require('express');
const router = express.Router();
const sessions = require('express-session')
const postRegistration = require('../../db/db');
const getRegistration = require('../api/api')

router.use(
    sessions({
        secret:'supersecretdude976678698786',
        saveUninitialized: true,
        resave: false,
    })
);

let session;

router.get("/",(req,res,next)=>{
   session= req.session;
    res.render("index",{
        pagename: "Home",
        sess: session,
    });
});

router.get("/about", (req,res)=>{
    session= req.session;
    res.render("about",{
        pagename: "About",
        sess: session
    })
})
router.get("/contact", (req,res)=>{
    session= req.session;
    res.render("contact",{
        pagename: "Contact",
        sess: session,
    })
})

router.get("/portfolio", (req,res)=>{
    session= req.session;
    res.render("portfolio",{
        pagename: "Portfolio",
        sess: session,
    })
})
router.get("/register", (req,res)=>{
    session= req.session;
    res.render("register",{
        pagename: "Register",
        sess: session,

    })
})
router.post('/register', async (req,res)=>{
   
    if(req.body.email != null){
        session= req.session;
        session.email = email;
        const data ={
                firstname: req.body.firstname,
                email: email,
                password: pw,
                lastname: req.body.lastname,
                address: req.body.address,
                city: req.body.city,
                state:req.body.state,
                age: req.body.age,
                gender: req.body.gender,
                consent: req.body.consent,
                bio: req.body.bio,
                password: req.body.password,
                metadata:{
                    hostname: req.hostname,
                    method: req.method,
                },

        };
        await   getRegistration(data).then(result =>{
            console.log(result.data);
            res.render('index',{
                pagename:'Home',
                message:result.data.message,
                sess: session
            })
        }).catch(err=>{
            res.render('register',{
                pagename: 'Register',
                error: err.message,
            })
        });
      

    }else{
        res.render('register',{
            pagename: 'Register',
            error: "Invalid Credentials",
        })
    }
})



module.exports =router;