const express = require('express');
const couchdb = require('node-couchdb');

// const app = express.createServer();

const client = new couchdb({
	host:'couchdb.cloudno.de',
	protocol:'https',
	port:5984,
	auth:{
		user:'zelard1215',
		pass:'fIG1iCIlsI'
	}
})

client.listDatabases().then((dbs)=>{
	console.log(dbs)
}).catch((err)=>{
	console.error(err)
})
// const db = client.db('musetest');

// app.get('/',(req,res)=>{
//	var docName = req.param('docName');
//	var author = req.param('author');

//	if(docName && author){
//		db.saveDoc({docName,author},(err,ok)=>{
//			if(err){
//				res.json({
//					error:true,
//					message:JSON.stringify(err)
//				})
//				return
//			}
//			res.json({error:false})
//		});
//	}
//	db.allDocs({
//		include_docs:true
//	},(err,resp)=>{
//		var docList = resp.rows;
//		res.json(rows);
//	})
// })

// app.listen(SERVER_PORT);
// console.log("Server on port %s", app.address().port);