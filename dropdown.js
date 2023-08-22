document.addEventListener("DOMContentLoaded", function() {
    const terms = document.querySelectorAll(".term");

    terms.forEach(function(term) {
        term.addEventListener("click", function() {
            const definition = term.querySelector(".definition");
            if (definition.style.display === "none") {
                definition.style.display = "block";
            } else {
                definition.style.display = "none";
            }
        });
    });
});
