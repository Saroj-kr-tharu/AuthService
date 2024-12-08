
const AuthRepo = require('../Repository/authRepository');
const auth = new AuthRepo();

const { PRIVATEJWT } = require("../config/serverConfig");

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const createService = async (data) => {
    try {
        const res = await auth.create(data);
        return res;
    } catch (error) {
        console.log("Something went wrong in service layer (create)");
        throw error;
    }
}

const deleteService = async (email) => {
    try {
        const res = await auth.Delete(email);
        return res;
    } catch (error) {
        console.log("Something went wrong in service layer (delete service)");
        throw error;
    }
}

const createToken = async (data) => {
    try {
        const token = await jwt.sign(
            data,
            PRIVATEJWT,
            {
                expiresIn: 120, // 1 min or 60 sec
            }
        );


        return token;
    } catch (error) {
        console.log("Something went wrong in service layer (creating the token)");
        throw error;
    }
}

const verityTokenService = async (token) => {
    try {
        const response = jwt.verify(token, PRIVATEJWT);
        if (!response)
            throw { error: 'Invalid Token ' }

        const user = await auth.getByEmail(response.email);
        if (!user)
            throw ("Email is not present");

        return {
            id: user.id,
            email:user.email,
        
        };
    } catch (error) {
        console.log("Something went wrong in service layer (verify token)");
        throw error;
    }
}

const loginService = async (data) => {
    try {
        const user = await getUserByEmailService(data.email);

        const checkPass = checkPasswordService(data.password, user.password)
        const token = await createToken(data);

        console.log(token);
        return token;
    } catch (error) {
        console.log("Something went wrong in service layer (login service)");
        throw error;
    }
}

const getUserByEmailService = async (email) => {
    try {
        const user = await auth.getByEmail(email);
        if (!user)
            throw ("Email is not present");
        return user;
    } catch (error) {
        console.log("Something went wrong in service layer (geting user by email service)");
        throw error;
    }
}

const checkPasswordService = (plainpasword, hash) => {
    try {
        const match = bcrypt.compareSync(plainpasword, hash);
        if (!match)
            throw ("Password is not match");
        return match;
    } catch (error) {
        console.log("Something went wrong in service layer (CheckPassword)");
        throw error;
    }
}


const addRoleService = async(data) => {
    try {
        const res = await auth.addRole(data)
        return res;

    } catch (error) {
        console.log("Something went wrong in service layer (addRoleService)");
        throw error;
    }
}

const checkRoleService = async(data) => {
    try {
        const res = await auth.checkRole(data)
        return res;

    } catch (error) {
        console.log("Something went wrong in service layer (checkRoleService)");
        throw error;
    }
}

module.exports = {
    createService,
    deleteService,
    loginService,
    verityTokenService,
    addRoleService,
    checkRoleService
}