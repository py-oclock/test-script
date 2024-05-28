// Encore des pourcentages !
// Tu commences à avoir l'habitude, il est encore une fois question de calculer des pourcentages
// Comme on commence à en avoir marre de faire toujours la même chose on va faire une fonction hyper pratique car elle sera réutilisable
// Elle ne s'occupera que de calculer un pourcentage

// Etape 1
// Créer une fonction calculant un pourcentage
// Pour cela retrouve la formule pour calculer un pourcentage
// Et rend paramétrable ce qui est variable
// Retourne le résultat obtenu

const results = {
  js: {
    yes: 1142,
    no: 23,
    total: 1254,
  },
  css: {
    yes: 404,
    no: 122,
    total: 623,
  }
}

// Etape 2
// Utilise ta fonction pour calculer les bonnes valeurs et assigne ces valeurs aux 4 variables suivantes
// Utilise les données de l'objet ci-dessus pour obtenir les bons pourcentages
const percentJSYes = 50;
const percentJSNo = 50;
const percentCSSYes = 50;
const percentCSSNo = 50;

document.getElementById('jsYes').textContent = `Oui : ${percentJSYes}%`;
document.getElementById('jsNo').textContent = `Non : ${percentJSNo}%`;
document.getElementById('css').textContent = `Oui : ${percentCSSYes}% - ${percentCSSNo}%`;
document.getElementById('jsYesBar').style.width = `${percentJSYes}%`;
document.getElementById('jsNoBar').style.width = `${percentJSNo}%`;