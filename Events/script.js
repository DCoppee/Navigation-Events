const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

//Sélectionner la cible (actionSquares)
const actionSquares = document.querySelectorAll('.actionsquare')

//Déclencher la fonction:
//Relier l'événement (click) à son déclencheur (clickOnSquare)
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
  
//Créer la condition pour l'apparition des div colorées
  if (actionSquare = greenSq) {

  }
  if (actionSquare = violetSq) {

  }
  if (actionSq = orangeSq) {

  }
}

//Créer le callback = la csq de l'événement

//Créer la div
let d = document.createElement("div");

let main = document.querySelector('main');
let firstSec = main.firstElementChild;
firstSec.append(d);
console.log(firstSec)

//Lui attribuer une class
d.setAttribute('class', '.displayedsquare');

let greenSq = document.getElementsByClassName("green");
let violetSq = document.getElementsByClassName("violet");
let orangeSq = document.getElementsByClassName("orange");
