const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:2,
        maxLenght:50
    },
    lastName:{
        type:String,
        required:true,
        minlength:2,
        maxLenght:50
    },
    picture:{
        type:String,
        default: 'https://mongoose-os.com/images/generic_user.png'
    },
    age:{
        type:Number,
        min:1,
        max:90
    },
    address:{
        type:String,

    },
    email:{
        type:String,
        required:true,
        match:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm
    },
    password:{
        type:String,
        required:true
    }
}, 
{
    timestamps: true
});

const model = mongoose.model('users',usersSchema);

module.exports = model;