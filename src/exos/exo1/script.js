// Ce programme affiche plein de messages en console
// afin de simuler un programe qui executerait beaucoup d'instruction
// Il n'est pas rare de vouloir mesurer le temps d'execution de notre code pour chercher à l'optimiser
// C'est qu'on va faire ici

// On commence par mettre de côté l'heure précise au début de l'execution
let start = Date.now();

// On a ensuite préparé une série de 5 instructions pour afficher le temps écoulé
const now = Date.now();
console.log('-- Debug --');
console.log(`${now - start} millisecondes écoulées depuis le dernier contrôle`);
console.log('--- Fin ---');
start = now;

// Etape 1
// Trouve un moyen d'exécuter les 5 instructions précédentes chaque fois qu'il est écrit "ici" dans la suite du programme
// Puis regarde le résultat dans la console

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

setTimeout(() => {
  console.log('J\'attends un peu et je refais des choses...');
  // ici

}, 2000);