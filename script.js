// Variable pour garder en mémoire la catégorie actuellement sélectionnée
let currentCategory = "all";

function filterSelection(category) {
  currentCategory = category; // Met à jour la catégorie actuelle
  // Appelle la fonction de recherche pour appliquer le filtre de catégorie et la recherche en même temps
  searchPhotos();
}

function searchPhotos() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const photos = document.getElementsByClassName("photo");

  for (let i = 0; i < photos.length; i++) {
    const img = photos[i].getElementsByTagName("img")[0];
    if (img) {
      const altText = img.alt.toLowerCase();
      const srcText = img.src.toLowerCase();
      const photoClasses = photos[i].className.toLowerCase();

      // Condition 1: La photo appartient-elle à la catégorie sélectionnée ?
      const categoryMatch = currentCategory === "all" || photoClasses.includes(currentCategory);

      // Condition 2: Le texte de recherche correspond-il à l'attribut alt ou au nom du fichier ?
      const searchMatch = altText.includes(filter) || srcText.includes(filter);

      // La photo est affichée seulement si les deux conditions sont remplies
      if (categoryMatch && searchMatch) {
        photos[i].style.display = "block";
      } else {
        photos[i].style.display = "none";
      }
    }
  }
}

// Par défaut, afficher toutes les photos au chargement de la page
filterSelection('all');

function openModal(imgElement) {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("img01");
  let captionText = document.getElementById("caption");

  modal.style.display = "flex"; // <-- Assurez-vous que c'est bien 'flex' ici
  modalImg.src = imgElement.src;
  captionText.innerHTML = imgElement.alt;
}

// Fonction pour fermer le modal
function closeModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Événement pour fermer le modal en cliquant en dehors de l'image
window.onclick = function (event) {
  let modal = document.getElementById("myModal");
  if (event.target == modal) {
    closeModal();
  }
};
// Événement pour fermer le modal en appuyant sur la touche "Échap"
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
