const Comment = require('../models/comments')


function getAll() {
    return Comment.find()
}

function create({ creator, content, date, post }) {
    return Comment.create({ creator, content, date, post })
}

function deleteById(id) {
    return Comment.findByIdAndDelete(id)
}

function updateById(id, newData) {
    return Comment.findByIdAndUpdate(id, newData, { new: true, runValidators: true })
}

module.exports = {
    getAll,
    create,
    deleteById,
    updateById
}