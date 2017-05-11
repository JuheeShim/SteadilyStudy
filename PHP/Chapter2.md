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
#### 문자열 유효성 검사

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
- **strcasecmp()**: 대소문자 상관 없이 문자열 비교

~~~~
//대소문자 구별 없이 문자열 확인, strcasecmp는 맞을 경우 0을 반환
if(strcasecmp($_POST['email'],'cloudshadow@gmail.com'==0)){
	print ""다시 뵙게되어 반갑습니다, 정병열님.";
}
~~~~

#### 텍스트 형식화

- **printf()** : print에 비해 출력 결과의 외형에 대한 더 큰 통제력을 제공한다.
- 패딩문자, 기호(+-), 최소 너비, 마침표와 정밀도(소숫점)
- 10진수는 d, 문자열은 s, 부동소수점수는 f
~~~~
%.2f //2번째 소수점까지 출력
%02d //패딩문자, 두자리 10진수
%+d //기호 표시
~~~~
~~~~
$zip='6520'
$month=2;
$day=6;
$year=2007;
printf("우편번호는 %05d이고 날짜는 %02d/%02d/%d",$zip,$month,$day,$year);
//출력 결과 : 우편번호는 06520이고 날짜는 02/06/2007
//패딩문자 0 삽입
~~~~

- **strtolower() : 문자열 전체 소문자로 바꾸기
- **strtoupper() : 문자열 전체 대문자로 바꾸기
- **ucwords() : 문자열의 첫글자만 대문자로 바꾸기

~~~~
//전부 대문자로 입력된 이름을 보기 좋게 바꾸기
print ucwords(strtolower(('JOHN FRANKENHEIMER')));
~~~~


- **substr(문자열,문자열 추출 시작 위치,추출 할 바이트 수) : 문자열 일부 추출하기
- **str_replace(문자열,바꿀문자열,전체문자열) : 부분문자열을 찾아 새로운 문자열로 교체

#2.2 숫자

### 2.2.1 다양한 수 다루기
- PHP엔진은 **부동소수점** 수와 **정수**로 구분한다.

### 2.2.2 산술 연산자

~~~~
print 2+2;
print 17-5;
print 10/3;
print 6*9;
print -2**2; //거듭제곱, 결과 4
print 17%3; //나눗셈 결과의 나머지, 결과 2
~~~~

# 2.3 변수

- 변수표기는 $뒤에 변수명으로 표현
- 변수명에는 대문자, 소문자, 숫자, 밑줄문자(_), UTF-8인 경우 기본 라틴문자 아닌 문자 허용
~~~~
$family = 4

$page_header = <<<HTML_HEADER
<html>
<head><title>메뉴</title></head>
</html>
HTML_HEADER; //here문서를 할당
~~~~

### 2.3.1 변수의 연산
~~~~
//위 아래가 같은 연산

$money=$money+1;
++$money;

$price=$price+3;
$price+=3;

$username=%username.$domain;
$username.=$domain;
~~~~

### 2.3.2 문자열 내부에 변수 넣기
- 큰따옴표로 둘러싼 문자열과 here문서로 문자열 내부에 변수를 삽입할 수 있다.
- 분량이 많은 HTML안에 여러 변수를 넣을 때는 here문서가 유용하다.
- 중괄호로 변수를 감싸면 덜 헷갈린다.
~~~~
$email = 'my@example.com'
print "답신 보낼 곳 : $email" 
//결과: 답신 보낼 곳 : my@example.com

print "야채를 곁들인 {$menu}입니다."
~~~~












