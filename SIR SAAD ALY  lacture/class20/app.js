// // @@ -0,0 +1,25 @@
// // hello world

// /*

// hello
// hello
// hello
// hello
// hello

// */

var getImage = document.getElementById('img')
var output = document.getElementById('output')

function showText(message) {
    output.innerText = message
}

function tomBhaga(){
    getImage.className = "abc"
    showText('mouse over image 2')
}

function kuch(){
    getImage.className = "re"
    showText('mouse left image 2')
}

function hataya(){
    getImage.className = 'def'
}