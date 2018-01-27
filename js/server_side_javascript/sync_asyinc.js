var fs = require('fs');//filesystem도 모듈이기 때문에 로드를 해와야함


//Sync
console.log(1);
var data = fs.readFileSync('data.txt',{encoding:'utf8'});
console.log(data);

//aSync
console.log(2);
fs.readFile('data.txt', {encoding:'utf8'},function(err,data){
	console.log(3);
	console.log(data);
}/*콜백함수*/)
console.log(4); //이 경우 실행 순서가 243data.txt 순임, readfile이 다 읽어지면 그다음에 콜백함수가 실행되기 때문임.
