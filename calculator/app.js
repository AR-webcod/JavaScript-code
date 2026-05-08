var getinputfield = document.getElementById('calc')

function btnclick(btn) {

    getinputfield.value += btn
}

function equalsto (){
     getinputfield.value =  eval(getinputfield.value)
}


function deleteLast(){
     getinputfield.value = getinputfield.value.slice(0,-1) 
}

function clerall (){
     getinputfield.value =  ""
}