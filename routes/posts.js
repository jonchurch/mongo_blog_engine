/*jshint esversion: 6 */

const router = require('express').Router();

router.get('/posts', getAllPosts);
router.get('/posts/:postId', getPost);
router.post('/posts', createPost);
router.delete('/posts/:postId', deletePost);
router.put('/posts/:postId', updatePost);

function getAllPosts(req, res, next){
	console.log('getting all of the posts');
	next();
}
function getPost(req, res, next){
	console.log('getting a specfic post');
	next();
}

function createPost(req, res, next){
	console.log('creating a post');
	next();
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
