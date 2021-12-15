# JavaScript 공부
유튜버 코딩앙마님의 강의를 참고 공부했습니다.

## 01. 변수, 호이스팅, TDZ(Ttemporal Dead Zone)
변수 선언 
var는 한번 선언된 변수를 다시 선언할 수 있다.
var는 선언하기 전에 사용할 수 있다.

``` js
console.log(name); //undefined
var name = "Mike";
```
는 아래와 같이 작동한다.
```js
var name; //선언
console.log(name); //undefined
name = "Mike"; //할당
```
이것을 '호이스팅'이라고 하는데, 선언은 호이스팅되지만 할당은 호이스팅되지 않는다.

※호이스팅 : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동
Temporal Dead Zone

<변수의 생성과정>
1. 선언 단계
2. 초기화 단계
3. 할당 단계

var는 선언과 초기화가 동시에 됨
let은 선언과 초기화가 나뉘어서 됨
const는 선언과 초기화와 할당이 동시에 돼야 함

var : 함수 스코프(function-scoped)
let, const : 블록 스코프(block-scoped)

```js
function add(){
    // Block-level Scope
}

if() {
    // Block-level Scope
}

for(let i=0;i<10;i++){
    // Block-level Scope
}
```

## 02. 생성자 함수

```js
function User(name, age) { // 함수명 첫 글자는 대문자로
  //this = {}
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name);
  };
  // return this;
}

let user1 = new User("Mike", 20); // new 연산자를 사용해서 호출
let user2 = new User("Emily", 10);
let user3 = new User("Jane", 30);

user1.sayName(); // "Mike"
```


## 03. 객체 메소스(Object methods), 계산된 프로퍼티(Computed property)

Computed property

```js
let a = 'age';

const user = {
    name : "Mike",
    [a] : 30 // Computed property : age = 30
}

const user1 = {
    name : "Jane",
    age : 20 // Computed property : age = 30
}

const user2 = {
    name : "Tom",
    age : 10 // Computed property : age = 30
}
```

* Object.assign():객체 복제
```js
const newUser = Object.assign({}, user) // 빈 객체에 user가 병합된다.
const newUser = Object.assign({}, user1, user2) // 빈 객체에 user1, user2가 병합된다.
```
* Object.keys(user1):키 배열 반환 => ["name","age"]
* Object.values(user1):값 배열 반환 => ["Jane",20]
* Object.entries(user1):키/값 배열 반환 => [["name","Mike"],["age",30]]
* Object.fromEntries():키/값 배열을 객체로

## 04. 심볼(Symbol)
코드에서 유일한 프로퍼티를 사용하고 싶을
```js
const a = Symbol('설명'); // 유일한 식별자, new를 붙이지 않습니다!
```

* property key : 심볼형
```js
const id = Symbol('id');
const user = {
    name : "Mike",
    age : 30,
    [id] : 'myid'
}

//다른 개발자가 만들어 놓은 객체
const user = {
  name: "Mike",
  age: 30
};

// 내가 작업
// user.showName = function() {};
const showName = Symbol("show name");
user[showName] = function () {
  console.log(this.name);
};

user[showName]();

// 사용자가 접속하면 보는 메세지
for (let key in user) {
  console.log(`His ${key} is ${user[key]}.`);
}

```

* Symbol.for() : 전역 심볼
    * 하나의 심볼만 보장받을 수 있음
    * 없으면 만들고, 있으면 가져오기 떄문
    * Symbol 함수는 매번 다른 Symbol 값을 생성하지만,
    * Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유


## 05. 숫자, 수학 method(Number, Math)

* toString() : 10진수 -> 2진수/16진수
```js
let num =10;

num.toString(); //"10"
num.toString(2); // "1010"

let num = 255;

num2.toString(16); // "ff"

* Math
    * Math.PI() : 파이
    * Math.ceil() : 올림
    * Math.floor() : 내림
    * Math.round() : 반올림
    * Math.random() : 난수 생성
    * Math.abs() : 절대값
    * Math.pow(n,m) : n의 m승 값
    * Math.sqrt() : 제곱근
* isNaN() : NaN인지 확인
* parseInt() : 읽을 수 있는 숫자 반환

