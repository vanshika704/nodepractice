let http = require ('http');
http.createServer(function (req , res){
    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    res.end ("Compare your Entries");
}).listen(8080 , () => console.log('server is running  at  http://localhost:8080'))