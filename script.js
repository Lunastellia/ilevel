document.addEventListener("DOMContentLoaded", function () {

  
    // Premier ensemble de menus déroulants
    const imageElement = document.getElementById("image");
    const selectorElement = document.getElementById("image-selector");
    const selectedValueElement = document.getElementById("selected-value");

    selectorElement.addEventListener("change", function () {
        const selectedValue = selectorElement.value;
        selectedValueElement.textContent = `${selectedValue}`;

        switch (selectedValue) {
            case "0":
                imageElement.src = "https://github.com/Lunastellia/ilevel/blob/main/pic/head0.png";
                break;
            case "1":
                imageElement.src = "https://github.com/Lunastellia/ilevel/blob/main/pic/head1.png";
                break;
            case "2":
                imageElement.src = "https://github.com/Lunastellia/ilevel/blob/main/pic/head2.png";
                break;
            case "3":
                imageElement.src = "https://github.com/Lunastellia/ilevel/blob/main/pic/head3.png";
                break;
        }
    });

    // Deuxième ensemble de menus déroulants
    const imageElement2 = document.getElementById("image2");
    const selectorElement2 = document.getElementById("image-selector2");
    const selectedValueElement2 = document.getElementById("selected-value2");

    selectorElement2.addEventListener("change", function () {
        const selectedValue = selectorElement2.value;
        selectedValueElement2.textContent = `${selectedValue}`;

        switch (selectedValue) {
            case "5":
                imageElement2.src = "https://github.com/Lunastellia/ilevel/blob/main/pic/head0.png";
                break;
            case "10":
                imageElement2.src = "https://github.com/Lunastellia/ilevel/blob/main/pic/head2.png";
                break;
        }
    });

  
});

