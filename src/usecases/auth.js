const User = require("../models/users");
const bcrypt = require("../lib/bcrypt");
const jwt = require("../lib/jwt");

async function login(email,passwordR){
    const userFound = await User.findOne({email});

    if(!userFound) throw new Error("Invalid Credentials");

    const {name,lastName,picture,address,createdAt,password} = userFound

    const isValidPassword = await bcrypt.compare(passwordR,password);

    if(!isValidPassword) throw new Error("Invalid Credentials");

    const token = jwt.sign({id:userFound._id});

    return {name,lastName,picture,address,createdAt,token};

}

module.exports = { login }