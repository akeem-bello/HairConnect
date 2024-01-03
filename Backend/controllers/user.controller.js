const userModel = require('../models/user.model');
const serviceProviderModel = require('../models/serviceProvider.model');
const servicesModel = require('../models/services.model')
const SECRET = process.env.SECRET;
const SECRET2 = process.env.SECRET_TWO;
const jwt = require('jsonwebtoken');

const registerUser = async (req, res)=>{
    const userDetails = req.body;
    const email = userDetails.email;
    try{
        const result = await userModel.findOne({ email: email }).exec();
        if(result){
          res.send({ message: 'E-mail already exists.', status: false });
        }else{
          const form = new userModel(userDetails);
          await form.save();
          res.send({ message: 'Sign up successful', status: true });
        }
      }catch(err){
        console.error(err);
        res.status(500).send({ message: 'Internal Server Error', status: false });
      }
      
}

const userSignIn = async (req, res)=>{
  const userDetails = req.body;
  const email = userDetails.email;
  const password = userDetails.password;
  try{
    const user = await userModel.findOne({ email: email });
    if(!user){
      res.send({ message: 'E-mail does not exist, kindly create an account', status: false });
      return;
    }
    const isPasswordValid = await user.validatePassword(password);
    if(!isPasswordValid){
      res.send({ message: 'Your password is incorrect, please try again.', status: false });
      return;
    }else{
      const hairConnectToken = jwt.sign({ email }, SECRET, { expiresIn: '10h' });
      res.send({ message: 'Sign in successful.', status: true, hairConnectToken });
    }
    
  }catch(err){
    console.error(err);
    res.status(500).send({ message: 'Internal Server Error', status: false });
  }
  
}

const getUserDashboard = async (req, res) => {
  try{
    const hairConnectToken = req.headers.authorization.split(' ')[1];
    const verifiedToken = await jwt.verify(hairConnectToken, SECRET);
    const email = verifiedToken.email;
    const userDetails = await userModel.findOne({ email: email });
    res.send({status: true, userDetails });
  }catch(err) {
    console.error(err);
    res.send({ message: 'jwt failed', err, status: false });
  }
};

const registerServiceProvider = async (req, res)=>{
  const serviceProviderDetails = req.body;
  const email = serviceProviderDetails.email;
  try{
    const result = await serviceProviderModel.findOne({email: email});
    if(result){
      res.send({message: 'E-mail already exists', status:false})
    }else{
      const form = new serviceProviderModel(serviceProviderDetails);
      await form.save();
      res.send({message: 'Sign in successful.', status:true});
    }
  }catch(err){
      console.error(err);
      res.status(500).send({message: 'Internal Server Error.', status:false})
    }
}

const serviceProviderSignIn = async (req, res)=>{
  const serviceProviderDetails = req.body;
  const email = serviceProviderDetails.email;
  const password = serviceProviderDetails.password;
  try{
    const serviceProvider = await serviceProviderModel.findOne({ email: email });
    if(!serviceProvider){
      res.send({ message: 'E-mail does not exist, kindly create an account', status: false });
    }
    const isPasswordValid = await serviceProvider.validatePassword(password);
    if(!isPasswordValid){
      res.send({ message: 'Your password is incorrect, please try again.', status: false });
    }else{
      const hairConnectToken2 = jwt.sign({ email }, SECRET2, { expiresIn: '10h' });
      res.send({ message: 'Sign in successful.', status: true, hairConnectToken2 });
    }
  }catch(err){
    console.error(err);
    res.status(500).send({ message: 'Internal Server Error', status: false });
  }
}

const getServiceProviderDashboard = async (req, res) => {
  try{
    const hairConnectToken2 = req.headers.authorization.split(' ')[1];
    const verifiedToken = await jwt.verify(hairConnectToken2, SECRET2);
    const email = verifiedToken.email;
    const serviceProviderDetails = await serviceProviderModel.findOne({ email: email });
    res.send({status: true, serviceProviderDetails });
  }catch(err) {
    console.error(err);
    res.send({ message: 'jwt failed', err, status: false });
  }
};

const addServices = async (req, res)=>{
  const serviceDetails = req.body;
  try{
    const form = new servicesModel(serviceDetails);
    await form.save();
    res.send({ message: 'Services added successful', status: true });
      
    }catch(err){
      console.error(err);
      res.status(500).send({ message: 'Internal Server Error', status: false });
    }
}


module.exports = {
    registerUser,
    userSignIn,
    getUserDashboard,
    registerServiceProvider,
    serviceProviderSignIn,
    getServiceProviderDashboard,
    addServices
}