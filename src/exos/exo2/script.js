// On souhaite refaire pratiquement la même chose que pour l'exercice précédent

// Etape 1
// Commence par copier/coller ici la variable start et la fonction créée dans l'exercice précédent
// Puis execute la fonction partout où c'est demandé

// Etape 2
// Vois si cela pose problème et essaye de dire quels sont les portées des différentes variables
// Tu peux placer l'instruction debugger à divers endroit pour voir la portée de tes variables

// ici

for (let i = 0; i < 1000; i++) {
  console.log('Je fais des choses diverses...');
}

// ici

while (Math.random() < 0.9) {
  console.log('Je fais des choses variées...');
}

// ici

for (let i = 0; i < 1000; i++) {
  while (Math.random() < 0.9) {
    console.log('Je fais des choses diverses et variées...');
  }
}

// ici

const now = Date.now();
console.log('Je fais des choses comme afficher la date : ' + now);

// ici

setTimeout(() => {
  console.log('J\'attends un peu et je refais des choses...');
  // ici

}, 2000);
