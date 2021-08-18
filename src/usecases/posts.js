const Post = require('../models/posts')

function getAll() {
   return Post.find().populate("author").populate("comments");
}

 function create (postData) {
   return Post.create(postData).populate("author");
}

function deleteById(id) {
   return Post.findByIdAndDelete(id)
}

function updateById(id, newData) {
    return Post.findByIdAndUpdate(id, newData, { new: true}).populate("author");
}

function getPostById(id){
   return Post.findById(id).populate("users").populate("comments").populate("author");
}

module.exports = {
    getAll,
    create,
    deleteById,
    updateById,
    getPostById
}