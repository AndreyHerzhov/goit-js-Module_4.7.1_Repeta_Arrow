/*
 *  Стрелка как метод обьекта это плохо
 */


// const showThis = () => {
//     console.log('this in showThis', this)
// }

// showThis()

// const user = { name: 'Mango'};
// user.showContext = showThis;

// user.showContext()



// const user = {
//     fullName: 'Poly',
//     showName() {
//         console.log('this:', this)
//         console.log('this.fullName:', this.fullName);

//         const inner = () => {
//             console.log('this in inner', this)
//         }
//         inner();
//     }    
// }

// user.showName()


/*
 *  Стрелка как метод обьекта это ПЛОХО
 */


// const objA = {
//     x: 5,
//     showX() {
//         console.log('this in objA.showX:', this) // this in objA.showX: {x: 5, showX: ƒ}
//         console.log(this.x) //   5

//         const objB = {
//             y:10,
//             showThis() {
//                 console.log('this in objB.showX:', this) // this in objB.showX: {y: 10, showThis: ƒ}
//             },
//         };
//         objB.showThis()
//     }
// }

// objA.showX()



// const objA = {
//     x: 5,
//     showX() {
//         console.log('this in objA.showX:', this) // this in objA.showX: {x: 5, showX: ƒ}
//         console.log(this.x) //   5

//         const objB = {
//             y:10,
//             showThis:() => {
//                 console.log('this in objB.showX:', this) // this in objB.showX: {x: 5, showX: ƒ}
//             },
//         };
//         objB.showThis()
//     }
// }

// objA.showX()





/*
 *  Стрелка-конструктор это плохо. Не работает.
 */

// const User = name => {
//     this.name = name;
// }

// console.log(new User('Poly'))

// const res = numbers 
//     .filter(function(num) {
//         return num > 2;
//     })
//     .sort(function(num) {
//         return num * 3;
//     })
//     .map(function(num) {
//         return a - b;
//     })

// const numbers = [1, 2, 3, 4, 5, 6]

// const filteredNum = numbers.filter(num => num > 2)
// console.log(filteredNum)

// const mltplByTwo = filteredNum.map(num => num * 2)
// console.log(mltplByTwo)

// const sorted = mltplByTwo.sort((a,b) => b - a)
// console.log(sorted)

// const res = numbers 
//     .filter(num => num > 2)
//     .map(num => num * 3)
//     .sort((a,b) =>  a - b)


// console.log(res)



/*
 *   Callback
 */

// const first = function(y){
//     console.log(1);
//     y();
// }

// const second = function(a,b){
//     console.log(a * b)
// }

// first(function(){
//     second(5,7);
// })



/*
 *   Замыкание
 */


// function createCalcFunction(n) {
//     return function(){
//         console.log(1000 * n)
//     }
// }

// createCalcFunction(42) // ничего не вернет

// const add = createCalcFunction(42)
// add() // 42000

// function createIncrement(n) {
//     return function(num){
//         console.log(n + num)
//     }
// }

// const addTen = createIncrement(10)
// const addOne = createIncrement(1)
// addTen(10) // 20
// addOne(10) // 11