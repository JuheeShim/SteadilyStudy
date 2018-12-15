# javascript

### 이벤트
	어떠한 사건, 브라우저에서 마우스를 클릭했을 때 / 스크롤을 내렸을 때 등

```javascript
<!DOCTYPE html>
<html>
<body>
    <input type="button" onclick="alert(window.location)" value="alert(window.href)" />
    <input type="button" onclick="window.open('bom.html')" value="window.open('bom.html')" />
</body>
</html>
```


**event target**
이벤트의 대상이 되는 태그 ex.버튼


**event type**
클릭했을때 라고 하는 것이 이벤트 타입 ex.click/scroll/mosemove

[Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)

**event handler**
어떠한 이벤트가 발생했을 때 실행될 코드


### 이벤트 등록 방법
	이벤트 대상에 이벤트 핸들러를 등록해줘야한다. 웹브라우저에서 3가지 종류의 등록방법 제공한다.


#### inline방식
인라인 방식은 이벤트를 이벤트 대상의 태그 속성으로 지정하는 것이다.

```javascript
<input type="button" onclick="alert('Hello world');" value="button" />
//onclick처럼 태그 안에 이벤트가 속성으로 직접 들어가 있는 것을 inline방식이라고 한다.


<!--자기 자신을 참조하는 불편한 방법-->
<input type="button" id="target" onclick="alert('Hello world, '+document.getElementById('target').value);" value="button" />
//target이라는 id를 찾아서 참조

<!--this를 통해서 간편하게 참조할 수 있다-->
<input type="button" onclick="alert('Hello world, '+this.value);" value="button" />
//this로 자기자신(input element) 참조
```

인라인 방식은 이벤트의 소재를 파악하는 것이 편리하지만 정보인 HTML과 제어인 JavaScript가 혼재된 형태이기 때문에 바람직한 방법이라고 할수는 없다. 

#### 프로퍼티 리스너 방식
이벤트 대상에 해당하는 객체의 프로퍼티로 이벤트를 등록하는 방식. (HTML과 javascript 분리)

```javascript
<input type="button" id="target" value="button" />
<script>
    var t = document.getElementById('target');
    t.onclick = function(){ //약속되어있는 특수한 프로퍼티에 함수 지정
        alert('Hello world');
    }
</script>
//id가 target인 element에 클릭이 일어났을때 브라우저가 onclick이라는 프로퍼티에 정의되어 있는 메서드를 실행시켜주게 됨
//함수 - 이벤트 핸들러
```
**이벤트 객체**
이벤트 함수 = 이벤트 핸들러
이벤트가 실행된 맥락의 정보가 필요할 때는 이벤트 객체를 사용한다. 이벤트 객체는 이벤트가 실행될 때 이벤트 핸들러의 인자로 전달된다. 
	첫번째 인자로 event객체라는 것을 전달해주기로 약속되어 있다. 함수 내에서 event라는 내부 변수를 통해 event객체를 사용할 수 있다. 
	event.target은 event가 어디에서 발생한 것인지 알려주는 프로퍼티이다. 그 프로퍼티의 value는 이 함수가 호출된 이벤트 타겟이 가지고 있는 value값을 가르킨다.


#### addEventListener()
이벤트를 등록하는 가장 권장되는 방식. 이 방식을 이용하면 여러개의 이벤트 핸들러를 등록할 수 있다.

장점 : 하나의 이벤트 대상에 복수의 동일 이벤트 타입 리스너를 등록할 수 있다. 또한 복수의 엘리먼트에 하나의 리스너를 등록하여 재사용 할 수 있다.

```javascript
<input type="button" id="target" value="button" />
<script>
    var t = document.getElementById('target');
    t.addEventListener('click', function(event){
        alert('Hello world, '+event.target.value);
    });
    /*t.addEventListener('click', function(event){
        alert('Hi, '+event.target.value);
    });*/ 


//프로퍼티 리스너 방식과 동일하게 event를 변수로 받는다. 그래서 event객체가 가지고 있는 여러 프로퍼티에 접근할 수 있다. event.targer은 t이다. t에 담긴 객체의 value를 하게되면 button이 되는 것이다.
</script>
```
이 방식은 ie8이하에서는 호환되지 않는다. ie에서는 attachEvent 메소드를 사용해야 한다. 

```javascript
var t = document.getElementById('target');
if(t.addEventListener){
    t.addEventListener('click', function(event){
        alert('Hello world, '+event.target.value);
    }); 
} else if(t.attachEvent){
    t.attachEvent('onclick', function(event){
        alert('Hello world, '+event.target.value);
    })
}

//최근엔 라이브러리들이 알아서 해준다.
```



