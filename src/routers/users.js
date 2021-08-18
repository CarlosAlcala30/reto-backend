const express = require('express')
const users = require('../usecases/users')
const router = express.Router();

const isAuth = require("../middleware/auth");

router.get('/',isAuth, async (request, response) => {
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

router.delete('/',isAuth, async (request, response) => {
    try {
      const deleteUsers = await users.deleteById()
      response.json({
          success: true,
          message: 'delete user',
          data: {
              users: allUsers
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
/*
    getAll,
    deleteById,
    updateById,
    getById,
    create*/

module.exports = router;