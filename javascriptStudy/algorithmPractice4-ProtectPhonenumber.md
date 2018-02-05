### 핸드폰번호 가리기

**Q.** 별이는 헬로월드텔레콤에서 고지서를 보내는 일을 하고 있습니다. 개인정보 보호를 위해 고객들의 전화번호는 맨 뒷자리 4자리를 제외한 나머지를 "*"으로 바꿔야 합니다.
전화번호를 문자열 s로 입력받는 hide_numbers함수를 완성해 별이를 도와주세요
예를들어 s가 "01033334444"면 "*******4444"를 리턴하고, "027778888"인 경우는 "*****8888"을 리턴하면 됩니다.

```javascript

function hide_numbers(s){
  var result = ""
  //함수를 완성해주세요
  //맨 뒤 숫자 네개만 남기고 그 앞 숫자는 모두 *로 바꾸기
  //정규식을 쓰면 편할것 같은데 아직 익숙치 않아서 다른 방식을 고민
  //how to check last character of string in javascript로 검색->"".slice
  //length에서 마지막 숫자인 4를 뺀 수 만큼 *을 만들고, slice로 자른 숫자 4개를 붙이면 될 것 같음.

  var star = "*";	
  for (var i =1; i<s.length-4; i++){
  star += "*";
  }
  result = star+s.slice(-4);
  
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));

```
