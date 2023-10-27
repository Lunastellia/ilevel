document.addEventListener("DOMContentLoaded", function () {
    // Premier ensemble de menus déroulants
    const selectorElement = document.getElementById("image-selector");

    // Deuxième ensemble de menus déroulants
    const selectorElement2 = document.getElementById("image-selector2");

    // Valeurs Ilevel global, Valeur offensive et Valeur defensive
    const ilevelValueElement = document.getElementById("ilevel-value");
    const offensiveValueElement = document.getElementById("offensive-value");
    const defensiveValueElement = document.getElementById("defensive-value");

    // Fonction pour mettre à jour les valeurs
    function updateValues() {
        const selectedValue1 = parseInt(selectorElement.options[selectorElement.selectedIndex].getAttribute("data-value"), 10);
        const selectedValue2 = parseInt(selectorElement2.options[selectorElement2.selectedIndex].getAttribute("data-value"), 10);

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


