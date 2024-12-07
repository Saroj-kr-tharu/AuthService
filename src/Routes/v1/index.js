const express = require("express");

const { signinController, deleteController,
    signupController,
    isAuthenticatedController
} = require('../../Controllers/AuthController');

const {
    deleteValidation,
    signupandSinginandValidation
} = require("../../Middlewares/authMiddleare");

const router = express.Router();


router.post('/signup', signupandSinginandValidation, signupController);
router.delete('/delete', deleteValidation, deleteController);
router.post('/signin', signupandSinginandValidation, signinController);
router.post('/authenticate', isAuthenticatedController);


module.exports = router;