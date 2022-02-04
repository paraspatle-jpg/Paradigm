const Blog = require('../models/Blog');

module.exports.addBlog = (req, res) => {
    const {userId,username,title,topic,difficulty,content} = req.body;
    const newBlog = new Blog(userId, username, title, topic,difficulty,content);
    newBlog.save().then(() => {
        res.status(200).json(
            {msg: 'Blog added successfully'}
        );
    })
}

module.exports.getBlog = (req, res) => {
    Blog.find().toArray((err,doc) => {
        res.status(200).json(
            {
                blogs:doc,
            }
        )
    })
}

module.exports.getUserBlogs = (req, res) => {
    const userId = req.params.userId;
    
    User.find({userId}),toArray((err,doc) => {
        
    })
}