// 1-masala

// let str = "Khasan K1h2a3s4a5n6";
// let number = 0;

// for (let i = 0; i < str.length; i++) {
//      number = str.charCodeAt(i);
//   if (number >= 48 && number <= 57) {
//        result =  str[i] *= 2;
//     console.log(result);
// };
// };


// 2-masala

// let str = "hello";

// let result = str.substring(0);

// console.log(result);

// ustoz masala shartiga toliq tushunmadim,
// masala shartida "tekshirirng" degan if bilanam tekshirib kordim, lekin baribir toliq tushunmadim


// 3-masala

// let str = "k1h2a3s4a5n6";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//   if (str[i] >= '0' && str[i] <= '9') {
//     result += "*";
//   } else {
//     result += str[i];
//   }
// }

// console.log(result);


// 4-masala

// let str = "BU yErda yigirmA ikkitA unlI harf bOr va ular yuldUzchaga OzgarAdi";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//   let alfabit = str.charCodeAt(i);

//   if (
//     alfabit === 65 || alfabit === 69 || alfabit === 73 || alfabit === 79 || alfabit === 85 ||
//     alfabit === 97 || alfabit === 101 || alfabit === 105 || alfabit === 111 || alfabit === 117
//   ) {
//     result += "*";
//   } else {
//     result += str[i];
//   }
// }

// console.log(result);


// 5-masala

// let str = "KhasanTursunov";
// let result = "";

// let divider1 = "";
// let divider2 = "";
// let divider3 = "";

// for(let i = 0; i < str.length / 3; i++){
//     result += str[i];
//     console.log(result);
// }

// ustoz buni 3 qismga olib, alohida qb teskari qilishga idea kemadi qanqa qilishni bilmadim


// 6-masala

// let str = "eng tez ishlagan masalam boldi"
// let count = 0;

// for(let i = 0; i < str.length; i++){
//     if(str[i] == " "){
//         count++;
//     }
// }
// console.log(count + 1)

// 7-masala

// let str = "    buniyam 2 minutda ishlab bolaman      ";
// let result = str.trim();

// console.log(result);

// (*_^) ikki minutgayam bormadi

// 8-masala

// let str = "   " + "stringda har bir  uchinchi harfni uppercase qilish";

// let result = "";
// let result2 = "";
// for(let i = 0; i < str.length; i++){
//     if(i >= 3 && str[i-3] == " " && str[i-2] != " " && str[i-1] != " "){
//         result2 += str[i].toUpperCase();
//     }else{
//         result2 += str[i];
//     }

// }
// console.log(result2);


// 9-masala   ohirigacha yozilmagan ekan

// 10-masala

// str.split();

// let str = "Khasan Tursunov";
// let result = "";
// let arr = [];
// for(let i = 0; i < str.length; i++){
//     if(arr.includes(str[i])){
//         result += str[i];
//     }else{
//         arr.push(str[i])
//     }
// }
// console.log(result)

// 11-masala

// let str = "Khasan Tursunov";

// for(let i = 0; i < str.length; i++){
//     console.log(str.charCodeAt(i));
// }


// 12-masala

// let str = "Stringda 4  $ Tortta 8  Soz  7  %   # Bor"; 

// for(let i = 0; i < str.length; i++){
//     if (
//       (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) ||
//       (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90)
//     ) {
//       console.log(str[i]);
//     }
// }


// 13-masala

// let str="123456789k1h2a3s4324a5n6";
// let length = str.length;
// let i = 0;
// while(i<str.length){
//     if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57){
//         str = str.slice(0,i) + str.slice(i+1,str.length);
//     }
//     else{
//         i++;
//     }
// }
// console.log(str);

// 14-masala