const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Blog = require('../models/BlogPost')
const bcrypt = require('bcrypt')
const { createUserToken, requireToken } = require('../middleware/auth')
const passport = require('passport')




router.post('/login', (req, res)=>{
    User.findOne({email: req.body.email})
    .then(foundUser => createUserToken(req, foundUser))
    .then(token =>res.json({token}))
    .catch(err => console.log('ERROR loggin ID: ', err))
})

router.post('/signup', (req, res)=>{
    bcrypt.hash(req.body.password, 10)
    .then(hash => ({
        name: req.body.name,
        email: req.body.email,
        password: hash,
    }))
    .then(hashedUser => User.create(hashedUser))
    .then(createdUser => createUserToken(req, createdUser))
    .then(token => res.status(201).json({token}))
    .catch(err => console.log('ERROR CREATING USER', err))
})

router.post('/createblog', (req, res)=>{
    console.log('route hit')
    Blog.create({
        title: req.body.title,
        content: req.body.content
    })
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err=>{
        console.log('this is an error', err)
    })
})




//PRIVATE
//GET /api/private

router.get('/private', requireToken, (req, res)=>{
    return res.json({"message": "granted permission to access this route"})
})




module.exports = router