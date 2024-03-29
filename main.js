//MAP Custom Function------------------------

let myArray = [0, 1, 2, 3, 4, 5, 6, 6, 7, 78, 9, 0, 0];
// let newArray = myArray.map((e, i, arr) => {
//   return e;
// });
// console.log(newArray);

// Array.prototype.mapCustom = function (callBackFn) {
//   let mapArray = [];
//   for (let i = 0; i < this.length; i++) {
//     mapArray[i] = callBackFn(this[i],i,this)
//   }
//   return mapArray
// };

// let newArrays = myArray.mapCustom((e, i, arr) => {
//     return e;
//   });
//   console.log(newArrays);

//Find Custom Function---------------------

// Array.prototype.findCustom = function (callBackFn) {
//   for (let i = 0; i < this.length; i++) {
//     if (callBackFn(this[i], i, this)) return this[i]

//   }
//   return undefined;
// };

// let b = myArray.findCustom((a,b)=>{
//     if(a>=3){
//         return b
//     }
// })
// console.log(b);

//Find Index Custom------------------------------------------------------------------------
// Array.prototype.findIndexCustom = function (callBackFn) {
//   for (let i = 0; i < this.length; i++) {
//     if (callBackFn(this[i], i, this)) {
//       return i;
//     }
//   }
//   return -1;
// };
// console.log(
//   myArray.findIndexCustom((a, b, c) => {
//     if (b > 3) {
//       return a;
//     }
//   })
// );

//includes Custom Function -----------------------------------------------------------------
// Array.prototype.includesCustom=function(val){
//   for (let i = 0; i < this.length; i++) {
//     if (val === this[i]) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(myArray.includesCustom(90));

//IndexOf Custom Function -----------------------------------------------------------------
// Array.prototype.indexOfCustom=function(val){
//   for (let i = 0; i < this.length; i++) {
//     if (this[i]===val) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(myArray.indexOfCustom(78));

// Reverse Custom Function -----------------------------------------------------------------
// Array.prototype.reverseCustom=function(){
//     for(let i=0;i<this.length;i++){
//         this.length===i
//     }
//     return this[i]

// }

// console.log(myArray.reverseCustom());

// Join Custom Function -----------------------------------------------------------------
// Array.prototype.joinCustom=function(a){
//     let string = ""
//     for(let i=0;i<this.length;i++){
//         string+=this[i]
//         if(this.length-1>i){
//             string+=a
//         }
//     }
//     return string

// }
// let new1 = myArray.joinCustom("-")
// console.log(new1);

// Filter Custom Function -----------------------------------------------------------------

Array.prototype.filterCustom = function (callBackFn) {
  let filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if(callBackFn(this[i],i,this)){
    filteredArray[i] = this[i]
    }
  }
  return filteredArray
};

let newArrays = myArray.filterCustom((a) => {
  return a>5;
});
console.log(newArrays);

//Some Custom Function
Array.prototype.someCustom = function (callBackFn) {
    let everyArray = []
    for(let i=0;i<this.length;i++){
        everyArray[i] = callBackFn(this[i],i,this)
        if(everyArray[i]){
            return true
        }
    }
    return undefined
}

let newArras = myArray.someCustom((a) => {
    return a>100;
  });
  console.log(newArras);


  //Every Custom Function
Array.prototype.everyCustom = function (callBackFn) {
    let everyArray = []
    for(let i=0;i<this.length;i++){
        everyArray[i] = callBackFn(this[i],i,this)
        if(this){
            return true
        }     
    }
    return false
}
let every = myArray.everyCustom((a)=>{
    if(a<78){
        return a
    }
})
console.log(every);


// includes();+
// indexOf();+
// reverse();-
// join();+
// find(); +
// findIndex(); +
// filter();+
// every();
// some();+
// reduce();
