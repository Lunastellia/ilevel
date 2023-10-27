document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById("image");
    const selectorElement = document.getElementById("image-selector");
    const selectedValueElement = document.getElementById("selected-value");

    selectorElement.addEventListener("change", function () {
        const selectedValue = selectorElement.value;
        selectedValueElement.textContent = `Selected Value: ${selectedValue}`;

        switch (selectedValue) {
            case "0":
                imageElement.src = "pic/head0.png";
                break;
            case "1":
                imageElement.src = "pic/head1.png";
                break;
            case "2":
                imageElement.src = "pic/head2.png";
                break;
            case "3":
                imageElement.src = "pic/head3.png";
                break;
        }
    });
});

