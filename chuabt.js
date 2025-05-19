// //ex6
// // tạo 1 hàm
// //INPUT
// //-Chuỗi ký tự bất kỳ
// //PROCESS
// //B1:tạo hàm capitalize(str) //str
// function capitalize(str) {
//     //B2: chuẩn hóa các ký tự có trong chuỗi string về dạng viết thường
//     // let str = "hello WORld" ===> "hello world"
//     str = str.toLowerCase();
//     console.log(str);

//     //B3: xác định từng từ có trong chuỗi ký tự str
//     let words = str.split(" "); //['hello','world']

//     //B4: tìm ký tự đâu tiên có trong từng từ
//     //B4.1:Duyệt qua mảng words
//     for (let i = 0; i < words.length; i = i + 1) {
//         words[i]; //'hello', 'world'
//         //B4.2: Viết hoa ký tự đầu tiên của từng từ
//         //- Làm việc với từng ký tự có trong từng từ (words[i])
//         let letters = words[i].split("");
//         //-Viết hoa phần tử đầu tiên của mảng letters
//         letters[0] = letters[0].toUpperCase();
//         // Nối các ký tự lại và cập nhật lại giá trị cho từng từ trong mảng gốc
//         words[i] = letters.join(""); // 'Hello' / 'World'

//     }
//     //words = ['Hello', 'World']
//     let result = words.join(" ");
//     return result;
// }
// console.log(capitalize("hello WORld")); //"Hello World"
// //OUTPUT:
// //-chuỗi ký tự đã được chuẩn hóa viết hoa chữ cái
// //đầu tiên của từng từ
// //- "Hello World"

//ex7
// tạo ra 1 hàm thực thi yêu cầu đề bài
// Input
// nhập vào 1 mảng bất kỳ
// Process
// // B1 tạo 1 hàm squareAndFilter(arr) // arr[]
// function squareAndFilter(arr) {
//     //B2:
//     //let arr = [3, 2, 5, 4, 1]
//     // làm việc với toàn bộ phần tử trong arr (duyệt)-
//     // for (let i = 0; i < arr.length; i = i + 1) {
//     //     arr[i];
//     // }
//     //for...of
//     //B2.1: tạo 1 mảng rỗng dùng để lưu kq của bài toán
//     let result = [];
//     for (let element of arr) {
//         //B3 Bình phương toàn bộ phần tử có trong mảng arr
//         element = element ** 2;
//         //B4: Kiểm tra xem phần tử bình phương đó có phải chẵn hay không
//         //nếu không thì kệ nó
//         //nếu có thì đẩy các phần tử thỏa mãn vào mảng result
//         if (element % 2 === 0) {
//             result.push(element);
//         }
//     }
//     return result;
// }
// console.log(squareAndFilter([3, 2, 5, 4, 1]))// [4 , 16]// Output
// // mảng bình phương các phần tử
// // lọc ra số chẵn

// //1.Chuyển đổi toàn bộ phần tử có trong mảng
// //(THEO CÔNG THỨC)
// //Array.map()
// let numberList = [3, 2, 5, 2, 1, 4];
// let result = numberList.map(function (element, index) {
//     return (element + 10) ** 2;
// });
// console.log(result);

// //chuyển đổi toàn bộ phần tử trong mảng
// //tăng 10 và bình phương

// //2.Lọc toàn bộ phần tử có trong mảng
// //(THEO ĐIỀU KIỆN)
// //Array.filter()
// let numberList2 = [3, 2, 5, 2, 1, 4];
// // lọc toàn bộ số lẻ
// // lọc ra toàn bộ phần tử thỏa mãn điều kiên chia 2 dư 1
// let result2 = numberList2.filter(function (element, index) {
//     return element % 2 === 1;
// });
// console.log(result2);

//ex9
// PHÂN TÍCH hướng làm
// [1, 2, 3, 4, 5, 6, 7, 8]
// 3

// sliceArr(arr, number)

// sliceArr([1, 2, 3, 4, 5, 6, 7, 8], 3)
// [[1, 2, 3], [4, 5, 6], [7, 8]]

// - Dựa vào số lượng mảng con (number)
// --> Tính toán số lượng phần tử
// có trong các mảng con đó
// Tổng length/number --> Làm tròn lên (3)
// - Có 1 mảng kết quả []

// - Duyệt qua toàn bộ phần tử có bên trong mảng gốc
// let subArr = []
// for(let i = 0; i < 3; i = i + 1) {
// subArr.push(arr[i]);
// }
// [1, 2, 3]

// let subArr = []
// for(let i = 3; i < 6; i = i + 1) {
// subArr.push(arr[i]);
// }
// [4, 5, 6]

// let subArr = []
// for(let i = 6; i < 9; i = i + 1) {
// subArr.push(arr[i]);
// }
// [7, 8, null]

// for(let j = 0; j < 3; j = j + 1) {
// let subArr = []
// for(let i = 6; i < 9; i = i + 1) {
// subArr.push(arr[i]);
// }
// [7, 8, null]
// }

// sliceArr([1, 2, 3, 4, 5, 6, 7, 8], 2)
// [[1, 2, 3, 4], [5, 6, 7, 8]]

// INPUT
// PROCESS
// OUTPUT

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// [[1, 2, 3],  [4, 5, 6], [7, 8]]

let n = 2;
let number = Math.ceil(arr.length / n);

let result = [];

// let subArr = [];
// for (let i = 0 + 0; i < number + 0; i = i + 1) {
//   subArr.push(arr[i]);
// }

// let subArr2 = [];
// for (let i = 0 + 3; i < number + 3; i = i + 1) {
//   subArr.push(arr[i]);
// }

// let subArr3 = [];
// for (let i = 0 + 6; i < number + 6; i = i + 1) {
//   subArr.push(arr[i]);
// }

for (let j = 0; j < arr.length - 1; j = j + number) {
    let subArr = [];
    for (let i = 0 + j; i < number + j; i = i + 1) {
        if (arr[i]) {
            subArr.push(arr[i]);
        }
    }
    result.push(subArr);
}
console.log(result);