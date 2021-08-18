const express = require('express')
const users = require('../usecases/users')
const router = express.Router()

router.get('/', async (request, response) => {
    try {
      const allUsers = await users.getAll()
      response.json({
          success: true,
          message: 'All users',
          data: {
              users: allUsers
          }
      })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get all users',
            error: error.message
        })
    }
})
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
      const deleteUsers = await users.deleteById(id)
      response.json({
          success: true,
          message: 'delete user',
          data: {
              users: deleteUsers
          }
      })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at delete users',
            error: error.message
        })
    }
})
router.patch('/:id', async (request, response) => {
    try {
        const { id } = request.params
      const updateUsers = await users.updateById(id)
      response.json({
          success: true,
          message: 'user update',
          data: {
              users: updateUsers
          }
      })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at update user',
            error: error.message
        })
    }
})

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params
      const getUsersById = await users.getById(id)
      response.json({
          success: true,
          message: 'all user by id',
          data: {
              users: allUsers
          }
      })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get id users',
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
    try {
      const createUsers = await users.create(request.body)
      response.json({
          success: true,
          message: 'user created',
          data: {
              users: createUsers
          }
      })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at create user',
            error: error.message
        })
    }
})
/*
    getAll,
    deleteById,
    updateById,
    getById,
    create*/

module.exports = router