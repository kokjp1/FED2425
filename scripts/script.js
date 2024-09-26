const articles = document.querySelectorAll('div.BuyNowCards article');
const prevButton = document.querySelector('.previousbutton');
const nextButton = document.querySelector('.nextbutton');

let I = 0;

function run() {
    I++;
    changeImage();
}

function changeImage() {
    if (I > articles.length - 1) {
        I = articles.length - 1; // 
    } else if (I < 0) {
        I = 0; // 
    }

    articles.forEach(article => {
        article.style.transform = `translateX(${-I * 22.5}em)`;
    });

    prevButton.disabled = I === 0;
    nextButton.disabled = I === articles.length - 1;
}

// Event listener for the previous button
prevButton.addEventListener('click', () => {
    if (I > 0) {
        I--;
        changeImage();
    }
});

// Event listener for the next button
nextButton.addEventListener('click', () => {
    if (I < articles.length - 1) {
        I++;
        changeImage();
    }
});

// Initial call to set the correct button states
changeImage();

// https://codepen.io/DarkCode123/pen/MWoNBgz


const openbutton = document.querySelector('.openmenu') 

openbutton.addEventListener('click', openmenu)

function openmenu () {
    let floordiv = document.querySelector(".menuaddition")
    let nav = document.querySelector('nav')
    nav.classList.toggle("toonMenu")
    floordiv.classList.toggle("divslide")
}