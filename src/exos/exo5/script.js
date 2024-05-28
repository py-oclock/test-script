// On a reproduit l'interface d'une plateforme de vidéos en ligne
// Les utilisateurs attribuent des cœurs pour noter les vidéos
// On a les données du nombre de cœurs des vidéos
// On a déjà codé de quoi utiliser ces données dans la page

// La logique sera toujours la même pour toute les vidéos :
// Si la vidéo à + de 1000 coeurs on va écrire les milliers suivi de la lettre "k", par exemple 2500 donnera 2.5 K
// Sinon si on a entre 2 et 999 on écrire le nombre suivi de coeurs au pluriel
// Sinon pour 0 ou 1 on mettra coeur au singulier

// Etape 1
// Analyse le code

// Les données
const data = {
  channel: 1523, // cœurs de la chaine en haut à droite
  video: 272,    // cœurs de la vidéo principale
  thumbs: [      // cœurs des miniatures sur la droite
    12,
    8524,
    0,
    15654,
    89,
    1,
  ],
};

// On détermine le texte pour le nombre de coeurs de la chaine (+ de 1000 ici)
let heart = data.channel;
heart = heart / 1000;
heart = heart.toFixed(1); // permet de garder 1 seul chiffre après la virgule
heart = `${heart} k cœurs`;

// on écrit le texte dans la page
const channel = document.getElementById('channel-like');
channel.textContent = heart;

// On détermine le texte pour le nombre de coeurs de la vidéo (- de 1000 ici)
heart = data.video;
heart = `${heart} cœurs`;
// on écrit le texte dans la page
const video = document.getElementById('video-like');
video.textContent = heart;

// Pour chaque miniature
const thumbs = document.querySelectorAll('.like');
thumbs.forEach((thumb, index) => {
  // On détermine le texte pour le nombre de coeurs au cas par cas
  heart = data.thumbs[index];
  if (heart > 1000) {
    heart = heart / 1000;
    heart = heart.toFixed(1);
    heart = `${heart} k cœurs`;
  }
  else if (heart > 1) {
    heart = `${heart} cœurs`;
  }
  else {
    heart = `${heart} cœur`;
  }
  // on écrit le texte dans la page
  thumb.textContent = heart;
});

// Etape 2
// Remplace le mot "coeur" par "pouce" partout

// Etape 3
// Regroupe la logique qui permet de détermine le texte dans une fonction
// Elle doit accepter en paramètre le nombre de coeurs
// Et retourner le texte en fonction de ce nombre
// Utilise cette fonction partout où on détermine un texte pour éviter de répéter la même logique à chaque fois

// Etape 4
// Remplace le mot "pouce" par "étoile"
// Et tire une conclusion sur l'utilisation d'une fonction
