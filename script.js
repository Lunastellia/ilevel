document.addEventListener("DOMContentLoaded", function () {
    const countElement = document.getElementById("count");
    const addButton = document.getElementById("add");
    const removeButton = document.getElementById("remove");
    
    let count = 0;
    
    addButton.addEventListener("click", function () {
        count++;
        countElement.innerText = count;
    });
    
    removeButton.addEventListener("click", function () {
        count--;
        countElement.innerText = count;
    });
});
