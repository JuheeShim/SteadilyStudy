# 2.1 텍스트

### 2.1.1 텍스트 문자열 정의
- 작은 따옴표나 큰 따옴표로 문자열 정의가 가능하다.
- 역슬래시는 이스케이핑, 이스케이프 문자로 불리며 글자 그대로 작은 따옴표로 인식한다.
- 작은 따옴표와 큰따옴표의 가장 큰 차이는 변수명이 해당 변수의 값으로 대치된다는 점이다.

~~~~
print '치킨';
print '피자';
print 'We|'ll each have a bowl of soup';
print 'Hi $user'; // Hi $user로 출력
print "Hi $user"; // Hi Bill로 출력
~~~~

- here 문서는 <<<와 구분단어를 쓰면서 시작하고, 같은 단어를 써서 종료한다.
- 두 문자열을 연결할때는 문자열 연결 연산자 마침표(.)를 사용한다.

~~~~
print<<<HTMLBLOCK
<html>
<head>Test입니다.</head>
<body>
	<li>Test1
	<li>Test2
	<li>Test3
</body>
<html>
HTMLBLOCK

Print'치킨''피자'; //치킨피자 로 출력
~~~~

### 2.1.2 텍스트 다루기
문자열 유효성 검사

- **trim()** : 화이트 스페이스 제거
- **strlen()** : 문자열 길이 측정
~~~~
//공백이 제거 된 우편번호의 길이를 통해 정상적인 입력 확인
if(strlen(trim($_POST['Zipcode']))!=5){
	print "우편번호를 5자리로 입력해주세요.";
	}
} 
~~~~


- 문자열을 비교할때는 == 연산자를 사용하며, 대소문자 구분이 필요하다.
- strcasecmp()



















