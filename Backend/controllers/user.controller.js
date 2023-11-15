const userModel = require('../models/user.model');

const registerUser = async (req, res)=>{
    const userDetails = req.body;
    const email = userDetails.email;
    try {
        const result = await userModel.findOne({ email: email }).exec();
      
        if (result) {
          res.send({ message: 'E-mail already exists.', status: false });
        } else {
          const form = new userModel(userDetails);
          await form.save();
          res.send({ message: 'Sign up successful', status: true });
        }
      } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Internal Server Error', status: false });
      }
      
}

const userSignIn = (req, res)=>{
  const userDetails = req.body;
  const email = userDetails.email;
  const password = userDetails.password;
  userModel.findOne({email:email}, (err, user)=>{
    if(err){
      console.log(err);
      res.status(500).send({message: 'Internal Server Error', status:false});
    }else{
      if(!user){
        res.send({message: 'E-mail does not exist, kindly create an account', status:false})
      }else{
        user.validatePassword(password, (err, same)=>{
          if(err){
              res.status(500).send({message: 'Internal Server Error.', status: false});
          }else{
              if(!same){
                  res.send({message: 'Some of your information is not correct. Please try again.', status: false});
              }else{
                  const hairConnectToken = jwt.sign({email}, SECRET, {expiresIn: '10h'})
                  res.send({message: 'Sign in successful.', status: true, hairConnectToken});
              }
          }
      })
      }
    }
  })
}

module.exports = {
    registerUser,
    userSignIn
}