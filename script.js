function filterSelection(category) {
  let photos = document.getElementsByClassName("photo");
  if (category == 'all') category = "";
  for (let i = 0; i < photos.length; i++) {
    photos[i].style.display = (photos[i].className.indexOf(category) > -1) ? "block" : "none";
  }
}

filterSelection('all'); // Par défaut, afficher toutes les photos

// Fonction pour ouvrir le modal et afficher l'image agrandie
function openModal(imgElement) {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("img01");
  let downloadButton = document.getElementById("downloadButton");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
  downloadButton.href = imgElement.src; // Mettre à jour le lien de téléchargement
}

// Fonction pour fermer le modal
function closeModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}