/*jshint esversion: 6 */

const router = require('express').Router();
const Post = require('../models/post.js');

router.get('/posts', getAllPosts);
router.get('/posts/:postId', getPostById);
router.post('/posts', createPost);
router.delete('/posts/:postId', deletePost);
router.put('/posts/:postId', updatePost);

function getAllPosts(req, res, next){
	console.log('getting all of the posts');
	next();
}
function getPostById(req, res, next){
	
}

function createPost(req, res, next){
	const post = new Post({
		title: req.body.title,
		author: req.body.author,
		body: req.body.body,
		created: new Date(),
		updated: new Date()
	});
	post.save(function(err, result){
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

function deletePost(req, res, next){
	console.log('deleting a post');
	next();
}

function updatePost(req, res, next){
	console.log('updating a post');
	next();
}

module.exports = router;
