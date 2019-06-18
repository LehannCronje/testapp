var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//database connection
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password :'',
    database: 'nodelogin'
  });
connection.connect(function(err){
    if(err){
        return console.error('error: ' + err.message);
    }
    console.log('connected to the database');
});


//receive post request to handle it
router.post('/', function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    console.log(req.body);
    if(username && password){
      connection.query('SELECT * FROM users WHERE username = ? AND pass = ?', [username, password], (err,rows) => {
        console.log(rows);
        if(err) throw err;
        if(rows.length > 0){
          req.session.loggedin = true;
          req.session.username = username;
          connection.end();
          console.log('connection ended');
          res.redirect('/home')
        }else {
            connection.end();
            console.log('connection ended');
          res.send('Incorrect Username and/or Password!');
        }
        res.end();
      });
    }else{
        connection.end();
    console.log('connection ended');
      res.send('Please enter Username and Password!');
      res.end();
    }
  });

module.exports = router;