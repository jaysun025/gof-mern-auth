// import user model
const User = require('../models/User')
const Blog = require('../models/BlogPost')

User.create({
    name: 'jeff',
    email: 'hakuna@matata.com',
    password: 'hakuna matata',
}, (err, createdUser)=>{
    if (err) console.log('Error adding test user', err)
    else console.log('Success!', createdUser)
})

