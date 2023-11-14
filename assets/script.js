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

const arrowLeft = document.querySelector("#banner .arrow_left");


const arrowRight = document.querySelector("#banner .arrow_right");

const txtBanner = document.querySelector(".txt-banner");

const indicateurParentDot = document.querySelector(".dots");

let sliderCounter = 0;


function afficheSlideTxt(numeroIndex){
	sliderCounter = numeroIndex;

	document.getElementById("banner-img").src = "assets/images/slideshow/" + slides[numeroIndex].image;
	txtBanner.innerHTML = slides[numeroIndex].tagLine;
};


function removeClass(){
	document.querySelector(".dot_selected").classList.remove("dot_selected");
};


const dots = document.querySelectorAll(".dot").forEach(function(indicateur , index){
	
	indicateur.addEventListener( "click" , function(){

		sliderCounter = index;
		removeClass()
		indicateur.classList.add("dot_selected");
		afficheSlideTxt(sliderCounter);
});	
});

function NextSlider( sens ){

	sliderCounter = sliderCounter + sens;

	if (sliderCounter < 0){

		sliderCounter = slides.length - 1;
	};

   if (sliderCounter > slides.length - 1){
		sliderCounter = 0;
   };	
	afficheSlideTxt(sliderCounter)
	
   	removeClass()
   	indicateurParentDot.children[sliderCounter].classList.add("dot_selected")

};
	setInterval("NextSlider(1)", 4000);



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


