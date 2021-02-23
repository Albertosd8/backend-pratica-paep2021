const { Client} = require('pg');

const connectionData = new Client({
    	  user: 'alberto',
    	  host: 'localhost',
    	  database: 'postgres',
		  schema: 'backend',
    	  password: '123',
    	  port: 5432
    	});


module.exports = connectionData;