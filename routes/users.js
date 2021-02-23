const express = require('express');
const router = express.Router();
const client = require('../DB/pg'); //connecting to data

/* GET /users*/

router.get('/', (req,res) =>{
        client.connect();
	    client.query('SELECT * FROM users')
	    .then(response => {
	        console.log(rows);
	        client.end();})
	    .catch(err => {
	        client.end()
	    });

})

/* POST /users*/

/* PUT /users/:id*/

/* delete /users/:id*/

module.exports = router;

