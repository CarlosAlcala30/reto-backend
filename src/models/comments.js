const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    body:{
        type:String,
        required:true,
        trim:true
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    likes: { 
        type: Number, 
        default: 0 
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: 'users',
        required:true
    },

});

const model = mongoose.model('comments',commentsSchema);

module.exports = model;