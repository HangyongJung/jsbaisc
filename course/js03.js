
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

//Object.assign():객체 복제
const newUser = Object.assign({}, user) // 빈 객체에 user가 병합된다.
const newUser = Object.assign({}, user1, user2) // 빈 객체에 user1, user2가 병합된다.