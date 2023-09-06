"use strict"

//1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

//Regular
// function divided(n){
//     if(n%21==0){
//         return "Bolunur";
//     }
//     return "Bolunmur";
// }
// let result=divide(21);
// console.log(result);

//Arrow

// let divided=(n) =>{
//     if(n%21==0){
//         return "Bolunur";
//     }
//     return "Bolunmur";
// }

// let result =divided(20);
// console.log(result);


//2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.

//Regular

// function factorial(n){
//     let fact=1;
//     for (let i = 1; i <= n; i++) {
//         fact*=i;
//     }
//     return fact;
// }

// let result=factorial(5)
// console.log(result)

//Arrow

// let factorial =(n) =>{
//     let fact=1;
//      for (let i = 1; i <= n; i++) {
//          fact*=i;
//      }
//      return fact;
// }

// let result=factorial(3)
// console.log(result)

//3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

//Regular
// function squareOfevenSum(arr){
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//        if(arr[i]%2==0){
//          sum+=arr[i]**2;
//        }
//     }
//     return sum;
// }
// let result=squareOfevenSum([1,3,1,1,5,1]);
// console.log(result);

//Arrow

// let squareOfevenSum=(arr)=>{
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//        if(arr[i]%2==0){
//          sum+=arr[i]**2;
//        }
//     }
//     return sum;
// }
// let result=squareOfevenSum([1,3,1,4,5,2]);
// console.log(result);

//4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin.

//Regular
// function login(mail,password){
//     if(mail=="cavid@code.edu.az" && password=="12345"){
//         return "Login succeses";
//     }
//     return "Login is failed";
// }

// let result=login("cavid@code.edu.az","1245");
// console.log(result)

//Arrow
// let login=(mail,password)=>{
//     if(mail=="cavid@code.edu.az" && password=="12345"){
//                  return "Login succeses";
//              }
//      return "Login is failed";
// }
//  let result=login("cavid@code.edu.az","12345");
//  console.log(result)

//5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

//Regular
// function sumofOddNumbers(arr){
//     let sum=0;
//     arr.forEach(number => {
//         if(number%2==1){
//             sum+=number;
//         }
//     });
//     return sum;
// }

//  let result=sumofOddNumbers([5,3,1,4,11,7]);
//  console.log(result);

//Arrow
// let sumofOddNumbers=(arr)=>{
//     let sum=0;
//     arr.forEach(element => {
//         if(element%2==1){
//             sum+=element;
//         }
//     });
//     return sum;
// }
//   let result=sumofOddNumbers([5,2,1,4,11,8]);
//   console.log(result);

//6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

//Regular
// function countofEven(arr){
//     let count=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2==0){
//             count++;
//         }
//     }
//     return count;
// }

//   let result=countofEven([8,2,1,5,12,8]);
//   console.log(result);

//Arrow
// let countofEven=(arr)=>{
//     let count=0;
//     arr.forEach(element => {
//         if(element%2==0){
//             count++;
//         }
//     });
//     return count;
// }
//   let result=countofEven([11,2,12,5,12,8,13,18]);
//   console.log(result);



