//Select the last child of the <ol> tag and put it at the beginning of the list 
//Sélectionner la liste
const list = document.querySelector('ol');
//Sélectionner le premier élément de la liste
const a = list.children[0];
//Sélectionner le dernier
const b = list.lastElementChild;
//Cibler le premier élément et déplacer le dernier avant
a.before(b);
//Alternative: list.prepend(b);

//Move the <h2> of the third section in the second one and vice-versa
//Réalisé en ciblant chaque élément un par un... Long, mais efficace
const main = document.querySelector('main');

const secSec = main.children[1];
const thTit = secSec.firstElementChild;
const secP = secSec.lastElementChild;

const thSec = main.lastElementChild;
const thDiv = thSec.firstElementChild;

const secTit = thDiv.firstElementChild;
const thP = thDiv.lastElementChild;

secP.before(secTit);
thP.before(thTit);

//Delete the last section from the DOM
main.removeChild(thSec);