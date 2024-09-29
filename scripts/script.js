// CARD CAROUSEL JS

const articles = document.querySelectorAll('div.BuyNowCards article, div.NewThisWeekTiles article');
const prevButton = document.querySelector('.previousbutton, .updatespreviousbutton');
const nextButton = document.querySelector('.nextbutton, .updatesnextbutton');

let I = 0;

let scrollAmount;
const pathname = window.location.pathname;

if (pathname.includes('index.html')) {
    scrollAmount = 22.5; //
} else if (pathname.includes('discoverGTAO.html')) {
    scrollAmount = 17.5; // 
}

// uitleg van copilot

function run() {
    I++;
    changeImage();
}

function changeImage() {
    if (I > articles.length - 1) {
        I = articles.length - 1;
    } else if (I < 0) {
        I = 0;
    }

    articles.forEach(article => {
        article.style.transform = `translateX(${-I * scrollAmount}em)`;
    });

    console.log(scrollAmount);


    // template literal uitgelegd door Copilot

    prevButton.disabled = I === 0;
    nextButton.disabled = I === articles.length - 1;
}

prevButton.addEventListener('click', () => {
    if (I > 0) {
        I--;
        changeImage();
    }
});

nextButton.addEventListener('click', () => {
    if (I < articles.length - 1) {
        I++;
        changeImage();
    }
});

changeImage();

    // https://codepen.io/DarkCode123/pen/MWoNBgz

// -X- END OF SECTION


// HAMBURGER MENU JS

    const openbutton = document.querySelector('.openmenu') 

    openbutton.addEventListener('click', openmenu)

    function openmenu () {
        let floordiv = document.querySelector(".menuaddition")
        let nav = document.querySelector('nav')
        nav.classList.toggle("toonMenu")
        floordiv.classList.toggle("divslide")
    }

// -X- END OF SECTION


// OPACITY ANIMATION JS 

    const fadeInElements = document.querySelectorAll('.contentcards article, .WelcomeToLS, .GrandTheftAutoOnline, .UpdatesCards, .NewThisWeek');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('zichtbaar');
                observer.unobserve(entry.target); // 
            }
        });
    }, {
        threshold: .3 // 
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    // Copilot gevraagd om hulp met intersection observer

// -X- END OF SECTION 