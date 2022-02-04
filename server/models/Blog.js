const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    userId:{
        type: 'string',
    },
    username:{
        type: 'string',
        default: 'Anonymous'
    },
    title:{
        type: 'string',
        required: true,
    },
    topic:{
        type: 'string',
        required:true
    },
    difficulty:{
        type: 'string',
    },
    content:{
        type: 'string',
        required:true
    }
})

module.exports = Blog = mongoose.model('blog',BlogSchema);

