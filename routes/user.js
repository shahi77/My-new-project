const { response } = require('express');
var express = require('express');
var router = express.Router();
var productHelpers=require('../helpers/product-helpers');
const { doSignup } = require('../helpers/users-helpers');

var usersHelpers=require('../helpers/users-helpers')
/* GET home page. */




router.get('/', function(req, res) {

  let users=req.session.user
  productHelpers.getAllproducts().then((products)=>{
    res.render('user/view-products',{users,products,user:true});
  })
  
});


router.get('/login',function(req, res){
let user=req.session.loggedIn
req.session.save()
if(user){
  res.redirect('/')
  Response.ClearHeaders();
}else{
  res.render('user/login');
}
  
  
});



router.get('/signup', function(req, res, next) {
  res.render('user/signup',{sign:true});
});

router.post('/signup', function(req, res, next) {
  console.log(req.body);
  usersHelpers.doSignup(req.body).then((response)=>{
    res.render('user/login',{log:true});
  })
  
});



router.post('/login', function(req, res, next) {
  usersHelpers.doLogin(req.body).then((response)=>{
    
    if(response.status){
      req.session.loggedIn=true
      req.session.user=response.user
      res.redirect('/')
    }else{
      res.redirect('/login')
    }
  })
    
  
 
});



router.get('/addcart',((req,res)=>{
  if(req.session.loggedIn)
    res.send('success')
    else res.redirect('/login')
  
}))





router.get('/logout',((req,res)=>{
  req.session.destroy()
  res.redirect('/login')
}))










module.exports = router;
