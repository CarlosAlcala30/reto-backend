const express = require('express')
const comments = require('../usecases/comments')
const router = express.Router();

const isAuth = require("../middleware/auth");

router.get('/',isAuth, async (request, response) => {
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

router.post('/',isAuth, async (request, response) => {
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

router.delete('/:id',isAuth, async (request, response) => {
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

router.patch('/:id',isAuth, async (request, response) => {
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

router.get('/:id',isAuth, async (request, response) => {
    try {
        const { id } = request.params

        const comment = await comments.getByID(id)

        response.json({
            success: true,
            message: 'Comment Obtained',
            data: {
                comment: comment
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Comment not Obtained',
            error: error.message
        })
    }
})

module.exports = router
