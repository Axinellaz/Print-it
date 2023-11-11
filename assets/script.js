const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const banner = document.querySelector("#banner");

const arrowLeft = document.querySelector("#banner .arrow_left");

const arrowRight = document.querySelector("#banner .arrow_right");

const txtBanner = document.querySelector(".txt-banner");

const pagination = document.querySelectorAll(".dots .dot")

let sliderCounter = 0;


function NextSlider( sens ){

	sliderCounter = sliderCounter + sens;

	if (sliderCounter < 0){

		sliderCounter = slides.length - 1;
	}

   if (sliderCounter > slides.length - 1){
		sliderCounter = 0;
   }
		

	document.getElementById("banner-img").src = "assets/images/slideshow/" + slides[sliderCounter].image;
	txtBanner.innerHTML = slides[sliderCounter].tagLine;
}

/* function selected() {
    const dot = document.getElementsByClassName('dot');
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove('dot_selected');
    }
    dot[i].classList.add('dot_selected');

// On recupere le click suivant ( droite ) 

//arrowRight.addEventListener("click" , NextSlider(1))


// On recupere le click précédent (gauche) 

//arrowLeft.addEventListener("click" , NextSlider(-1))





// Différencier le click gauche de la souris du click droit de la souris
/*
let button = document.querySelector("#button");


button.addEventListener("mouseup", (e) => {

  let log = document.querySelector("#log");

  switch (e.button) {
    case 0:
      log.textContent = "Left button clicked.";
      break;
    case 1:
      log.textContent = "Middle button clicked.";
      break;
    case 2:
      log.textContent = "Right button clicked.";
      break;
    default:
      log.textContent = `Unknown button code: ${e.button}`;
  }
});
*/

//arrowLeft.addEventListener( "click" , changeSlider(-1));

//arrowRight.addEventListener( "click" , changeSlider(1));


