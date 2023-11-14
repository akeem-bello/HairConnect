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

module.exports = {
    registerUser
}