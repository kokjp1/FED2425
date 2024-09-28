// CARD CAROUSEL JS

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

    const fadeInElements = document.querySelectorAll('.contentcards article, .WelcomeToLS, .GrandTheftAutoOnline');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('zichtbaar');
                observer.unobserve(entry.target); // 
            }
        });
    }, {
        threshold: 0.3 // 
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    // Copilot gevraagd om hulp met intersection observer

// -X- END OF SECTION 