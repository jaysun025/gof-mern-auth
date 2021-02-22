const express = require('express')
const router = express.Router()
const Blog = require('../models/BlogPost')
const methodOverride = require('method-override');



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


router.put('/updateblog', (req, res) => {
    console.log('this route is getting hit')

})


router.post('/createcomment', (req, res)=>{
    console.log('route hit')
    Blog.create({
        comment: req.body.comment
    })
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err=>{
        console.log('this is an error', err)
    })
})

module.exports = router
