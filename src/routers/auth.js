const express = require('express');
const auths = require('../usecases/auth');
const router = express.Router();

router.post('/login',async(request,response)=>{
    try {
        const {email,password} = request.body;
        const {name,lastName,picture,address,createdAt,token} = await auths.login(email,password);
        response.json({
            success: true,
            message: 'user logged in',
            data: {
                name,
                lastName,
                email,
                picture,
                address,
                createdAt,
                token
            }
        });
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not log in',
            error: {
                error:error.message
            }
        })
    }
});

module.exports = router;