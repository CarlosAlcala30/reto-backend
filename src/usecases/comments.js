const Comment = require('../models/comments')


function getAll() {
    return Comment.find()
}

function create({ body, likes, author }) {
    return Comment.create({ body, likes, author })
}

function deleteById(id) {
    return Comment.findByIdAndDelete(id)
}

function updateById(id, newData) {
    return Comment.findByIdAndUpdate(id, newData, { new: true, runValidators: true })
}

function getByID(id){
    return Comment.findById(id)
}

module.exports = {
    getAll,
    create,
    deleteById,
    updateById,
    getByID
}