const model = require("./comments");

const mongoose = required('mongoose;');

const postsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: 'users',
        required:true
    },
    body:{
        type:String,
        required:true
    },
    likes: { 
        type: Number, 
        default: 0 
    },
    cover:{
        type: String,
        required:true,
        trim:true
    },
    tags:[
        {
            type:String,
            trim:true,
            required:true
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'comments'
        }
    ]
    
}, 
{
    timestamps: true
});

const model = mongoose.model('posts',postsSchema);

module.exports = model;