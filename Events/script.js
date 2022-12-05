//Code préécrit
const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
//Fonction au départ du déclencheur "clickOnSquare" (préécrite)
const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())

//Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
//Création de la div "displayedSquare"
  const d = document.createElement("div");

//Extension de l'attribut "class" aux couleurs:
  d.className = ("displayedsquare "+ e.target.classList[1]);

//Sélection de la section devant intégrer la nouvelle div
  const disSqW = document.querySelector('.displayedsquare-wrapper');
  console.log(disSqW);

//Insertion de la nouvelle div à la section  
  disSqW.appendChild(d);

//Create a new <li> in the log below to state when the action was done
//Sélection de la liste et de ses éléments
  const ul = document.querySelector('ul');
  const li = document.createElement("li");

//Création de nouveaux éléments de liste
  li.innerHTML = getElapsedTime() + (" Create a new " + e.target.classList[1] + " square.");

//Insertion des nouveaux éléments à la liste
  ul.appendChild(li);
}

//Suite préécrite
const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}