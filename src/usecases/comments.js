const Comment = require('../models/comments')


function getAll() {
    return Comment.find().populate('author')
}

function create(comment) {
    return Comment.create(comment);
}

function deleteById(id) {
    return Comment.findByIdAndDelete(id)
}

function updateById(id, newData) {
    return Comment.findByIdAndUpdate(id, newData, { new: true, runValidators: true }).populate('author')
}

function getByID(id){
    return Comment.findById(id).populate('author')
}

module.exports = {
    getAll,
    create,
    deleteById,
    updateById,
    getByID
}