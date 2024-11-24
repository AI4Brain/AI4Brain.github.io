
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchSubmit = document.getElementById("search-submit");
    const publicationItems = document.querySelectorAll(".publication-item");
    const noResults = document.getElementById("no-results");

    // Real-time input listener
    searchInput.addEventListener("input", () => {
        filterPublications(searchInput.value);
    });

    // Click search button listener
    searchSubmit.addEventListener("click", () => {
        filterPublications(searchInput.value);
    });

    function filterPublications(query) {
        query = query.toLowerCase();
        let hasResults = false;

        publicationItems.forEach(item => {
            const title = item.querySelector("h3").innerText.toLowerCase();
            const authors = item.querySelector(".card-content p").innerText.toLowerCase();

            if (title.includes(query) || authors.includes(query)) {
                item.style.display = "flex";
                hasResults = true;
            } else {
                item.style.display = "none";
            }
        });

        noResults.style.display = hasResults ? "none" : "block";
    }
});
