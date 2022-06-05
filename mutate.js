let age=25;
let olage=age;
age=26;//not mutate bcz points to the new address where new value 26 is stored
const obj={
    name:'murad',
    age:26
}
const friend=obj;
friend.age=27;//mutate bcz points to the same memory address in the heap