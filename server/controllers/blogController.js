const Blog = require('../models/Blog');

module.exports.addBlog = (req, res) => {
    const {userId,username,title,topic,difficulty,content} = req.body;
    const newBlog = new Blog({userId, username, title, topic, difficulty, content});
    newBlog.save().then(() => {
        res.status(200).json(
            {
                msg: 'Blog added successfully'
            }
        );
    })
    .catch(err => {
        
    })
}

module.exports.getBlog = (req, res) => {
    Blog.find().then((doc) => {
        res.status(200).json(
            {
                blogs:doc,
            }
        )
    })
    .catch(err => {

    })
}

module.exports.getUserBlogs = (req, res) => {
    const userId = req.params.userId;
    
    Blog.find({userId}).then((doc) => {
        res.status(200).json(
            {
                blogs:doc,
            }
        )
    })
    .catch(err=>{
        
    })
}