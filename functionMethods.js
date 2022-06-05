//call method
//imidiately call the function//add this keyward//can take a list of arguments
let hanif={
    name:"Hanif",
    book:[],
    bookings(seat,name){
        this.book.push({seatNum:`${this.name}${seat}`,passengerName:name})
        console.log(this.book)
    }
}
let book=hanif.bookings;
book.call(hanif,23,'sakib');
let shyamoli={
    name:'Shyamoli',
    book:[],
}
book.call(shyamoli,24,'kashem')
//appy method works as same as apply but apply method only receive this and a an array
let info=[25,'saki'];
book.apply(shyamoli,info);
//we can do the same with call using spread operator
// book.apply(shyamoli,...info)


////bind method
//bind method binds values and return new function insted of calling the function imidiately
let hanifP=book.bind(hanif);
hanifP(28,'Iqbal')
let hanif23=book.bind(hanif,23);
hanif23('hashem')