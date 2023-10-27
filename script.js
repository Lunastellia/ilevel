document.addEventListener("DOMContentLoaded", function () {
    // Premier ensemble de menus déroulants
    const imageElement = document.getElementById("image");
    const selectorElement = document.getElementById("image-selector");

    // Deuxième ensemble de menus déroulants
    const imageElement2 = document.getElementById("image2");
    const selectorElement2 = document.getElementById("image-selector2");

    // Valeurs Ilevel global, Valeur offensive et Valeur defensive
    const ilevelValueElement = document.getElementById("ilevel-value");
    const offensiveValueElement = document.getElementById("offensive-value");
    const defensiveValueElement = document.getElementById("defensive-value");

    // Fonction pour mettre à jour les valeurs
    function updateValues() {
        const selectedValue1 = parseInt(selectorElement.value, 10);
        const selectedValue2 = parseInt(selectorElement2.value, 10);

        const additionalValue1 = parseInt(selectorElement.options[selectorElement.selectedIndex].getAttribute("data-value"), 10);
        const additionalValue2 = parseInt(selectorElement2.options[selectorElement2.selectedIndex].getAttribute("data-value"), 10);

        ilevelValueElement.textContent = additionalValue2 + additionalValue1;
        offensiveValueElement.textContent = selectedValue1 + additionalValue1;
        defensiveValueElement.textContent = selectedValue2 + additionalValue2;
    }

    // Gestionnaires d'événements pour les menus déroulants
    selectorElement.addEventListener("change", updateValues);
    selectorElement2.addEventListener("change", updateValues);

    // Mise à jour des valeurs au chargement de la page
    updateValues();
});


