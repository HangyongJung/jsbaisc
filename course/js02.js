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