# javascript

### 변수
var
### 주석
comment// , /* */

### 비교연산자
	- 동등연산자 ==
	- 일치연산자 === 데이터형까지 일치해야 함
	- 부정 != 같지 않다
	- 부정 !== 정확하게 같지 않다
	- 크거나 같음 >= , <=




### 조건문
	if(){

	}

-----

	if(){

	} else{

	}

-----

	if(){

	} else if(){

	} else{

	}

### 논리연산자
	- && 좌우항 모두 참이면 true - true&&true
	- || 좌우항 중 하나만 참이면 true -  true||false
	- ! Boolean값을 역전시키는 부정의 의미 - !false&&!false

### 값이 false로 간주되는 데이터 형
	빈 문자열, undefined, 값이 할당되지 않은 변수,null,NaN

### *prompt() 구문
	사용자가 입력한 값을 가져와서 변수의 값으로 대입함. 이러한 것을 API또는 함수라고 함. prompt는 문자로 입력받기 때문에 문자로 지정해줘야함.




### 반복문

	while(){

	i++;
	}

	for(vari=0; i<10; i++){

	}

### 반복문 제어
	break; 중단
	continue; 실행은 즉시 중단하면서 반복 지속




### 배열
	var member = ['a','b','c']
	alert(member[0]);
	member.length

	**원소추가**
	member.push('d'); 원소 추가
	member.concat(['e','f']); 복수의 원소 추가
	member.unshift('g'); 배열의 시작점에 원소 추가
	member.splice(2,0,'B') 두번째 인덱스 뒤에 원소 추가

	**원소제거**
	member.shift(); 배열 첫번째 원소 제거
	member.pop(); 배열 마지막 원소 제거

	**정렬**
	member.sort(); 정렬
	member.reverse(); 역순정렬


### 객체 (key,value)
	객체에는 객체와 함수도 담을 수 있다.
	키값으로 문자열, 메소드, 숫자가 올 수 있음.

	**객체 만드는 법**
 	1. var grades = {'a': 10, 'b': 6, 'c': 80};
 	2. var grades = new Object();
 	grades['a'] = 10;

 	**객체 값 가져오기**
 	grades['a']
 	grades.a

 	**for in 문**
 	객체, 배열 안의 값을 모두 가져올때 씀
 	for(key in grades) {
 		console.log(key+grade[key]);
 	}

 	**this**
 	소속되어 있는 객체를 가르킴

 	**객체지향프로그래밍**
 	서로 연관되어 있는값과 서로 연관되어 있는 처리를 하나의 그릇에 모아 그루핑 하는 방식




