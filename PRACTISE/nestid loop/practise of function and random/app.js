// count vowels in a string....

// let vowelsletters = "aeiouAEIOU"

// let checkvowelscount = (str) => {          //<<<<< ' STR' jab loop chala to ek ek alphabet seprate hu gya...
//     let count = 0
//     for (let v of str) {
//         if (vowelsletters.includes(v)) {       //<<<<<< "vowelsletters" jab includes ko sath mein lekha tu humen ye check kar waya volwlesletters ke andar jo 
//             // match kar raha hai v kes sath vowels nikal lo

//             // jabbhe loop chale ga osme plus hute rahe jitna vowels hu ga oska toltal show hu ga
//             count++

//             console.log(v);

//         }
//     }
//     return count          // <<<<   return ka kaam jitna total vowels ko show karna jese ke 4 hai vowels hai tu return mein show kar raha  hai
// }

// console.log(checkvowelscount("abdulrehman"))         // <<<<<< Ye value arrow function KE andar '(str)' mein jake store hu gya hai..


// 2. find factorial of number

// let factorial = (x) => {
//     let fac = 1
//     for (let i = 1; i <= x; i++) {
//         fac *= i
//     }

//     return fac


// }
// console.log(factorial(5))

        
// 3. count the number of words in a sentence//

//normal code
// function checkwordcount(str) {

//     console.log(str.split(""))      // <<<<<split() strin ko tod kar array mein convert karta hai. simple languge mein ek sentence ko pieces me divide 
//karta hai...               
// }                                                              


// checkwordcount("pakistan zinda baad ")  


//1st step
// function checkwordcount(str) {

// return str.split(" ").length

// }
// console.log(checkwordcount("pakistan zinda baad "))


//2nd step
function checkwordcount(str) {
    // return str.split(" ").length
    let wordc = 1

    for (let v of str) {

        if ( v== " ") {
            wordc++

        }

    }
    return wordc
}
console.log(checkwordcount("pakistan zindabaad"))








// let name = "pakistan"
// let name2 = "zindabad"
// let result = name + "  " + name2.split("").join("")
// console.log(result);

