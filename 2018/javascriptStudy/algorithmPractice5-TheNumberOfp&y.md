### 문자열 내 p와 y의 개수

**Q.** numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받습니다.
s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 리턴하도록 함수를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
예를들어 s가 pPoooyY면 True를 리턴하고 Pyy라면 False를 리턴합니다.

```javascript


function numPY(s){
  var result = true;
  //함수를 완성하세요
  //정규식으로 p와 y의 개수를 세면 될 것 같다고 생각함
  //how to check specific alphabet in javascript로 검색해 String match()를 알게됨
  //String match()는 배열로 반환하여 length로 길이를 측정할 수 있음
  
  var checkp;
  checkp = s.match(/p/gi).length;
  
  //console.log(s.match(/p/gi);
  
  var checky;
  checky = s.match(/y/gi).length;
  
  if(checkp==checky){
  return result;
  } else {
  return false;
  }
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )

```
