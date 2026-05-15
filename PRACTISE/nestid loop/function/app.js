

let images = [
    'https://vignette.wikia.nocookie.net/db-dokfanbattle/images/3/3f/MUI_Goku_Art.png/revision/latest?cb=20180721080644',
    'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2018/04/utra-instinct-ui-2.jpg?q=50&fit=crop&w=1600&h=900&dpr=1.5',
    'https://th.bing.com/th/id/OSK.ffd6e81526d97f411ef5b71d83e3a0fa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'
];
let lastIndex = -1;

function showImage() {
    let index;
    do {
        index = Math.floor(Math.random() * images.length);
    } while (index === lastIndex && images.length > 1);

    lastIndex = index;
    document.getElementById('displayed-image').src = images[index];
}

document.getElementById('show-button').addEventListener('click', showImage);
