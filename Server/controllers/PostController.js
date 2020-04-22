const Post = require('../models/Post');

const getAllPosts = async (req, res, next) => {
    try {
            const posts = await Post.find({}).sort({ createdAt: 'desc' });
            res.send({
                message: 'Succes! All posts has been quired!', 
                posts,
            });
    } catch (err) {
            const error = new Error('An error occured!');
            error.error = err;
            next(error);
    }
};

const getSinglePost = async (req, res, next) => {
    try {
            const post = await Post.findOne({ _id: req.params.id });
            res.send({ message: 'Success! A post has occured!', post });
    } catch (err) {
            const error = new Error('An error occured!');
            error.error = err;
            next(error);
    }
};

const createPost = async (req, res, next) => {
    const { title, body, author } = req.body;
    const newPost = new Post({ title, body, author });
    try {
        await newPost.save();
        res.send({
            message: 'Success! A new post is created!',
            post: newPost,
        });
    } catch (err) {
        const error = new Error('Post could not be created!');
        error.error = err;
        next(error);
    }
};

module.exports = { 
    getAllPosts, 
    getSinglePost, 
    createPost, 
};