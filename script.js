document.addEventListener("DOMContentLoaded", function () {
   
    // Premier ensemble de menus déroulants
    const imageElement = document.getElementById("image");
    const selectorElement = document.getElementById("image-selector");

    // Deuxième ensemble de menus déroulants
    const imageElement2 = document.getElementById("image2");
    const selectorElement2 = document.getElementById("image-selector2");

    //Arme
    const imageElement3 = document.getElementById("image3");
    const selectorElement3 = document.getElementById("image-selector3");
    //Aile
    const imageElement4 = document.getElementById("image4");
    const selectorElement4 = document.getElementById("image-selector4");
    //Collier
    const imageElement5 = document.getElementById("image5");
    const selectorElement5 = document.getElementById("image-selector5");
    //Bouble1
    const imageElement6 = document.getElementById("image6");
    const selectorElement6 = document.getElementById("image-selector6");
    //Boucle2
    const imageElement7 = document.getElementById("image7");
    const selectorElement7 = document.getElementById("image-selector7");
    //Anneau1
    const imageElement8 = document.getElementById("image8");
    const selectorElement8 = document.getElementById("image-selector8");
    //Annuea2
    const imageElement9 = document.getElementById("image9");
    const selectorElement9 = document.getElementById("image-selector9");
    //Ceinture
    const imageElement10 = document.getElementById("image10");
    const selectorElement10 = document.getElementById("image-selector10");

    //Bouclier
    const imageElement11 = document.getElementById("image11");
    const selectorElement11 = document.getElementById("image-selector11");
    //Casque
    const imageElement12 = document.getElementById("image12");
    const selectorElement12 = document.getElementById("image-selector12");
    //Torse
    const imageElement13 = document.getElementById("image13");
    const selectorElement13 = document.getElementById("image-selector13");
    //Jambes
    const imageElement14 = document.getElementById("image14");
    const selectorElement14 = document.getElementById("image-selector14");
    //Bottes
    const imageElement15 = document.getElementById("image15");
    const selectorElement15 = document.getElementById("image-selector15");
    //Spallières
    const imageElement16 = document.getElementById("image16");
    const selectorElement16 = document.getElementById("image-selector16");
    //Gants
    const imageElement17 = document.getElementById("image17");
    const selectorElement17 = document.getElementById("image-selector17");


    

    // Valeurs Ilevel global, Valeur offensive et Valeur defensive
    const ilevelValueElement = document.getElementById("ilevel-value");
    const offensiveValueElement = document.getElementById("offensive-value");
    const defensiveValueElement = document.getElementById("defensive-value");

    // Fonction pour mettre à jour les valeurs
    function updateValues() {
    const selectedValue1 = parseInt(selectorElement.options[selectorElement.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc1 = selectorElement.options[selectorElement.selectedIndex].getAttribute("data-image");

    const selectedValue2 = parseInt(selectorElement2.options[selectorElement2.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc2 = selectorElement2.options[selectorElement2.selectedIndex].getAttribute("data-image");

    const selectedValue3 = parseInt(selectorElement3.options[selectorElement3.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc3 = selectorElement3.options[selectorElement3.selectedIndex].getAttribute("data-image");
        
    const selectedValue4 = parseInt(selectorElement4.options[selectorElement4.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc4 = selectorElement4.options[selectorElement4.selectedIndex].getAttribute("data-image");

    const selectedValue5 = parseInt(selectorElement5.options[selectorElement5.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc5 = selectorElement5.options[selectorElement5.selectedIndex].getAttribute("data-image");

    const selectedValue6 = parseInt(selectorElement6.options[selectorElement6.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc6 = selectorElement6.options[selectorElement6.selectedIndex].getAttribute("data-image");

    const selectedValue7 = parseInt(selectorElement7.options[selectorElement7.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc7 = selectorElement7.options[selectorElement7.selectedIndex].getAttribute("data-image");

        const selectedValue8 = parseInt(selectorElement8.options[selectorElement8.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc8 = selectorElement8.options[selectorElement8.selectedIndex].getAttribute("data-image");

    const selectedValue9 = parseInt(selectorElement9.options[selectorElement9.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc9 = selectorElement9.options[selectorElement9.selectedIndex].getAttribute("data-image");

    const selectedValue10 = parseInt(selectorElement10.options[selectorElement10.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc10 = selectorElement10.options[selectorElement10.selectedIndex].getAttribute("data-image");

    const selectedValue11 = parseInt(selectorElement11.options[selectorElement11.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc11 = selectorElement11.options[selectorElement11.selectedIndex].getAttribute("data-image");

    const selectedValue12 = parseInt(selectorElement12.options[selectorElement12.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc12 = selectorElement12.options[selectorElement12.selectedIndex].getAttribute("data-image");

    const selectedValue13 = parseInt(selectorElement13.options[selectorElement13.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc13 = selectorElement13.options[selectorElement13.selectedIndex].getAttribute("data-image");

    const selectedValue14 = parseInt(selectorElement14.options[selectorElement14.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc14 = selectorElement14.options[selectorElement14.selectedIndex].getAttribute("data-image");

    const selectedValue15 = parseInt(selectorElement15.options[selectorElement15.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc15 = selectorElement15.options[selectorElement15.selectedIndex].getAttribute("data-image");

    const selectedValue16 = parseInt(selectorElement16.options[selectorElement16.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc16 = selectorElement16.options[selectorElement16.selectedIndex].getAttribute("data-image");

    const selectedValue17 = parseInt(selectorElement17.options[selectorElement17.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc17 = selectorElement17.options[selectorElement17.selectedIndex].getAttribute("data-image");


        ilevelValueElement.textContent = selectedValue3 + selectedValue4 + selectedValue5 + selectedValue6 + selectedValue7 + selectedValue8 + selectedValue9 + selectedValue10 + selectedValue11 + selectedValue12 + selectedValue13 + selectedValue14 + selectedValue15 + selectedValue16 + selectedValue17;
        offensiveValueElement.textContent = selectedValue3 + selectedValue4 + selectedValue5 + selectedValue6 + selectedValue7 + selectedValue8 + selectedValue9 + selectedValue10;
        defensiveValueElement.textContent = selectedValue11 + selectedValue12 + selectedValue13 + selectedValue14 + selectedValue15 + selectedValue16 + selectedValue17;

        imageElement.src = imageSrc1;
        imageElement2.src = imageSrc2;
        imageElement3.src = imageSrc3;
        imageElement4.src = imageSrc4;
        imageElement5.src = imageSrc5;
        imageElement6.src = imageSrc6;
        imageElement7.src = imageSrc7;
        imageElement8.src = imageSrc8;
        imageElement9.src = imageSrc9;
        imageElement10.src = imageSrc10;
        imageElement11.src = imageSrc11;
        imageElement12.src = imageSrc12;
        imageElement13.src = imageSrc13;
        imageElement14.src = imageSrc14;
        imageElement15.src = imageSrc15;
        imageElement16.src = imageSrc16;
        imageElement17.src = imageSrc17;

        
    }

    // Gestionnaires d'événements pour les menus déroulants
    selectorElement.addEventListener("change", updateValues);
    selectorElement2.addEventListener("change", updateValues);
    selectorElement3.addEventListener("change", updateValues);
    selectorElement4.addEventListener("change", updateValues);
    selectorElement5.addEventListener("change", updateValues);
    selectorElement6.addEventListener("change", updateValues);
    selectorElement7.addEventListener("change", updateValues);
    selectorElement8.addEventListener("change", updateValues);
    selectorElement9.addEventListener("change", updateValues);
    selectorElement10.addEventListener("change", updateValues);
    selectorElement11.addEventListener("change", updateValues);
    selectorElement12.addEventListener("change", updateValues);
    selectorElement13.addEventListener("change", updateValues);
    selectorElement14.addEventListener("change", updateValues);
    selectorElement15.addEventListener("change", updateValues);
    selectorElement16.addEventListener("change", updateValues);
    selectorElement17.addEventListener("change", updateValues);


    // Mise à jour des valeurs au chargement de la page
    updateValues();
});


