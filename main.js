// // ------------------------------   1   -----------------------------------
// let size: number;
// size = 4;
// let newSize = "";
// for (let i = 1; i <= size; i++) {
//     if (i === 1 || i === size) {
//         for (let b = 0; b < 4; b++) {
//             newSize += "#"
//         }
//     } else
//         if (1 < i < size) {
//             newSize += "#"
//             for (let b = 0; b < 2; b++) {
//                 newSize += "*"
//             }
//             newSize += "#"
//         }
//     newSize += "\n"
// }
// console.log(newSize);
// // ------------------------------   2   -----------------------------------
// const size = 4;
// let newSize = "";
// for (let i = size; i >= 0; i--) {
//     for (let b = 0; b <= size; b++) {
//         if (i > b) {
//             newSize += " "
//         } else {
//             newSize += "*"
//         }
//     }
//     newSize += "\n"
// }
// console.log(newSize);
// //------------------------------   3   -----------------------------------
// let str1 = "hello helll mami", str2 = "mami", str3 = ""
//     , pointer = 0, result = 0;
// for (let i = 0; i < str1.length; i++) {
//     for (let g = 0; g < str2.length; g++) {
//         str3 += str1[pointer];
//         pointer++
//     }
//     if (str2 === str3) {
//         result = i;
//         console.log(i);
//     }
//     str3 = ""
//     pointer = i + 1;
// }
// // ------------------------------   4   -----------------------------------
// let arr = [7, 2, 6, 1, 4, 3, 5], number = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (number < arr[i] && arr[i] > arr[i + 1]) {
//         number = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = number
//         i = -1
//     }
//     if (number >= arr[i] && arr[i] > arr[i + 1]) {
//         number = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = number
//         i = -1
//     }
// }
// console.log(arr);
// // ------------------------------   5   -----------------------------------
// let str = "HelloWorld", letter = [97, 122], str1 = "";
// for (let i = letter[0]; i < letter[1]; i++) {
//     for (let j = 0; j < str.length; j++) {
//         if (str[j] === String.fromCharCode(i) || str[j] === String.fromCharCode(i - 32)) {
//             str1 += str[j]
//         }
//     }
// }
// console.log(str1);
