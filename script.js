document.addEventListener("DOMContentLoaded", function () {
   
    // Premier ensemble de menus déroulants
    const imageElement = document.getElementById("image");
    const selectorElement = document.getElementById("image-selector");
    const selectedValueElement = document.getElementById("selected-value");

    // Deuxième ensemble de menus déroulants
    const imageElement2 = document.getElementById("image2");
    const selectorElement2 = document.getElementById("image-selector2");
    const selectedValueElement2 = document.getElementById("selected-value2");

    // Valeurs Ilevel global, Valeur offensive et Valeur defensive
    const ilevelValueElement = document.getElementById("ilevel-value");
    const offensiveValueElement = document.getElementById("offensive-value");
    const defensiveValueElement = document.getElementById("defensive-value");

    // Fonction pour mettre à jour les valeurs
    function updateValues() {
        const selectedValue1 = parseInt(selectorElement.value, 10);
        const selectedValue2 = parseInt(selectorElement2.value, 10);

        selectedValueElement.textContent = `Selected Value: ${selectedValue1}`;
        selectedValueElement2.textContent = `Selected Value: ${selectedValue2}`;

        ilevelValueElement.textContent = selectedValue1 + selectedValue2;
        offensiveValueElement.textContent = selectedValue1;
        defensiveValueElement.textContent = selectedValue2;
    }

    // Gestionnaires d'événements pour les menus déroulants
    selectorElement.addEventListener("change", updateValues);
    selectorElement2.addEventListener("change", updateValues);

    // Mise à jour des valeurs au chargement de la page
    updateValues();
});



