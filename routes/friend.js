// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	res.render('friend', data.friends[req.params.id]);
};