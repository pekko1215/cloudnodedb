const express = require('express');
const couchdb = require('couchdb');

const app = express.createServer();

const client = couchdb.createClient(5984,'couchdb.cloudno.de','pekko12152','j9Hct6fra0');

const db = client.db('musetest');

app.get('/',(req,res)=>{
	var docName = req.param('docName');
	var author = req.param('author');

	if(docName && author){
		db.saveDoc({docName,author},(err,ok)=>{
			if(err){
				res.json({
					error:true,
					message:JSON.stringify(err)
				})
				return
			}
			res.json({error:false})
		});
	}
	db.allDocs({
		include_docs:true
	},(err,resp)=>{
		var docList = resp.rows;
		res.json(rows);
	})
})

app.listen(SERVER_PORT);
console.log("Server on port %s", app.address().port);