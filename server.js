const couchdb = require('node-couchdb');

const client = new couchdb({});

//_baseUrlをcloudNodeのInternal URLに書き換え
client._baseUrl = `http://zelard1215:fIG1iCIlsI@couchdb.cloudno.de:5984`
//cloudNodeの作成名
var dbname = "dbtest";

client.listDatabases()
	.then((dbs)=>{
		console.log('DBList')
		console.log(dbs);
		return client.insert(dbname,{
			field:{
				name:"ウルトラナース ガトリン・G・U",
				hp:4485,
				atk:2833
			}
		})
	})
	.then(({data,headers,status})=>{
		console.log("Insert Document");
		console.log(data);
		return client.get(dbname,'_all_docs')
	})
	.then(({data,headers,status})=>{
		console.log("Document List")
		console.log(data)
	})
	.catch((err)=>{
		console.log("Error")
		console.error(err)
	})