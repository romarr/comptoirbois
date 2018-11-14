var filterClick = function (e) {
  var color = e.id;
  // récupération des éléments qui contiennent la couleur de l'input
  var selectedEls = document.querySelectorAll('.' + color);
  // si le input est décoché
  if (!e.checked) {
      // on parcourt tous les éléments contenant la couleur de l'input
      selectedEls.forEach(function (selectedEl) {
          // si l'élément a déjà était sélectionné 
          // on vire sa classe d'élement sélectionné
          if (selectedEl.classList.contains('selected')) {
              selectedEl.classList.remove('selected');
          }
      })
      // Recherche des éléments encore sélectionnés (pour une autre couleur)
      activeEls = document.querySelectorAll('.selected');
      // si aucun éléments sélectionné, on les affiche tous (classe 'tous sélectionné')
      if (activeEls.length === 0) {
          document.querySelectorAll('.filter-item').forEach(function(element) {
              element.classList.add('all-selected');
          })
      }
  }
  // le input est coché
  else {
      // on sélectionne tous les élements avec la couleur de l'input
      document.querySelectorAll('.all-selected').forEach(function(element) {
              element.classList.remove('all-selected');
          })
      // on enlève la classe "tous sélectionné"
      selectedEls.forEach(function (selectedEl) {
          if (!selectedEl.classList.contains('selected')) {
              selectedEl.classList.add('selected');
          }
      })

  }            
}