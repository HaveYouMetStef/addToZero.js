// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let value = false

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (i !== j){
            if (array[i] +  array[j] === 0) {
                value = true;
            }
        }
    }
}
console.log(value);
// const checkZero = (array) => {
// let output = array + array;
// console.log('This is the output: ', output)
// if (output === 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// }
// console.log(checkZero(array));