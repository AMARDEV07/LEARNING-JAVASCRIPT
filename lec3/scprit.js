// let a=5;
// console.log(5);




// let message = 'This is \n my first \n message';
// console.log(message);




// //date



// let date=new Date();
// console.log(date);





// Array------------------------------------


// let number =[1,4,5,7];



// console.log(number);


// number.push(9);
// number.pop();//end'
// number.splice(1,1);//middel

 
// console.log(number);
// // console.log(number.indexOf(5));





// empty Array.


// let number=[2,4,5,67,8];
// let number2=number;
// // number=[];
// // number.length=0; 1st way to delct all array//
// // number.splice(0,number.length);  second way to delect all array

// console.log(number);
// console.log(number2);




// COMBINE ARRAY


// let num=[2,5,67,9];
// let num2=[4,5,7];

// let combine=num.concet(num2);
// console.log(combine);


// spread operator


// let num=[2,3,5,6];
// let num2=[3,4,5,6];

// let combine=[...num,...num2];
// console.log(combine);


// let another=[...combine];




// iterating arry using for out loop.

// let arr=[10,39,40,50];


// for(let  value of arr){
//     console.log(value);

// }


// // 
// map array//


let num=[2,4,5,6];

let items=num.map(function(value){
    return'student'+value;

})
console.log(items);