const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

serviceProviderSchema = mongoose.Schema({
    companyName: String,
    address: String,
    city: String,
    province: String,
    phoneNumber: Number,
    email: String,
    password: String
})

const saltRound = 10;
serviceProviderSchema.pre('save', function(next){
    bcrypt.hash(this.password, saltRound, (err, hashedPassword)=>{
        if(err){
            console.log(err);
        }else{
            this.password = hashedPassword;
            next();
        }
    })
})

serviceProviderSchema.methods.validatePassword = async function(password){
    try{
        const result = await bcrypt.compare(password, this.password);
        return result;
    }catch(err){
        throw err;
    }
}

const serviceProviderModel = mongoose.model('serviceProvider_tb', serviceProviderSchema);
module.exports = serviceProviderModel;