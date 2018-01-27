const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {//서버 만듬
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {//서버가 리스닝 하게 시킴,첫번째 인자 포트,호스트네임은 컴퓨터의 IP라고 생각하면 된다.
  console.log(`Server running at http://${hostname}:${port}/`);
});

//웹서버가 되는 코드
//노드js를 통해서 우리가 만든 웹서버를 만든 것임
//이 웹서버 애플리케이션은 우리 컴퓨터에서 요청이 들어오기를 바라는 거다
//터미널에 나온 주소로 들어가면 코드에 담겨있는 웹서버 애플리케이션이 동작해서 웹브라우저를 통해 hello world라는 텍스트가 출력될 것이다.

//웹브라우저를 통해 요청한 내용을 받아서 hello world라는 텍스트를 전송한거고, 우리가 화면에 출력할 수 있게 된 것이다.


//즉 ! 이 코드는!
//node.js를 통해 웹서버를 만들고 1337번 포트를 리스닝하게 만드는 코드이다.
//127.0.0.1로 접속한 사용자에 대해 Hello world를 응답하게 하라는 내용이다.
