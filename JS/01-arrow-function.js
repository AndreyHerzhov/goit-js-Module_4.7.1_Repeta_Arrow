
// const add = function (a,b) {
//     return a + b;
// }

// console.log(add(6,6))

// const add = (a,b) => a + b;
   

// console.log(add(6,6))

// let words = 'Hello World'

// const myMessage = message => {
//     console.log(message);
// }

//  myMessage(words)

//  const greet = () => {
//     console.log('words');
//  }
 
//  greet()


/*
 *  ...rest собирает в массив все аргументы
 */
const add = (...args) => { 
    console.log(args)
}

add(1,2,3,4,5)