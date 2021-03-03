var db=require('../config/connection')
var collection=require('../config/collections')
const collections = require('../config/collections')
var bcrypt=require('bcrypt')

module.exports={
    doSignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            userData.password=await bcrypt.hash(userData.password,10)
            db.get().collection(collections.USER_COLLECTION).insertOne(userData).then((data)=>{
                resolve(data.ops[0])
            })
            
        })

    },
    doLogin:(userData)=>{
       
        return new Promise(async(resolve,reject)=>{
            let loginStatus=false
            let response={}
            let user=await db.get().collection(collections.USER_COLLECTION).findOne({Email:userData.Email})
            if(user){
                bcrypt.compare(userData.password,user.password).then((status)=>{
                    if(status){
                        console.log('login success');
                    }else{
                        console.log('login fail');
                    }
                })
            }else{
                console.log('no user')
            }
        })
    }
}








