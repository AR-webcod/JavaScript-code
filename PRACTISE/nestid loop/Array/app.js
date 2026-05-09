// let user = ["abdulrehman", "furqan", "skhan"]
// console.log(user[2]);
// console.log(user[0]);

// // array ke andar array banya or ose apne index number se cell kiya phir 2nd value ko kiya
// let l = [10, 20, 30, 55, 88, [65, 77]]       
// console.log(l[5][1]);



// let users = ['abdul', 'saad', 'furqan', 'khan', 10, 20, 'ali']
// let t = users.length

// for (let i=0; i<t; i++){
//     console.log(i,users[i]);
    
// }

// Reverse method
// ap ko ye yad rakhana ke last index number kiya hai

// let users = ['abdul', 'saad', 'furqan', 'khan', 10, 20, 'ali']     // index number 6
// let t = users.length

// // t mtlp 6 hai  -1  mtlp -5 se cahel ga i greator then o na hu jaye mtlap ke jab tak i bara hu ya barabar na ho

// for (let i=t-1; i>0; i--){    
//     console.log(i,users[i]);
    
// }

let l = [10, 20, 30, 55, 88, 65, 77]
let sum=0
 
for (let v of l){
    sum+=v
    console.log(v);
    
}
console.log(sum);
