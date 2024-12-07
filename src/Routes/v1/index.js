const express = require("express");

const {createController, deleteController,
    LoginController
} = require('../../Controllers/AuthController');

const router = express.Router();



router.get('/', (req,res)=> {
    return res.status(200).json({
        message:"Welcome To Auth Service Bro",
        success:true,
        data:{},
        err: {},
    })
})

router.post('/signup',createController );
router.delete('/delete',deleteController );
router.get('/loginup', LoginController);


module.exports = router;