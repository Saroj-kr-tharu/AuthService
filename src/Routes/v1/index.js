const express = require("express");
const router = express.Router();



router.get('/', (req,res)=> {
    return res.status(200).json({
        message:"Welcome To Auth Service Bro",
        success:false,
        data:{},
        err: {},
        
    })
})



module.exports = router;