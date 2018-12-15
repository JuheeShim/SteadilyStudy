var express = require('express');
var app = express(); //express 모듈을 통해 객체를 만들어줘야함
app.listen(3000,function(){
	console.log('connected 3000 port!');
}); //앱애플리케이션이 3000번의 포트랑 연결 됨