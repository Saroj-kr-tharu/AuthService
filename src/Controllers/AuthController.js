const {
    createService,
    deleteService,
    loginService,
    verityTokenService
} = require('../Services/authService');


const signupController = async (req, res) => {
    try {
        const datares = req.body;
        const response = await createService(datares);
        return res.status(201).json({
            message: "Successfully to Signup",
            success: true,
            data: response,
            err: {}
        });

    } catch (error) {
        console.log("Something went wrong in controller level (creating)");
        return res.status(501).json({
            message: "Failed to Signup",
            success: false,
            data: {},
            err: error.message || error
        });

    }
}

const deleteController = async (req, res) => {
    try {
        const datares = req.body;

        const response = await deleteService(datares);

        let msg = "Successfully delete User";
        if (response === 0)
            mes = "No any user is delete"

        return res.status(201).json({
            message: msg,
            success: true,
            data: response,
            err: {}
        });

    } catch (error) {
        console.log("Something went wrong in controller level (deleting)");
        return res.status(501).json({
            message: "Failed to Signup",
            success: false,
            data: {},
            err: error.message || error
        });

    }
}

const signinController = async (req, res) => {
    try {
        const datares = req.body;

        const response = await loginService(datares);
        return res.status(201).json({
            message: "Successfully to Signup",
            success: true,
            data: response,
            err: {}
        });

    } catch (error) {
        console.log("Something went wrong in controller level (login)");
        return res.status(401).json({
            message: "Failed to Signup",
            success: false,
            data: {},
            err: error.message || error
        });

    }
}

const isAuthenticatedController = async (req, res) => {
    try {
        const token = req.header('x-access-token');
        if (!token)
            throw ("token is not present")
        const response = await verityTokenService(token);

        return res.status(201).json({
            message: "Successfully Authenticated",
            success: true,
            data: response,
            err: {}
        });

    } catch (error) {
        console.log("Something went wrong in controller level (login)");
        return res.status(401).json({
            message: "Unable to autheticated",
            success: false,
            data: {},
            err: error.message || error
        });

    }
}

module.exports = {
    signupController,
    signinController,
    deleteController,
    isAuthenticatedController
}
