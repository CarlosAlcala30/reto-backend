const express = require('express')
const comments = require('../usecases/comments.js')
const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const AllComments = await comments.getAll()
        response.json({
            success: true,
            message: 'All comments',
            data: {
                comments: AllComments
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Comment created failed',
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
    try {
        const commentData = request.body
        const commentCreated = await comments.create(commentData)
        response.json({
            success: true,
            message: 'Comment created',
            data: {
                comment: commentCreated
            }
        })

    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error al crear comment',
            error: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const commentDeleted = await comments.deleteById(id)
        response.json({
            success: true,
            message: 'Comment deleted',
            data: {
                comment : commentDeleted
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Comment not deleted',
            error: error.message
        })
    }
})

router.patch('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const { body: commentData } = request

        const commentUpdate = await comments.updateById(id, commentData)

        response.json({
            success: true,
            message: 'Comment updated',
            data: {
                comment: commentUpdated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Comment not updated',
            error: error.message
        })
    }
})

module.exports = router
