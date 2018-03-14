# javascript

### 생성자와 new
	자바스크립트는 어떠한 객체지향 언어와도 같지 않다. 본인만의 독특한 성격을 가짐.
	prototype-based programming이라고 불림

**객체지향의 기본적인 형태**
- 서로 연관되어있는 변수와 메서드를 객체라고 하는 그릇에다 담고, 서로 연관되어 있지 않는 것은 별도의 객체에다가 분리를 시켜넣는 것이다.
- 그룹핑

**객체**
```javascript
var object = {
	'name' : 'juhee', 
	'introduce': fuction(){ //메서드 정의
	retrun 'My name is'+this.name;
}
```

- 프로퍼티(property):객체 내의 변수, 메소드(method) : 객체 내의 함수
- 만약 위 코드에서 juhee가 아닌 다른 사람의 이름을 담을 객체를 만들려고 하면, 코드를 또 반복해야한다. 이때 객체의 구조를 재활용할 수 있게 해주는 것이 생성자 new이다.


**생성자**

- 생성자는 객체를 만드는 역할을 하는 함수이다. (붕어빵틀)
- 일반 함수와 구분하기 위해 첫글자를 대문자로 표기한다.
- 자바스크립트에서 객체를 만드는 주체는 함수이다. (일반적으로는 클래스)
- 함수를 호출할 때 new를 붙이면 비어있는 객체를 만들고 그 객체를 리턴한다.
	var p = new person();
	p를 출력하면 person{}가 리턴된다. 


```javascript
function Person(name){ //초기화
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name; 
    }   
}
var p1 = new Person('juhee');
document.write(p1.introduce()+"<br />");
 
var p2 = new Person('duhee');
document.write(p2.introduce());
```
위와 같이 생성자 내에서 객체의 프로퍼티를 정의(초기화/init,initialize)하면 재사용성이 높아진다.
