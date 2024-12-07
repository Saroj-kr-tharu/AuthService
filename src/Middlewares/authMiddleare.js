
const signupandSinginandValidation = (req, res, next) => {

    if (!req.body.email || !req.body.password) {

        console.log('Something went wrong in auth middleware');
        return res.status(400).json({
            data: {},
            // err: error || error.message,
            message: 'Email or Password is missing  ',
            success: false
        })

    }

    next();
}

const deleteValidation = (req, res, next) => {

    if (!req.body.email) {

        console.log('Something went wrong in auth middleware');
        return res.status(400).json({
            data: {},
            err:'Email is missing',
            message: 'Email  is missing  ',
            success: false
        })

    }

    next();
}


module.exports = {
    signupandSinginandValidation,
    deleteValidation,
    
}