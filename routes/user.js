var express = require('express');
var router = express.Router();

/* GET home page. */

let products=[{
name:'men shoe',
category:'foot wear',
price:700,
image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'

},
{
  name:'formal shoe',
category:'foot wear',
price:1200,
image:'http://c.trend.ge/2017/04/18/6.jpg'
},
{
  name:'baby shoe',
  category:'foot wear',
  price:1000,
  image:'https://images-eu.ssl-images-amazon.com/images/I/71JeoJmz11L._SX395_SY395_QL70_ML2_.jpg'
},
{
  name:'girls shoe',
  category:'foot wear',
  price:600,
  image:'https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/21802/194043/Smile-Circle-2018-Spring-Summer-White-Sneakers-Women-Ultra-soft-Lace-up-Casual-Shoes-Women-Flat__72169.1546426407.jpg?c=2?imbypass=on'
},
{
  name:'baby shoe',
  category:'foot wear',
  price:1000,
  image:'https://images-eu.ssl-images-amazon.com/images/I/71JeoJmz11L._SX395_SY395_QL70_ML2_.jpg'
},
{
  name:'girls shoe',
  category:'foot wear',
  price:600,
  image:'https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/21802/194043/Smile-Circle-2018-Spring-Summer-White-Sneakers-Women-Ultra-soft-Lace-up-Casual-Shoes-Women-Flat__72169.1546426407.jpg?c=2?imbypass=on'
},
{
  name:'baby shoe',
  category:'foot wear',
  price:1000,
  image:'https://images-eu.ssl-images-amazon.com/images/I/71JeoJmz11L._SX395_SY395_QL70_ML2_.jpg'
},
{
  name:'girls shoe',
  category:'foot wear',
  price:600,
  image:'https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/21802/194043/Smile-Circle-2018-Spring-Summer-White-Sneakers-Women-Ultra-soft-Lace-up-Casual-Shoes-Women-Flat__72169.1546426407.jpg?c=2?imbypass=on'
}
]





router.get('/', function(req, res, next) {
  res.render('index',{products, user:true});
});





router.get('/signupRq', function(req, res, next) {
  res.render('signup',{user:true,signup:true});
});

router.post('/signup', function(req, res, next) {
  console.log(req.body);
  res.render('login',{user:true});
});

router.post('/login', function(req, res, next) {
  res.render('index');
});
















module.exports = router;
