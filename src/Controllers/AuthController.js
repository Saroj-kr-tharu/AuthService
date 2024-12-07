
const { createService, deleteService , loginService} = require('../Services/authService');


const createController = async (req, res) => {
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
        const datares = req.query.id;
        // console.log(datares);
        

        const response = await deleteService(datares);
        return res.status(201).json({
            message: "Successfully to Signup",
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

const LoginController = async (req, res) => {
    try {
        const datares = req.body;
        // console.log(datares);
        

        const response = await loginService(datares);
        return res.status(201).json({
            message: "Successfully to Signup",
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
module.exports = {
    createController,
    deleteController,
    LoginController
}
