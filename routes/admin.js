var express = require('express');
var router = express.Router();
var productHelpers=require('../helpers/product-helpers')
var adminHelpers=require('../helpers/admin-helpers')




/* GET users listing. */
 router.get('/admin/product', function(req, res, next) {
   productHelpers.getAllproducts().then((products)=>{
     console.log(products);
    
    res.render('admin/view-products',{products, admin:true});
   
   })
  
})

router.get('/admin',function(req,res){
  productHelpers.getAllproducts().then((products)=>{
    console.log(products);
      if(req.session.loggedIn)
      res.render('admin/view-products',{products, admin:true});
      else
         res.redirect('/admin-login')
   
   })
})

router.get('/admin-login',function(req,res){
  if(req.session.loggedIn){
    res.redirect('/admin')
  }
 else
   res.render('admin/login')
})


router.get('/admin/add-products',function(req,res){
res.render('admin/add-products',{admin:true})
})


router.post('/admin/add-product',function(req,res){
  
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
  
  
  
  
  router.post('/admin/login', function(req, res, next){
    adminHelpers.doLogin(req.body).then((response)=>{
      console.log(response);
      if(response.status){
        req.session.loggedIn=true
        req.session.admin=response.admin
        res.redirect('/admin')
      }else{
        res.render('admin/login')
      }
    })
      
    
   
  });




router.get('/admin/logout',((req,res)=>{
  req.session.destroy()
  res.redirect('/admin-login')
}))






module.exports = router;
