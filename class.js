const Student=class{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender
    }
    fullName(){
        if(this.gender=='male'){this.fullName='Md. '+this.name;
        console.log(this)
        }
            else{
                this.fullName='Mrs. '+this.name;
                console.log(this)
            }
            
    }
    static schoolName(){
        return`JSX`
    }
}
const halim=new Student('Halim',34,'male')
const rohima=new Student('Rohima',36,'female')
halim.fullName()
rohima.fullName()
console.log(halim.fullName,rohima.fullName)

console.log(Student.schoolName())

class Studen1 extends Student{
    constructor(name,age,gender,height){
        super(name,age,gender);
        this.height=height;
    }
}
const rafi=new Studen1('Rafi',22,'male',4)
console.log(rafi)
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        return`${this.name} is ${this.age} years old.`
    }
}
class Dog extends Animal{
    constructor(name,age,weight){
        super(name,age);
        this.weight=weight;
    }
}
const laura=new Dog('Laura',5,2.4)
console.log(laura)