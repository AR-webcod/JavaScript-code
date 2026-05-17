alert("Welcome to the Shopping Mall Checkout System! Pick upto 5 items enter their respective prices. The system will calculate the total, apply discounts, and show you the final amount.");


var item1 = prompt("Enter name of item you want to buy")
var price1 = item1 ? prompt("Enter price of " + item1) : 0;

var item2 = prompt("Enter name of item you want to buy")
var price2 = item2 ? prompt("Enter price of " + item2) : 0;

var item3 = prompt("Enter name of item you want to buy")
var price3 = item3 ? prompt("Enter price of " + item3) : 0;

var item4 = prompt("Enter name of item you want to buy")
var price4 = item4 ? prompt("Enter price of " + item4) : 0;

var item5 = prompt("Enter name of item you want to buy")
var price5 = item5 ? prompt("Enter price of " + item5) : 0;

price1 = parseFloat(price1) || 0;
price2 = parseFloat(price2) || 0;
price3 = parseFloat(price3) || 0;
price4 = parseFloat(price4) || 0;
price5 = parseFloat(price5) || 0;

var total = price1 + price2 + price3 + price4 + price5;

var disc = 0;

if (total <= 3000) {
    disc = 0;
}
else if (total >= 5000 && total < 10000) {
    disc = total * 0.05;
}
else if (total >= 10000) {
    disc = total * 0.10;
}

var final = total - disc;


document.writeln(
    `
    <table border = '' width = "60%" align = "center">

       <tr> 
            <th> Item</th>
            <th> Price</th>
            <th> Total</th>
            <th> Discount</th>
            <th> Final Amount</th>
       </tr>

         <tr>
            <td>${item1 || ''}</td>          
            <td>${price1 || ''}</td>
            <td>${total}</td>
            <td>${disc.toFixed(2)}</td>
            <td>${final.toFixed(2)}</td>
         </tr>

         <tr>
            <td>${item2 || ''}</td>
            <td>${price2 || ''}</td>
            <td>${total}</td>
            <td>${disc.toFixed(2)}</td>
            <td>${final.toFixed(2)}</td>
         </tr>

         <tr>
            <td>${item3 || ''}</td>
            <td>${price3 || ''}</td>
            <td>${total}</td>
            <td>${disc.toFixed(2)}</td>
            <td>${final.toFixed(2)}</td>
         </tr>

         <tr>
            <td>${item4 || ''}</td>
            <td>${price4 || ''}</td>
            <td>${total}</td>
            <td>${disc.toFixed(2)}</td>
            <td>${final.toFixed(2)}</td>
         </tr>

         <tr>
            <td>${item5 || ''}</td>
            <td>${price5 || ''}</td>
            <td>${total}</td>
            <td>${disc.toFixed(2)}</td>
            <td>${final.toFixed(2)}</td>
         </tr>

    </table>
`
)