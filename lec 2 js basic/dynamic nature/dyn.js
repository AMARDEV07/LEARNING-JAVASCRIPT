function Rectangle(){

    this.length=1;
    this.width=2;
    this.draw=function(){
        console.log('drawing');

    }
}
let Rectangleobj=new Rectangle();



//adding new object;


Rectangleobj.colour='yellow';
console.log( Rectangleobj); 



//delect


delete Rectangleobj.colour;
console.log(Rectangleobj);





//constructor



// let a=10;
// let b=a;
// a++;

// console.log(a);
// console.log(b);


// let a={value:10};
// let b=a;
// a.value++;

// console.log(a.value);
// console.log(b.value);


let a=10;
  function increase(a){
    a++;
}
increase(a);
console.log(a);
