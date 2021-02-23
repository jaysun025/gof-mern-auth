const express = require('express')
const router = express.Router()
const Blog = require('../models/BlogPost')
const methodOverride = require('method-override');
const { requireToken } = require('../middleware/auth')



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


router.post('/createcomment', requireToken, (req, res)=>{

    console.log('route hit')
    Blog.findById('6034000b84834f56c60b19d3')
    .then(foundBlog => {
        foundBlog.comments.push({author: req.user.id , comment:req.body.comment })
        foundBlog.save()
        res.status(201).json(foundBlog)
    })
    .catch(err=>{
        console.log('this is an error', err)
    })
})

module.exports = router
