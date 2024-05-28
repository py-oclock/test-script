// Encore une fois
// Cette fois-ci on a le nombre d'étoiles et le nombre de vues

const data = {
  channel: { // pour la chaine
    star: 1523, // nombre d'étoiles
    watch: 3512, // nombre de vues
  }, 
  video: { // pour la vidéo principale
    star: 272,
    watch: 519,
  },    
  thumbs: [  // pour les miniatures     
    {
      star: 12,
      watch: 50,
    },
    {
      star: 8524,
      watch: 9982,
    },
    {
      star: 0,
      watch: 3,
    },
    {
      star: 15654,
      watch: 30456,
    },
    {
      star: 89,
      watch: 977,
    },
    {
      star: 1,
      watch: 2,
    },
  ],
};

// On écrit le texte pour la chaine
// les étoiles
const channelLike = document.getElementById('channel-like');
channelLike.textContent = '0 étoile';
// et les vues
const channelWatch = document.getElementById('channel-watch');
channelWatch.textContent = '0 vue';

// On écrit le texte pour la vidéo
// les étoiles
const videoLike = document.getElementById('video-like');
videoLike.textContent = '0 étoile';
// et les vues
const videoWatch = document.getElementById('video-watch');
videoWatch.textContent = '0 vue';

// Pour chaque miniature
const thumbs = document.querySelectorAll('.window-thumb');
thumbs.forEach((thumb, index) => {
  // On a accès à un index
  // console.log(index);
  // On écrit le texte pour les étoiles
  thumb.querySelector('.like').textContent = '0 étoile';
  // et pour les vues
  thumb.querySelector('.watch').textContent = '0 vue';
});

// Etape 1
// Comme pour l'exercice 5 tu vas devoir renseigner le bon texte pour les étoiles et les vues partout où il est écrit 0 pour l'instant.
// Evite les répétitions en créant une ou plusieurs fonctions
// Que ce soit pour les étoiles ou les vues, on arrondit les milliers, 5324 doit devenir 5.3 k par exemple