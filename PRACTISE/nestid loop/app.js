//NESTID LOOP
// asal me yahan pe  ye huwa ke 'i' mutliply hwa 'j' se or ese three time huwa oske baad feer 2 se huwa multiply j se   
// matlp ke asal me phale 1 se leke 3 time take multiply huwa phir 2 se phir 3 se ... 


// for (i = 1; i <= 3; i++) {         

//     for (j = 1; j <= 3; j++)
//         console.log ( `${i} * ${j} = ${i * j} `);

// }

// for (let r=1; r<=9; r++) {         

//     for (let i=1; i<=r; i++){            // ander 1 se hi shru hu ga 
//         document.write ("*");
//     }

//     document.write ("<br>");
// }


// prime Number

// let userinput = Number(prompt("enter the Number"))
// let midvalue = parseInt(userinput / 2)                   // user ne jo number jodiya isne divide kar diya

// isprime = true

// for (let s = 2; s <= midvalue; s++) {

//     if (userinput % s == 0) {
//         isprime = false
//         break
//     }
// }

// if (isprime) {
//     console.log("prime number");

// }
// else  {
//     console.log("not prime number");

// }

let count = 1
for (r = 1; r <= 5; r++) {

    for (let c = 1; c <= r; c++) {
        document.write(count, " ");
        count++
    }
    document.write("<br>")
}