// De retour sur notre site de vidéos
// On affiche cette fois-ci le nombre de mois passés depuis la publication

// On va afficher l'information encore une fois pour la chaine, la vidéo principale et les miniatures

// La logique sera toujours la même
// Si ça fait plus de 12 mois, on affiche le nombre d'années
// Par exemple pour 12 mois 1 an, pour 24 mois 2 ans, 36 mois 3 ans etc (attention au singulier et au pluriel)
// Sinon on affiche simplement le nombre de mois par exemple 6 mois

// Durée passée depuis la plublication en nombre de mois
const data = {
  channel: 38, 
  video: 6,    
  thumbs: [
    12,
    54,
    3,
    6,
    52,
    32,
  ],
};

// On écrit le texte pour la chaine
const channel = document.getElementById('channel-date');
channel.textContent = '0 an';

// On écrit le texte pour la vidéo
const video = document.getElementById('video-date');
video.textContent = '0 an';

// Pour chaque miniature
const thumbs = document.querySelectorAll('.date');
thumbs.forEach((thumb, index) => {
  // On a accès à un index
  // console.log(index);
  // On écrit le texte
  thumb.textContent = '0 an';
});

// Etape 1
// Remplace toutes les chaînes "0 an" par le calcul du nombre de mois/année écoulée depuis la publication

// Etape 2
// On ne veut pas de nombre à virgule lorsqu'on affiche un nombre d'années. Il existe une fonction toute faite pour arrondir un nombre, voici la documentation : 
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/round
