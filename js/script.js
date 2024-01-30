
// ---------------------------------------------------------------------
//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// ====================scroll section active section=========================
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navlinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
/*================================= Sticky navbar ================================ */
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // =============remove overlay menu icon when clicked =========
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


//moving text home page
var typed = new Typed(".multiple-text", {
    strings: [
        "La gestion des Grottes au Maroc",
        "The management of caves in Morocco"
    ],
    typeSpeed: 10,
    backSpeed: 10,
    backDelay: 2000,
    loop: true,
});

//============== scroll reveal animations ==============
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 
});

ScrollReveal().reveal('.heading', { origin: 'top' });



  //============ unavailable content =====================
  document.addEventListener('DOMContentLoaded', function () {
    const alertButtons = document.querySelectorAll('.btn');

    alertButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            alert('This feature is currently unavailable.');
        });
    });
});




// -----------------leaflet code
window.onload = init;

function init(){
  
  const mapElement = document.getElementById('mapid')

  const mymap = L.map('mapid', {
    center: [31.9,-8],
    zoom: 6,
    minZoom:5,
    layers: [
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      })
    ] 
  })


  // Tableau de coordonnées et de contenu pour les popups
  const markersData = [
    { coordinates: [34.21372057314457, -4.014021220287049], image: 'images/g2img.jpg', description: 'Grotte Friouato, TAZA ',link:'https://www.google.com/maps/place/Grotte+Friouato/@34.1045991,-4.0751234,17z/data=!3m1!4b1!4m6!3m5!1s0xd9e3fe214441ec3:0xf1135d9def6bb67a!8m2!3d34.1045991!4d-4.0725485!16s%2Fg%2F11c1xnv84l?entry=ttu'},
    { coordinates: [35.7601472710825, -5.939007455287253], image: 'images/g1.jpg', description: 'Grottes dHercule, Tanger',  },
    { coordinates: [33.9558333, -4.248686], description: 'Grotte chaara', image: 'images/g3img.jpg' ,link: "https://www.google.com/maps/place/Grottes+d'Hercule/@35.7599335,-5.9418068,17z/data=!4m6!3m5!1s0xd0b882d10964725:0xa9ac855c8cfd195a!8m2!3d35.7599335!4d-5.9392319!16s%2Fm%2F0w6bp17?entry=ttu"},
    { coordinates: [30.6803624, -9.3474415], image: 'images/g4img.jpg', description: 'Grotte Win Timdouine',link: 'https://www.google.com/maps/place/Grotte+Win+Timdouine/@30.6803624,-9.3474415,17z/data=!3m1!4b1!4m6!3m5!1s0xdb22e4759376ed5:0x547820649b676ce9!8m2!3d30.6803624!4d-9.3448666!16s%2Fg%2F11bw3d7449?entry=ttu'},
    { coordinates: [34.8142113, -2.406719], image: 'images/g5img.png', description: 'Grotte Des Pigeons',link: 'https://www.google.com/maps/place/Grotte+Des+Pigeons/@34.8142113,-2.406719,17z/data=!3m1!4b1!4m6!3m5!1s0xd781f14f90bfec9:0x437a8bbedece364b!8m2!3d34.8142113!4d-2.4041441!16s%2Fm%2F05mswg9?entry=ttu'},
    { coordinates: [34.8384207, -2.3587021], image: 'images/g6img.JPG', description: 'La Grotte du Chameau',link: 'https://www.google.com/maps/place/La+Grotte+du+Chameau/@34.8384207,-2.3587021,17z/data=!3m1!4b1!4m6!3m5!1s0xd78189de7c0f931:0x654683360baa922a!8m2!3d34.8384207!4d-2.3561272!16s%2Fg%2F11cs6bj8bf?entry=ttu'},
    { coordinates: [34.8343206, -2.4961348], image: 'images/g10img.png', description: 'Grotte du Kaf',link: 'https://www.google.com/maps/place/Grotte+du+Kaf/@34.779703,-2.1569815,17z/data=!3m1!4b1!4m6!3m5!1s0xd7814c87c172a05:0xec4516829356a9fb!8m2!3d34.779703!4d-2.1544066!16s%2Fg%2F119wgr_z_?entry=ttu'},
  ];

  // Boucle à travers le tableau pour créer et ajouter chaque marqueur à la carte
  markersData.forEach(markerInfo => {
    const customIcon = L.icon({
      iconSize: [38, 38], // Taille de l'icône
      iconAnchor: [22, 94], // Point d'ancrage de l'icône
      popupAnchor: [-3, -76] // Point d'ancrage de la popup par rapport à l'icône
    });
    
    const marker = L.marker(markerInfo.coordinates).addTo(mymap);
    const popupContent = `
      <div class="custom-popup">
        <a href="${markerInfo.link}" target="_blank"> <!-- Insérer le lien ici -->
          <img src='${markerInfo.image}' alt='Image Popup' class="popup-image">
          <div class="popup-description">${markerInfo.description}</div>
        </a>
      </div>`;
    marker.bindPopup(popupContent).openPopup();
    
  });
}

  
  
  
  
