var express = require('express');
var router = express.Router();
var productHelpers=require('../helpers/product-helpers')
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
  console.log(req.body);
  res.render('user/login',{log:true});
});

router.post('/login', function(req, res, next) {
  res.redirect('/')
});
















module.exports = router;
