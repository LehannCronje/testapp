var express = require('express');
var router = express.Router();



router.get('/', function(req, res) {
	res.render('home');
	// if (request.session.loggedin) {
	// 	response.send('Welcome back, ' + request.session.username + '!');
	// } else {
	// 	response.send('Please login to view this page!');
	// }
	// response.end();
});

module.exports = router;