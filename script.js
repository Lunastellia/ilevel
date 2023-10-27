document.addEventListener("DOMContentLoaded", function () {
   
    // class
    const imageElement1 = document.getElementById("image1");
    const selectorElement1 = document.getElementById("image-selector1");
    
   //Armes
    // Deuxième ensemble de menus déroulants
    const imageElement2 = document.getElementById("image2");
    const selectorElement2 = document.getElementById("image-selector2");
   
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

   // Enchant
    const imageElement18 = document.getElementById("image18");
    const selectorElement18 = document.getElementById("image-selector18");
   
    const imageElement19 = document.getElementById("image19");
    const selectorElement19 = document.getElementById("image-selector19");
   
    const imageElement20 = document.getElementById("image20");
    const selectorElement20 = document.getElementById("image-selector20");
   
    const imageElement21 = document.getElementById("image21");
    const selectorElement21 = document.getElementById("image-selector21");
   
    const imageElement22 = document.getElementById("image22");
    const selectorElement22 = document.getElementById("image-selector22");
   
    const imageElement23 = document.getElementById("image23");
    const selectorElement23 = document.getElementById("image-selector23");
   
    const imageElement24 = document.getElementById("image24");
    const selectorElement24 = document.getElementById("image-selector24");

   //STATS

   const imageElement25 = document.getElementById("image25");
   const selectorElement25 = document.getElementById("image-selector25");

   const imageElement26 = document.getElementById("image26");
   const selectorElement26 = document.getElementById("image-selector26");

   const imageElement27 = document.getElementById("image27");
   const selectorElement27 = document.getElementById("image-selector27");

   const imageElement28 = document.getElementById("image28");
   const selectorElement28 = document.getElementById("image-selector28");

   const imageElement29 = document.getElementById("image29");
   const selectorElement29 = document.getElementById("image-selector29");

   const imageElement30 = document.getElementById("image30");
   const selectorElement30 = document.getElementById("image-selector30");

   const imageElement31 = document.getElementById("image31");
   const selectorElement31 = document.getElementById("image-selector31");

   const imageElement32 = document.getElementById("image32");
   const selectorElement32 = document.getElementById("image-selector32");

   const imageElement33 = document.getElementById("image33");
   const selectorElement33 = document.getElementById("image-selector33");

   const imageElement34 = document.getElementById("image34");
   const selectorElement34 = document.getElementById("image-selector34");
   
   const imageElement35 = document.getElementById("image35");
   const selectorElement35 = document.getElementById("image-selector35");

      
   

    // Valeurs Ilevel global, Valeur offensive et Valeur defensive
    const ilevelValueElement = document.getElementById("ilevel-value");
    const offensiveValueElement = document.getElementById("offensive-value");
    const defensiveValueElement = document.getElementById("defensive-value");



   
    // Fonction pour mettre à jour les valeurs
    function updateValues() {
    
    const selectedValue1 = parseInt(selectorElement1.options[selectorElement1.selectedIndex].getAttribute("data-value"), 10);
       const MAG = parseInt(selectorElement1.options[selectorElement1.selectedIndex].getAttribute("data-mag"), 10);
       const PMAG = parseInt(selectorElement1.options[selectorElement1.selectedIndex].getAttribute("data-pmag"), 10);
       const CMAG = parseInt(selectorElement1.options[selectorElement1.selectedIndex].getAttribute("data-cmag"), 10);
       const PHY = parseInt(selectorElement1.options[selectorElement1.selectedIndex].getAttribute("data-phy"), 10);
       const PRE = parseInt(selectorElement1.options[selectorElement1.selectedIndex].getAttribute("data-pre"), 10);
       const CRIT = parseInt(selectorElement1.options[selectorElement1.selectedIndex].getAttribute("data-crit"), 10);
       const BLOC = parseInt(selectorElement1.options[selectorElement1.selectedIndex].getAttribute("data-bloc"), 10);
       const PARA = parseInt(selectorElement1.options[selectorElement1.selectedIndex].getAttribute("data-para"), 10);
       const RES = parseInt(selectorElement1.options[selectorElement1.selectedIndex].getAttribute("data-res"), 10);
       const ESQ = parseInt(selectorElement1.options[selectorElement1.selectedIndex].getAttribute("data-esq"), 10);
       const VIE = parseInt(selectorElement1.options[selectorElement1.selectedIndex].getAttribute("data-vie"), 10);
       
    const imageSrc1 = selectorElement1.options[selectorElement1.selectedIndex].getAttribute("data-image");

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

    const selectedValue18 = parseInt(selectorElement18.options[selectorElement18.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc18 = selectorElement18.options[selectorElement18.selectedIndex].getAttribute("data-image");

    const selectedValue19 = parseInt(selectorElement19.options[selectorElement19.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc19 = selectorElement19.options[selectorElement19.selectedIndex].getAttribute("data-image");

    const selectedValue20 = parseInt(selectorElement20.options[selectorElement20.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc20 = selectorElement20.options[selectorElement20.selectedIndex].getAttribute("data-image");
    
    const selectedValue21 = parseInt(selectorElement21.options[selectorElement21.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc21 = selectorElement21.options[selectorElement21.selectedIndex].getAttribute("data-image");

    const selectedValue22 = parseInt(selectorElement22.options[selectorElement22.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc22 = selectorElement22.options[selectorElement22.selectedIndex].getAttribute("data-image");

    const selectedValue23 = parseInt(selectorElement23.options[selectorElement23.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc23 = selectorElement23.options[selectorElement23.selectedIndex].getAttribute("data-image");

    const selectedValue24 = parseInt(selectorElement24.options[selectorElement24.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc24 = selectorElement24.options[selectorElement24.selectedIndex].getAttribute("data-image");

    const selectedValue25 = parseInt(selectorElement25.options[selectorElement25.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc25 = selectorElement25.options[selectorElement25.selectedIndex].getAttribute("data-image");

    const selectedValue26 = parseInt(selectorElement26.options[selectorElement26.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc26 = selectorElement26.options[selectorElement26.selectedIndex].getAttribute("data-image");

    const selectedValue27 = parseInt(selectorElement27.options[selectorElement27.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc27 = selectorElement27.options[selectorElement27.selectedIndex].getAttribute("data-image");

    const selectedValue28 = parseInt(selectorElement28.options[selectorElement28.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc28 = selectorElement28.options[selectorElement28.selectedIndex].getAttribute("data-image");

    const selectedValue29 = parseInt(selectorElement29.options[selectorElement29.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc29 = selectorElement29.options[selectorElement29.selectedIndex].getAttribute("data-image");

    const selectedValue30 = parseInt(selectorElement30.options[selectorElement30.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc30 = selectorElement30.options[selectorElement30.selectedIndex].getAttribute("data-image");

    const selectedValue31 = parseInt(selectorElement31.options[selectorElement31.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc31 = selectorElement31.options[selectorElement31.selectedIndex].getAttribute("data-image");

    const selectedValue32 = parseInt(selectorElement32.options[selectorElement32.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc32 = selectorElement32.options[selectorElement32.selectedIndex].getAttribute("data-image");

    const selectedValue33 = parseInt(selectorElement33.options[selectorElement33.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc33 = selectorElement33.options[selectorElement33.selectedIndex].getAttribute("data-image");

    const selectedValue34 = parseInt(selectorElement34.options[selectorElement34.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc34 = selectorElement34.options[selectorElement34.selectedIndex].getAttribute("data-image");
  
    const selectedValue35 = parseInt(selectorElement35.options[selectorElement35.selectedIndex].getAttribute("data-value"), 10);
    const imageSrc35 = selectorElement35.options[selectorElement35.selectedIndex].getAttribute("data-image");
       


       
        ilevelValueElement.textContent = (selectedValue18 * selectedValue1) + selectedValue2 + selectedValue3 + selectedValue4 + selectedValue5 + selectedValue6 + selectedValue7 + selectedValue8 + selectedValue9 + selectedValue10 + selectedValue11 + selectedValue12 + selectedValue13 + selectedValue14 + selectedValue15 + selectedValue16 + selectedValue17;
        offensiveValueElement.textContent = (selectedValue18 * selectedValue1) + selectedValue2 + selectedValue3 + selectedValue4 + selectedValue5 + selectedValue6 + selectedValue7 + selectedValue8 + selectedValue9 + selectedValue10;
        defensiveValueElement.textContent = selectedValue11 + selectedValue12 + selectedValue13 + selectedValue14 + selectedValue15 + selectedValue16 + selectedValue17;

        imageElement1.src = imageSrc1;
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
        imageElement18.src = imageSrc18;
        imageElement19.src = imageSrc19;
        imageElement20.src = imageSrc20;
        imageElement21.src = imageSrc21;
        imageElement22.src = imageSrc22;
        imageElement23.src = imageSrc23;
        imageElement24.src = imageSrc24;
        imageElement25.src = imageSrc25;
        imageElement26.src = imageSrc26;
        imageElement27.src = imageSrc27;
        imageElement28.src = imageSrc28;
        imageElement29.src = imageSrc29;
        imageElement30.src = imageSrc30;
        imageElement31.src = imageSrc31;
        imageElement32.src = imageSrc32;
        imageElement33.src = imageSrc33;
        imageElement34.src = imageSrc34;
        imageElement35.src = imageSrc35;

        
    }

    // Gestionnaires d'événements pour les menus déroulants
    selectorElement1.addEventListener("change", updateValues);
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
    selectorElement18.addEventListener("change", updateValues);
    selectorElement19.addEventListener("change", updateValues);
    selectorElement20.addEventListener("change", updateValues);
    selectorElement21.addEventListener("change", updateValues);
    selectorElement22.addEventListener("change", updateValues);
    selectorElement23.addEventListener("change", updateValues);
    selectorElement24.addEventListener("change", updateValues);
    selectorElement25.addEventListener("change", updateValues);
    selectorElement26.addEventListener("change", updateValues);
    selectorElement27.addEventListener("change", updateValues);
    selectorElement28.addEventListener("change", updateValues);
    selectorElement29.addEventListener("change", updateValues);
    selectorElement30.addEventListener("change", updateValues);
    selectorElement31.addEventListener("change", updateValues);
    selectorElement32.addEventListener("change", updateValues);
    selectorElement33.addEventListener("change", updateValues);
    selectorElement34.addEventListener("change", updateValues);
    selectorElement35.addEventListener("change", updateValues);



    // Mise à jour des valeurs au chargement de la page
    updateValues();
});


