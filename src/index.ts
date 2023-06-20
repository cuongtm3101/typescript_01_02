// console.log("Hello world");
// var fName = "Quan";
// var age = 18;
// var single = true;
// var funny = false;
// var wife = "";
// var kids: null = null;
// var jobs: any = "Nhảy thoát y";

// jobs = ["Nhảy thoát y", "Công an"];

// wife = "Quan's wife";

// var hometown: string;

// console.log(fName, age, single, funny);
// console.log(
//   `${fName} is ${age} years old. ${fName} is single because ${fName} is not funny at all`
// );

// var sum = function (num1: number, num2: number): void {
//   console.log(num1 + num2);
// };

// console.log(sum(1, 2));

// var person: {
//   name: string;
//   job: string;
//   tall: boolean;
// } = {
//   name: "Quynh Anh",
//   job: "model",
//   tall: false,
// };

// var students: string[] = ["Quynh Anh", "My", "C Hanh", "C Van"];
// var points: number[] = [1, 1, 0, 0];
// var randomList: any[] = ["Hihi", 1, false, true, {}];

// var modelList: { name: string; job: string; tall: boolean }[] = [
//   {
//     name: "Quynh Anh",
//     job: "model",
//     tall: false,
//   },
//   {
//     name: "C Van",
//     job: "model",
//     tall: false,
//   },
// ];

// let hihi = "hihihihihi";
// console.log(hihi);

// let sum2 = (num1: number, num2: number): number => {
//   return num1 + num2;
// };

// Print result
// sum2(1, 2);

// Example:

// Viết một hàm nhận vào 2 tham số
// arr: 1 mảng số tự nhiên được sắp xếp tăng dần
// find: là 1 số cần tìm trong danh sách số tự nhiên tăng dần đó

// Trả về true nếu find nằm trong arr
// Trả về false nếu find không nằm trong arr

// function find(arr: number[], num: number): boolean {
//   for (let i = 0; i < arr.length; i++) {
//     if (num === arr[i]) {
//       return true;
//     }
//   }
//   return false;
// }
// let result = find([1, 2, 3, 4, 6, 8, 9, 11, 13, 15], 14);
// console.log(result);

// common pattern
// linear search

// binary search
// [1, 2, 3, 4, 6, 8, 9, 11, 13, 15, 21, 23, 24, 26, 30, 33, 34]
//start                    middle                            end

// Tuple

// let tupleList: [string, string] = ["C Vân", "C Hạnh"];

// let roles: [string, string, string] = ["ADMIN", "MOD", "USER"];

// console.log(roles);

// // Enum
// enum Roles {
//   "ADMIN" = "is admin", // 0
//   "MOD" = 10, // 1
//   "USER" = "is user", // 2
// }

// console.log(Roles["ADMIN"]);
// console.log(Roles["MOD"]);
// console.log(Roles["USER"]);

// // |
// type PersonType = {
//   name: string;
//   age: number;
// };

// let person: PersonType = {
//   name: "Peter",
//   age: 18,
// };

// type CombineType = number | string;

// function combine(input1: CombineType, input2: CombineType): CombineType {
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     return input1 + input2;
//   } else {
//     return input1.toString() + input2.toString();
//   }
// }

// console.log(combine("Hello", 10));
// console.log(combine(20, 10));

// Type alias - Đặt BÍ DANH cho kiểu

// Function Type
// Higher order function
// type CbType = (r: number) => void;
// function add(input1: number, input2: number, cb: CbType): void {
//   let result = input1 + input2;
//   cb(result);
// }

// add(10, 20, (result: number) => console.log(result));
// add(10, 20, (result: number) => alert(result));
