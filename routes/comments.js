/*jshint esversion: 6 */

const router = require('express').Router();

router.get('/comments/:postId', getCommentsForaPost);
router.post('/comments', createComment);
router.delete('/comments/:commentId', deleteComment);
router.put('/comments/:commentId', updateComment);

function getCommentsForaPost(req, res, next){
	console.log('getting all of the comments');
	next();
}

function createComment(req, res, next){
	console.log('creating a comment');
	next();
}

function deleteComment(req, res, next){
	console.log('deleting a comment');
	next();
}

function updateComment(req, res, next){
	console.log('updating a comment');
	next();
}

module.exports = router;
