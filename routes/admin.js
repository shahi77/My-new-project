var express = require('express');
var router = express.Router();
var productHelpers=require('../helpers/product-helpers')





/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelpers.getAllproducts().then((products)=>{
    console.log(products);
    res.render('admin/view-products',{products, admin:true});
  })
  
});

router.get('/add-products',function(req,res){
res.render('admin/add-products',{admin:true})
})


router.post('/add-product',function(req,res){
  
  productHelpers.addProduct(req.body,(id)=>{
   
    let images=req.files.images  
    images.mv('./public/product-images/'+id+'.png',(err,done)=>{
      if(!err){
        res.render('admin/add-product')
      }else{
        console.log(err);
      }

    })

  })
  })


module.exports = router;
