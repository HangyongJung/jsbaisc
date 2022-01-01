let arr =[1,2,3,4,5,6];

const result = arr.find((item)=>{
    return item %2 ===0;
});

console.log(result);



let userList= [
    { name: "mike", age: 30 },
    { name: "tom", age: 26 },
    { name: "jane", age: 14 }
]

const result2 = userList.find((item) => {
    if (item.age > 20) {
        return true;
    }
    return false;
});

console.log(result2);


const result3  = arr.filter((item) => {
    return item % 2 === 0;
});

console.log(result3);


let newUserList = userList.map((user,index)=>{
    return Object.assign({},user,{
        id : index+1,
        isAdult:user.age >20,
    });
});

console.log(newUserList);
console.log(userList);
