const Post = require('../models/posts')

function getAll() {
   return Post.find().populate("author").populate("comments")
}

 function create (postData) {

   return Post.create({postData})
}

function deleteById(id) {
   return Post.findByIdAndDelete(id)
}

function updateById(id, newData) {
    return Post.findByIdAndUpdate(id, newData, { new: true});
}

function getPostById(id){
   return Post.findById(id).populate("author").populate("comments");
}

module.exports = {
    getAll,
    create,
    deleteById,
    updateById,
    getPostById
}