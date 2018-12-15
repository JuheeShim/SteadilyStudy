# 4 데이터 집합 : 배열 다루기
- 배열은 연관된 값들의 집합이다.

# 4.1 배열 기초
- 배열은 원소들로 이루어지고, 각 원소에는 키와 값이 지정된다

### 4.1.1 배열 생성
~~~~
//배열 생성
$vegetable = array('corn'=>'노랑','beet'=>'빨강','carrot'=> 주황);

//단축 배열 문법
$vegetable = ['corn'=>'노랑','beet'=>'빨강','carrot'=> 주황];

//하나씩 원소 추가
$vegetable['corn']=>'노랑';
$vegetable['beet']=>'빨강';
$vegetable['carrot']=>'주황';
~~~~

### 4.1.2 적절한 배열명
- 배열 변수의 이름도 변수명 규칙을 따라야 한다. 배열 변수에 스칼라 값을 할당하면 원래값은 지워지고 새로운 값으로 바뀐다.

### 4.1.3 숫자 키 배열
- 배열 생성시 키 없이 값만 나열하면 자동으로 숫자키를 할당한다.
- 배열을 생성하거나 빈 대괄호로 배열 원소를 추가할때, PHP는 배열의 숫자키를 순차적으로 증가시킨다.
~~~~
$lunch[] = '김밥'; //$lunch[0]을 지정
$lunch[] = '치킨'; //$lunch[1]을 지정
~~~~

### 4.1.4 배열 크기 구하기
- **Count(배열이름)** :  배열의 원소가 몇개인지 알 수 있는 함수

# 4.2 배열 원소 순회
- **foreach(배열명 as 키 변수명=>원소 변수 명)** : 배열의 각 원소를 순회, 이것을 이용해 HTML테이블 출력할 수 있음. 키와 원소의 변수명은 맘대로 지정할 수 있음
- 배열 원소의 값을 바꿀때는 키 변수를 배열의 색인으로 활용해야한다.

~~~~
//foreach()반복문
$meal = array('breakfast'=>'스프','lunch'=>'밥','dinner'=>'피자');
print"<table>\n";
foreach($meal as $key => $value){
	print "<tr><td>$key</td><td>$value</td></tr>\n";
}
print '</table>';



//배열 원소 값 수정하기
$mealprice=array('breakfast'=>0.5,'lunch'=>2.5,'dinner'=>3);

foreach($mealprice as $key => $value){
	$mealprice[$key]=$mealprice[$key]*2;
}

foreach($mealprice as $key => $value){
	print "메뉴 $key 의 바뀐가격은 $value 입니다.\n";
}



//숫자 키 배열을 사용할때는 축약할 수 있다
//as 뒤 변수가 하나일때는 배열 원소의 값이 복사된다.
$meal = array('스프',밥','피자');

foreach($meal as $dish){
	print "오늘 메뉴는 $dish 입니다";
}
~~~~

- foreach()로는 각 배열 원소의 값을 얻을 수 있고, for()의 경우에는 진행중인 루프 변수 원소의 위치를 알 수 있다. 둘을 동시에 얻는 루프 구조는 없다.

- foreach()로 배열을 순회할때 각 원소에 접근하는 순서는 배열에 원소가 추가된 순서를 따른다. 추가한 순서에 관계없이 숫자 키 순서대로 배열 원소에 접근하려면 for()루프를 사용해야한다.

~~~~
$meal = array('breakfast'=>'스프','lunch'=>'밥','dinner'=>'피자');
for($i=0; $num_menu = count($meal); $i<$num_menu; $i++){
	print "메뉴번호 $i : $meal[$i]\n";
}
~~~~

- **array_key_exists(키,배열명)** : 특정 키가 있는지 알 수 있다, 참 반환
- **in_array(원소값,배열명)**  : 특정 값이 있는지 알 수 있다, 참 반환
- **array_search(원소값,배열명)** : 특정 값이 있는지 알 수 있다, 그러나 참이 아닌 키를 반환한다
~~~~
if(array_key_exists('스프',$meal)){
	print "메뉴에 스프가 있습니다";
}
~~~~

# 4.3 배열 수정
- 배열 개별 원소는 일반적인 스칼라 변수와 똑같은 방식으로 계산에 사용할 수 있다.
- 큰따옴표 문자열이나 here문서 내부에 배열 원소를 삽입할 수 있다.
- 큰따옴표 안에 삽입할 때 {}를 사용할 수 있다
- **unset(배열명[키값])** : 배열에서 원소 제거
- **implode('구분자',배열명)** : 배열의 모든 원소 한번에 출력가능, 배열의 모든 갓 사이에 구분 문자열을 넣어 하나의 문자열로 조합
- **explode('구분자',문자열변수명)** : 문자열을 구분자 기준으로 조각내 배열로 만든다.

# 4.4 배열 정렬
- **sort(배열명)** : 원소의 값을 기준으로 정렬, 정렬 후 배열의 키값이 변경되기 때문에 숫자 키 배열에만 사용가능
- **asort(배열명)** : 원소의 값을 기준으로 연관 배열 정렬, 키와 값의 쌍 유지
- **ksort(배열명)** : 키값을 기준으로 정렬, 키와 값의 쌍을 유지하면서 키의 순서를 변경
- **rsort(배열명),arsort(배열명),krsort(배열명)** : 위와 속성은 같으나 내림차순 정렬

# 4.5 다차원 배열

- **foreach()**로 배열 순회가능
- 다차원 숫자 키 배열은 **for()**로 순회할 수 있다
~~~~
//다차원 배열 생성법
//키값-숫자키
$meal = array('breakfast'=>['스프','모닝빵'],'lunch'=>['밥','김치'],'dinner'=>['피자','콜라');
//숫자키-숫자키
$season = [['flower','butterfly'],['swim','icecream'],['leaves','rice']];
//키값-키값
$nation = array('japan'=>array('food'=>'스시','nature'=>'후지산'),'china'=>array('food'=>'짜장면','nature'=>'장가계'))


//foreach()로 배열 순회하기
foreach($nation as $key => $value){
	foreach($value as $secondkey => $secondvalue)
	print "$key 의 $secondkey 는 $secondvalue 입니다";
}

~~~~












