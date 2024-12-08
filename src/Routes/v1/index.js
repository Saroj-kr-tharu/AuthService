const express = require("express");

const {
    signinController,
    deleteController,
    signupController,
    isAuthenticatedController,
    addRoleController,
    checkRoleController
} = require('../../Controllers/AuthController');

const {
    deleteValidation,
    signupandSinginandValidation,
    roleValidation
} = require("../../Middlewares/authMiddleare");

const router = express.Router();


router.post('/signup', signupandSinginandValidation, signupController);
router.delete('/delete', deleteValidation, deleteController);
router.post('/signin', signupandSinginandValidation, signinController);
router.post('/authenticate', isAuthenticatedController);
router.post('/checkRole', roleValidation, checkRoleController);
router.post('/addRole', roleValidation, addRoleController);

module.exports = router;