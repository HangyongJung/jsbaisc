# JavaScript 공부
유튜버 코딩앙마님의 강의를 참고 공부했습니다.

## 01. 변수, 호이스팅, TDZ(Ttemporal Dead Zone)
변수 선언 
var는 한번 선언된 변수를 다시 선언할 수 있다.
var는 선언하기 전에 사용할 수 있다.

console.log(name); //undefined
var name = "Mike";
는 아래와 같이 작동한다.

var name; //선언
console.log(name); //undefined
name = "Mike"; //할당
이것을 '호이스팅'이라고 하는데, 선언은 호이스팅되지만 할당은 호이스팅되지 않는다.

*호이스팅 : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동


- 호이스팅은 
