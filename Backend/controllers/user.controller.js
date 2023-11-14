const userModel = require('../models/user.model');

const registerUser = (req, res)=>{
    const userDetails = req.body;
    const email = userDetails.email;
    userModel.findOne({email:email}, (err, result)=>{
        if(err){
            res.status(500).send({message: 'Internal Server Error', status:false});
        }else{
            if(result){
                res.send({message: 'E-mail already exists.', status:false})
            }else{
                let form = new userModel(userDetails);
                form.save((err)=>{
                    if(err){
                        res.status(500).send({message: 'Sign up failed. Please, try again.', status:false})
                    }else{
                        res.send({message: 'Sign up successful', status:true})
                    }
                })
            }
        }
    })
}

module.exports = {
    registerUser
}