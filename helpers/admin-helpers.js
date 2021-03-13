var db=require('../config/connection')
var collection=require('../config/collections')
const collections = require('../config/collections')
var bcrypt=require('bcrypt')



module.exports={
    doSignup:(adminData)=>{
        return new Promise(async(resolve,reject)=>{
            adminData.password=await bcrypt.hash(adminData.password,10)
            db.get().collection(collections.ADMIN_COLLECTION).insertOne(adminData).then((data)=>{
                resolve(data.ops[0])
                
            })
            
        })

     },

    
    doLogin:(adminData)=>{
       
        return new Promise(async(resolve,reject)=>{
            let loginStatus=false
            let response={}
            let admin=await db.get().collection(collections.ADMIN_COLLECTION).findOne({email:adminData.email})
            if(admin){
                bcrypt.compare(adminData.password,admin.password).then((status)=>{
                    if(status){
                        response.admin=admin
                        response.status=true
                        console.log('login success');
                        resolve(response)
                    }else{
                        console.log('login fail');
                        response.status=false
                        resolve(response)
                    }
                })
            }else{
                console.log('login fail')
                response.status=false
                resolve(response)
            }
        })
    }
}



