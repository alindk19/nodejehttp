const http = require('http')

http.createServer((req,res)=>{

	res.setHeader('Content-Type','application/json')
	if(req.url==='/user')
	{
		res.end("{'name':'alind'")
	}
	else if(req.url==='/userId')
	{
		res.end("{'UserId':'1711981029'}")
	}
}).listen(8000);

console.log('listening on localhost')
