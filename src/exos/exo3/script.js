// On veut afficher un message à l'utilisateur différent selon ce qu'il saisi dans le formulaire

// On a ici une série d'instructions qui permet l'ajout d'un message dans la page
const message = document.createElement('p');
message.textContent = 'Veuillez remplir le champ';
message.className = 'message message--error';
document.querySelector('.message')?.remove();
document.getElementById('form').prepend(message);

// On a ensuite codé de quoi récupérer la valeur saisie quand on valide le formulaire
document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const value = document.getElementById('textarea').value;

  console.log(value);

  // Etape 1
  // En t'aidant des instructions pour afficher le message tâche de traduire ce qu'on demande :
  // Si le champ est vide
  // On affiche le message "Le champ ne peut pas être vide"
  // Sinon s'il fait moins de 5 caractères
  // On affiche le message "5 caractères minimum"
  // Sinon s'il faut plus de 140 caractères
  // On affiche le message "Pas plus de 140 caractères"
  // Sinon on affiche le message "C'est parfait"

  // Etape 2
  // Tous les messages sont rouges. On voudrait que le message "C'est parfait" soit vert. Vois si tu trouves une idée, tu as peut-être remarqué le fichier scss présent pour cet exercice, ça peut t'aider.
});
