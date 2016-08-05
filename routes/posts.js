/*jshint esversion: 6 */

const router = require('express').Router();
const Post = require('../models/post.js');

router.get('/posts', getAllPosts);
router.get('/posts/:postId', getPostById);
router.post('/posts', createPost);
router.delete('/posts/:postId', deletePost);
router.put('/posts/:postId', updatePost);

function getAllPosts(req, res, next) {
    Post.find({}, function(err, foundPosts) {
        if (err) {
            res.status(500).json({
                msg: err
            });
            return;
        } else {
            res.status(200).json({
                posts: foundPosts
            });
        }
    });
}

function getPostById(req, res, next) {
	Post.findById(req.params.id, function(err, foundPost) {
        if (err) {
            res.status(500).json({
                msg: err
            });
            return;
        } else {
            res.status(200).json({
                posts: foundPost
            });
        }
    });
}

function createPost(req, res, next) {
    const post = new Post({
        title: req.body.title,
        author: req.body.author,
        body: req.body.body,
        created: new Date(),
        updated: new Date()
    });
    post.save(function(err, result) {
        if (err) {
            res.status(500).json({
                msg: err
            });
        } else {
            res.status(201).json({
                post: result
            });
        }
    });
}

function deletePost(req, res, next) {
    Post.remove(req.params.postId, function(err, result){
    	if (err) {
    		res.status(500).json({
    			msg: err
    		});
    	} else {
    		res.status(200).json({
    			msg: result
    		});
    	}
    });
}

function updatePost(req, res, next) {
    Post.findOneAndUpdate({_id: req.params.postId}, req.body, function(err, result){
    	if (err) {
    		res.status(500).json({ 
    				msg: err
    		});
    	} else {
    		res.status(200).json({
    			oldPost: result
    		});
    	}
    });
}

module.exports = router;
