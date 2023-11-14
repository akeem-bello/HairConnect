const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    province: String,
    phoneNumber: Number,
    email: String,
    password: String
});

const saltRound = 10;
userSchema.pre('save', function(next){
    bcrypt.hash(this.password, saltRound, (err, hashedPassword)=>{
        if(err){
            console.log(err)
        }else{
            this.password = hashedPassword
            next()
        }
    })
})

userSchema.methods.validatePassword = function(password, callback){
    bcrypt.compare(password, this.password, (err, same)=>{
        if(!err){
            callback(err, same);
        }else{
            next();
        }
    })
}
const userModel = mongoose.model("user_tb", userSchema);
module.exports = userModel;