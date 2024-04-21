const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let banner_img = document.querySelector('.banner-img');
let taglines = document.getElementById('taglines');
let dotsContainer = document.querySelector('.dots');

let Left = document.querySelector('.arrow_left');
let Right = document.querySelector('.arrow_right');

let Slide = 0;

// Fonction pour mettre à jour les dots
function updateDots() {
    // Effacer les dots existants
    dotsContainer.innerHTML = '';

    // Créer et ajouter les dots
    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === Slide) {
            dot.classList.add('dot_selected');
        }
        // Ajouter un gestionnaire d'événements pour le clic sur le dot
        dot.addEventListener('click', function() {
            Slide = i;
            setSlide();
        });
        dotsContainer.appendChild(dot);
    }
}

// Ajout des écouteurs d'événements pour flèche gauche
Left.addEventListener('click', function() {
    Slide = (Slide === 0) ? slides.length - 1 : Slide - 1;
    console.log("Vous avez cliqué sur la flèche gauche");

    setSlide();
});

// Ajout des écouteurs d'événements pour flèche droite
Right.addEventListener('click', function() {
    Slide = (Slide === slides.length - 1) ? 0 : Slide + 1;
    console.log("Vous avez cliqué sur la flèche droite");

    setSlide();
});




// Fonction pour changer de diapositive
function setSlide() {
    banner_img.setAttribute('src', './assets/images/slideshow/' + slides[Slide].image);
    taglines.innerHTML = slides[Slide].tagLine;
    updateDots(); // Mettre à jour les dots
}

// Initialiser le slider
setSlide();




