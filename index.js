// alert('WORKING')
let randomImage = 'https://source.unsplash.com/random/';

let res = ['416x277', '415x332', '420x280', '416x624']

function Append(src, element) {
    src.appendChild(element);
}


function createImageElement() {
    let li = document.createElement('li');
    let name = document.createElement('p');
    name.textContent = 'Hey erehrbeu rer nj';
    let img = document.createElement('img');
    img.className = 'image-elem';
    // img.src = randomImage;
    let random = Math.floor((Math.random() * 3) + 1);
    // img.src = randomImage + res[random];
    fetch(randomImage + res[random], {
        headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        }
    }).then(val => {
        img.src = val.url;
    })
    li.appendChild(img);
    li.appendChild(name);
    return li;
}

init = () => {
    setTimeout(() => {
        Append(document.getElementById('img-list'), createImageElement());
        if (count < nos) {

            init();
            count++;
        }
    }, 0)
    setTimeout(() => {
        Append(document.getElementById('img-list-1'), createImageElement());
        if (count1 < nos1) {

            init();
            count1++;
        }
    }, 0)
    setTimeout(() => {
        Append(document.getElementById('img-list-2'), createImageElement());
        if (count2 < nos2) {

            init();
            count2++;
        }
    }, 0)
}

let count = 0;
let nos = 5
let count1 = 0;
let nos1 = 5
let count2 = 0;
let nos2 = 5

init();


