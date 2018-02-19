# javascript

### 함수지향 - 유효범위
	유효범위(scope)는 변수의 수명을 의미한다.
	전역변수 : 함수 밖에서 변수를 선언 / 애플리케이션 전역에서 유효
	지역변수 : 함수 안에서 변수를 선언 / 함수 안에서 유효
	같은 이름의 지역변수와 전역변수가 정의되면, 지역변수가 우선됨


```javascript

	var vscope = 'global'; //전역변수
	function fscope(){
	    var vscope = 'local'; //지역변수
	    alert('함수안 '+vscope); //local출력
	} 
	fscope();
	alert('함수밖 '+vscope); //global출력

```

```javascript

	var vscope = 'global'; //전역변수
	function fscope(){
	    vscope = 'local'; //전역변수
	    alert('함수안'+vscope); //local출력
	}
	fscope();
	alert('함수밖'+vscope); //local출력

```

	* 전역변수는 사용하지 않는 것이 좋음. 위와 같이 여러 이유로 값이 변경될 수 있기 때문.



**유효범위의 효용/필요성/지역변수를 사용해야하는 이유**
	
	의도하지 않은 문제를 발생시킬 수 있다.
	-아래 예제에서 함수안에 var사용하면 01234가 출력됨
	```javascript
	function a (){
	    i = 0; //var없어서 전역변수를 사용함
	}
	for(i = 0; i < 5; i++){//전역변수i
	    a();//계속 전역변수i를 0으로 만듬
	    document.write(i); //무한반복함
	}
	```




**전역변수의 사용**
	
	불가피하게 전역변수를 사용해야하는 경우는 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리하는 방법을 사용한다.
	전역변수를 사용하고 싶지 않다면 익명함수를 호출함으로서 목적을 달성할 수 있다.



**유효범위의 대상(함수)**
	
	자바스크립트는 함수에 대한 유효범위만을 제공한다.
	*다른 언어의 경우 대체로{}에 대한 유효범위를 제공한다.



**정적 유효범위(static scoping/lexical scoping)**
	
	자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖는다. 이러한 유효범위의 방식을 정적 유효범위(static scoping), 혹은 렉시컬(lexical scoping)이라고 한다. 

	* 호출된 시점에서의 지역변수가 사용되는 것이 아님. 사용될 때가 아닌 정의될 때의 변수가 사용됨.


```javascript
	var i = 5;
 
	function a(){
	    var i = 10;
	    b();
	}
	 
	function b(){
	    document.write(i); //전역변수i가 사용된다.
	}
	 
	a();
```
