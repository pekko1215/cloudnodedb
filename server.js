const couchdb = require('node-couchdb');

const client = new couchdb({});

//_baseUrlをcloudNodeのInternal URLに書き換え
client._baseUrl = `http://zelard1215:fIG1iCIlsI@couchdb.cloudno.de:5984`
//cloudNodeの作成名
var dbname = "dbtest";

client.listDatabases()
	.then((dbs)=>{
		console.log('DB一覧')
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
		console.log("レスポンス");
		console.log(data);
		return client.get('_all_docs')
	})
	.then(({data,headers,status})=>{
		console.log("一覧取得")
		console.log(data)
	})
	.catch((err)=>{
		console.log("エラー")
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