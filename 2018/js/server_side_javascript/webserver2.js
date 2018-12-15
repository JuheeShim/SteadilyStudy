const http = require('http');

const hostname = '127.0.0.1';
const port = 1338;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//위의 덩어리는 아래 내용과 같다.
var server = http.createServer(function(req, res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello World\n');
});//createServer에 의해 서버가 만들어지고, 제어할 수 있는 객체를 리턴한다
//req 요청 res 응답의 정보를 가지고 있는 객체를 담음
//위의 내용이 축약형이라 생소하고 밑에와 내용이 같음.
server.listen(port, hostname,function(){
	console.log(`Server running at http://${hostname}:${port}/`);
});//우리가 웹서버를 만든다음에 어떤 포트를 실행시킬지 바라보게 한다. 웹서버가 어떤 포트를 바라보게하면 웹서버는 그 포트를 통해 들어올 수 있게 한다. 그게 listen
//listen작업은 시간이 좀 걸릴 수도 있는 작업이다.
//그래서 callback,비동기 적으로 작동한다.
//listening에 성공했을때`Server running at http://${hostname}:${port}/`가 나오게 하는 것이다.