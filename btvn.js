//ex
// function calculateSum(number) {
//     // let number
//     let sum = 0;
//     for (let i = 0; i <= number; i++) {
//         sum = sum + i;
//     }
//     return (sum)
// }
// console.log(calculateSum(5));

//ex2
//tạo 1 hàm nhận 1 mảng số tự nhiên
//trả về tổng của toàn bộ phần tử trong mảng đó
// sumArr([1, 2, 3, 2, 1, 4]);//13
// sumArr([1, 1, 1, 2, 2]);//7
// function sumArr(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     return (sum);
// }
// console.log(sumArr([1, 2, 3, 4, 5]));

//ex3
//tạo 1 hàm nhận vào 1 chuỗi kí tự
//đảo ngược, trả về chuỗi kí tự sau khi đảo
// console.log();

// reverseString("hello");//olleh;
// reverseString("haha");//ahah;

// function reverseString(str) {
//     //let reverseInput = "";
//     return (str.split("").reverse().join(""));// ['h','a','h','a']---->['a','h','a','h']--->[ahah]
// }
// console.log(reverseString(""));

//ex1
// function sumNumber(number1, number2) {

//     if (number1 % 1 !== 0 || number2 % 1 !== 0) {
//         return ("số nhập vào không hợp lệ")
//     } else {
//         return number1 + number2;
//     }
// }
// console.log(sumNumber(3, "text "));

//ex2
// function numberPrime(number1) {
//     if (number1 === 2) {
//         return ("2 là số nguyên tố");
//     } else if (number1 > 2) {
//         for (let i = 2; i <= Math.sqrt(number1); i++) {
//             // number1 % i !== 0;
//             if (number1 % i !== 0) {
//                 return (` Số ${number1} là số nguyên tố`);
//             } else {

//                 return (` Số ${number1} không phải số nguyên tố`)
//             }
//         }

//     }

// }
// console.log(numberPrime(17));

//ex3
// function findMaxNumber(arr) {
//     if (Array.isArray(arr)) {
//         let max = arr[0];
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > max) {
//                 max = arr[i];
//             }

//         }
//         return max
//     } else {
//         console.log("vui lòng nhập vào chuỗi số nguyên");
//         return ("vui lòng nhập vào chuỗi số nguyên")
//     }
// }
// console.log(findMaxNumber([1, 5, 7, 9, 10, 25, ]));

//ex4
// function positiveNumber(arr) {
//     let sumPositive = 0;
//     if (Array.isArray(arr)) {
//         for (let i = 0; i < arr.length; i++) {
//             if (!isNaN(arr[i]) && Number.isInteger(arr[i]) && arr[i] > 0) {
//                 sumPositive = sumPositive + 1;

//             } else {
//                 sumPositive = 0
//             }
//         }
//         if (sumPositive === 0) {
//             return ("không có số nguyên dương")
//         } else {
//             return sumPositive;
//         }
//     }
// }
// console.log(positiveNumber([]));

//ex5
// let textInput = prompt("mời bạn nhập vào chuỗi muốn kiểm tra");
// function isPalindrome(textInput) {
//     let textReverse = textInput.split("").reverse().join("");
//     if (textInput === textReverse) {
//         console.log("Chuỗi là chuỗi đối xứng.");
//     } else {
//         console.log("Chuỗi KHÔNG phải là chuỗi đối xứng.");
//     }
// }
// isPalindrome(textInput);