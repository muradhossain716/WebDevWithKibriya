let arr=[1,2,3,4];
arr.at(0)//1
arr.at(-1)//4
let arr2=[5,6];
let arr3=arr.concat(arr2);
//let arr3=arr1.concat(arr,arr2,...)
arr.slice(1)//2,3,4 slice(start,end)
arr.slice(-1)//4
arr.slice(1,3)//2,3
arr2.splice(-1)//ans 6 arr2[5]
arr.join('-')//1-2-3-4
arr.forEach((el)=>console.log(el))//1 2 3 4 foreach((el,index,array))
arr.entries()//array iterator returns [index,value]
arr.keys()//return iterator
arr.values()//return iterator
for(const [index,value] of arr.entries())console.log(index,value)
arr.reverse()//reverse return an array



