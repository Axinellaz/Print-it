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


let arrowLeft = document.querySelector("#banner .arrow_left");
console.log(arrowLeft);

let arrowRight = document.querySelector("#banner .arrow_right");
console.log(arrowRight);

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

/* arrowLeft.addEventListener( "click" , (event) => {
console.log( "Click sur fleche gauche", event.button);
});

arrowRight.addEventListener( "click" , (event) => {
	console.log( "Click sur fleche de droite ");
	}); */