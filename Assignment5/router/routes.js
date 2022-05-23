const express = require('express');
const router = express.Router();
const sessions = require('express-sessions');


router.get('/',(req,res) =>{
   
    res.render('index',{
        pagename: 'Home',
     
    })
})
router.get('/about',(req,res) =>{
   
    res.render('about',{
        pagename: 'About',
       
    })
})
router.get('/contact',(req,res) =>{
   
    res.render('contact',{
        pagename: 'contact',
      
    })
})
router.get('/portfolio',(req,res) =>{
    
    res.render('portfolio',{
        pagename: 'Portfolio',
      
    })
})
router.get('/register',(req,res) =>{
    
    res.render('register',{
        pagename: 'Sign Up',
       
    })
})
router.get('/profile',(req,res) =>{
   
    res.render('profile',{
        pagename: 'Profile',
      
    })
})

router.get('/login',(req,res)=>{
    res.render('login',{
        pagename: 'Login',
    });
});

let bool =true;

router.post('/login',(req, res) => {
if(bool){
    session = req.session;
    res.render('profile',{pagename: "Profile", sess:session});
}else{
    res.render("login",{pageName:"Login", error:"Not Found! Try again!"})
}
});

router.get('/logout',(req,res)=> {
    req.session.destroy(null);
    res.render('index',{pageName: 'Home'})
});



module.exports = router;