# javascript

### 함수의 호출
	```javascript
	function func(){
	}
	func();
	```
	
	func는 객체 Function이 가지고 있는 메소드들을 상속한다. 


**apply**
	
```javascript
	function sum(arg1, arg2){
    return arg1+arg2;
	}
	alert(sum.apply(null, [1,2]))
	}
```
	apply는 Function의 메서드다.
	2개의 인자를 가진다. 함수.apply(함수가 실행될 맥락,[함수의인자들])

	sum() = sum.apply(null);

	*this는 함수를 호출할 때 정해진다.

```javascript
	o1 = {val1:1, val2:2, val3:3}
	o2 = {v1:10, v2:50, v3:100, v4:25}
	function sum(){
	    var _sum = 0;
	    for(name in this){ //sum.apply에 변수로 들어간 객체가 암시적으로 this가 된다고 생각하면 된다.
	        _sum += this[name];
	    }
	    return _sum;
	}
	alert(sum.apply(o1)) // 6 
	alert(sum.apply(o2)) // 185
```
	
	sum.apply(o1)가 o1.sum의 역할을 한다고 보면 된다.
	sum이 o1의 메서드가 되는 것이다.
	마치 o1 = {val1:1, val2:2, val3:3, sum:sum} 이 된것과 같다.

	일반적인 객체지향 언어에서는 하나의 객체에 소속된 함수는 그 객체의 소유물이 된다. 
	그러나 JavaScript에서 함수는 독립적인 객체로서 존재하고, apply나 call 메서드를 통해 다른 객체의 소유물이 될 수 있다.

