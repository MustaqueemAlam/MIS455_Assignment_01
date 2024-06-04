// for the small nav bar in the index page 
document.addEventListener("DOMContentLoaded", function() {
    var detailsButton = document.getElementById("details-button");
    var nav = document.querySelector(".small-navbar");

    detailsButton.addEventListener("click", function() {
        nav.classList.toggle("show");
    });
});
