var express = require('express');
var router = express.Router();
var productHelpers=require('../helpers/product-helpers');
const { doSignup } = require('../helpers/users-helpers');

var usersHelpers=require('../helpers/users-helpers')
/* GET home page. */







router.get('/', function(req, res, next) {
  productHelpers.getAllproducts().then((products)=>{
    console.log(products);
    res.render('user/view-products',{products, user:true});
  })
  
});





router.get('/signupRq', function(req, res, next) {
  res.render('user/signup',{sign:true});
});

router.post('/signup', function(req, res, next) {
  usersHelpers.doSignup(req.body).then((response)=>{
     res.render('user/login',{log:true});
  })
  
});

router.post('/login', function(req, res, next) {
  usersHelpers.doLogin(req.body)
    res.redirect('/')
  
 
});
















module.exports = router;
