const express = require('express')
const posts = require('../usecases/posts')
const router = express.Router()

router.get('/', async (request, response) => {
    try {
      const allPosts = await posts.getAll()
      response.json({
          success: true,
          message: 'All Posts',
          data: {
              posts: allPosts
          }
      })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get all posts',
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
    try {
        const postData = request.body
        const postCreated = await posts.create(postData)
         response.json({
             success: true,
             message: 'Post Created',
             data: {
                 koder: postCreated
             }
         })

    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at create koder',
            error: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const postDelated = await posts.deleteById(id)
        response.json({
            success: true,
            message: 'Post deleted',
            data: {
                post: postDelated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at create koder',
            error: error.message
        })
    }
})

router.patch('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const { body: postData } = request

        const postUpdated = await posts.updateById(id, postData)

        response.json({
            success: true,
            message: 'Post updated',
            data: {
                koder: postUpdated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at create post',
            error: error.message
        })
    }
})

router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params
        const getPostById = await posts.getPostById(id)

        response.json({
            success: true,
            message: 'The requested post...',
            data: {
                getPostById
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'There was an error processing the request....',
            error: error.message
        })
    }
})


module.exports = router