# javascript

### 클로저

클로저(closure)는 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 가르킨다.	

#### 내부함수
	- JavaScript는 함수안에서 또다른 함수를 선언할 수 있다.
	- 보통 함수 안에서만 사용하는 함수의 경우 함수 안에다 선언한다.

```javascript
	function outter(){
	    function inner(){
	        var title = 'coding everybody'; 
	        alert(title);
	    }
	    inner();
	}
	outter();
```
	- 내부함수는 외부함수의 지역변수에 접근할 수 있다. 이러한 것을 클로저라고 한다.

```javascript
function outter(){
    var title = 'coding everybody';  
    function inner(){        
        alert(title);
    }
    inner();
}
outter();
```

#### 클로저
	클로저란 내부함수가 외부함수의 지역변수에 접근 할 수 있고, 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 의미한다.

```javascript
function outter(){
    var title = 'coding everybody';  
    return function(){        
        alert(title);
    } //내부함수를 return함. return 했다는 것은 함수가 종료되었다는 것을 의미함.
}
var inner = outter(); //outer함수의 실행이 끝남(return)
inner(); //coding everybody가 출력된 것은 외부함수의 지역변수title이 소멸되지 않았기 때문
```

- 클로저는 객체의 메소드에서도 사용할 수 있다.
ex)함수의 리턴값으로 함수의 인자값으로 전달된 지역변수를 사용하는 메소드를 가진 객체를 반환.
- 동일한 외부함수 안에서 만들어진 내부함수나 메소드는 외부함수의 지역변수를 공유
- 똑같은 외부함수를 공유하고 있어도 외부함수가 실행될때마다 새로운 지역변수를 포함하는 클로저가 생성됨
- 함수의 인자(지역변수)는 정의된 객체의 메소드에서만 접근가능하다. JavaScript는 기본적으로 Private한 속성을 지원하지 않는데, 클로저의 이러한 특성을 이용해서 Private한 속성을 사용할 수 있게된다. (private변수)

* Private 속성은 객체의 외부에서는 접근 할 수 없는 외부에 감춰진 속성이나 메소드를 의미한다.


- 주의) 클로저는 내부함수가 외부함수의 지역변수에 접근할 수 있는 것이지, 함수 외부의 컨텍스트에 접근할 수 있는 것이 아니다. 
