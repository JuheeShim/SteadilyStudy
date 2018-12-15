#git의 기초


$git init 
- .git 이라는 하위 디렉터리를 만듬
- .git 디렉터리에는 저장소에 필요한 뼈대 파일이 들어있음


### git이 파일을 관리하게 하기
$git add 
$git commit -m 'initial project version'
- 파일 추가 명령(add), 커밋(commit)으로 git 저장소를 만들고 파일 버전 관리를 시작한다.


### 다른 프로젝트에 참여하거나(contribute),Git저장소를 복사하고 싶을 때
$git clone [url]
$git clone [url] 지정하려는 디렉터리 이름


### git의 워킹디렉터리의 파일 분류
- Tracked : Unmodified(수정하지 않음),Modified(수정함),Staged(커밋으로 저장소에 기록할)상태
- Untracke 

### 파일 상태 확인하기
$git status
$git status -s : 현재 변경 상태 짧게 보여줌
$git status --short :  현재 변경 상태 짧게 보여줌
$git diff : 어떤 내용이 변경되었는지 더 깊게 확인하기(unstage 상태인 부분)
$git diff --staged : Staging Area에 넣은 파일의 변경 내용을 확인하기
$git diff --cached : Staging Area에 넣은 파일의 변경 내용을 확인하기


~~~~
파일명 앞에 붙는 상태
?? : 추적하지 않는 새 파일
A : staged상태로 추가한 파일 중 새로 생성한 파일 
M : staged상태로 추가한 파일 중 수정한 파일
~~~~


### 파일 tracked 상태로 만들기
처음 만든 파일은 추척되지 않는다
$git add 파일명
- 이 명령으로 traked상태이면서 staged 상태로 만들 수 있다. 

### staged 상태인 파일을 수정했을 경우
Tracked - Modified -> staged 상태인 파일 수정했을 경우 다시 add해줘야 한다. 아니면 staged(재수정전),unstaged(재수정후) 두 상태의 파일이 동시에 나온다.


### 파일 무시하기
- git이 관리 할 필요 없고 무시하려면 .gitignore파일을 만들고 무시할 파일 패턴 적는ㄷ
~~~~ 
$파일명 .gitignore
*.[oa] //확장자가 .o나 .a인 파일 무시
*~ // ~로 끝나는 모든 파일 무시


*.a //확장자가 .a인 파일 무시
!lib.a //윗 라인에서 확장자가.a인 파일은 무시하게 했지만 lib.a는 무시하지 않음
/TODO //현 디렉토리의 TODO파일은 무시하고 subdir/TODO처럼 하위 디렉터리에 있는 파일은 무시하지 않음
build/ //build/디렉터리에 있는 모든 파일은 무시
doc.*.txt //doc/notes.txt은 무시하고 doc/serever/arch.txt 파일은 무시하지 않음
doc/**/*.pdf //doc디렉터리 아래의 모든 .pdf파일을 무시
~~~~







