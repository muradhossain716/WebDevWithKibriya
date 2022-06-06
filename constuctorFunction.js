
const Person=function(name,birthYear){
    this.name=name;
    this.birthYear=birthYear;
};
// Person.prototype.calcAge=()=>2022-this.birthYear;
//arrow function is not valid
Person.prototype.calcAge=function(){
    return 2022-this.birthYear
}
Person.prototype.noOfbook=function(){
    //no of book = age*2
    return this.calcAge()*2
}

const jonas=new Person('Jonas',1991)
function nameDisplay(name){
    console.log(name)
}
nameDisplay(jonas.name)

console.log(jonas.noOfbook())
console.log(jonas.calcAge())

jonas.city='london';
console.log(jonas)


///new consturtor function
const Animal=function(name,color,height){
    this.name=name;
    this.color=color;
    this.height=height;
}
Animal.prototype.selection=function(){
    if (this.color!='red' && this.height>3) {
        console.log(this.name)
        obj.selectedlist.push(this.name)
    }
}

const obj={
    selectedlist:[]
}
const lili=new Animal('Lili','Black',4)
lili.selection()
console.log(obj.selectedlist)

//static method not in the protyotype only in the consturctor function