const couchdb = require('node-couchdb');
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