const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
router.post('/signup', userController.registerUser);
router.post('/signin', userController.userSignIn);
router.get('/dashboard', userController.getUserDashboard);
router.post('/service-provider/signup', userController.registerServiceProvider);
router.post('/service-provider/signin', userController.serviceProviderSignIn);
module.exports = router;