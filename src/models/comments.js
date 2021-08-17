const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    body:{
        type:String,
        required:true,
        trim:true
    },   
    likes: { 
        type: Number, 
        default: 0 
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: 'users',
    },

}, 
{
    timestamps: true
});

const model = mongoose.model('comments',commentsSchema);

module.exports = model;