/*jshint esversion: 6 */

const router = require('express').Router();
const Comment = require('../models/comment.js');


router.get('/comments/:postId', getCommentsForaPost);
router.post('/comments', createComment);
router.delete('/comments/:commentId', deleteComment);
router.put('/comments/:commentId', updateComment);

function getCommentsForaPost(req, res, next){
	console.log('getting all of the comments');
	next();
}

function createComment(req, res, next){
	const comment = new Comment({
				author: req.body.author,
				body: req.body.body,
				created: new Date(),
				updated: new Date()/*,
				post: req.body.post*/
		});
	comment.save(function(err, result){
		if (err) {
			res.status(500).json({
				msg: err
			});
		} else {
			res.status(201).json({
				comment: result
			});
		}
	});
}

function deleteComment(req, res, next){
	Comment.remove({'_id': req.params.commentId}, function(err, result){
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

function updateComment(req, res, next){
	 Comment.findOneAndUpdate({_id: req.params.commentId}, req.body, function(err, result){
    	if (err) {
    		res.status(500).json({ 
    				msg: err
    		});
    	} else {
    		res.status(200).json({
    			oldComment: result
    		});
    	}
    });
}

module.exports = router;
