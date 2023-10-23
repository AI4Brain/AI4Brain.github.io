document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const resultsList = document.getElementById("resultsList");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        resultsList.innerHTML = "";

        if (searchTerm !== "") {
            searchPageContent(searchTerm);
        }
    });

    function searchPageContent(searchTerm) {
        const allTextElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, a, span");
        
        allTextElements.forEach(function (element) {
            const text = element.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                const li = document.createElement("li");
                li.textContent = element.textContent;
                resultsList.appendChild(li);
            }
        });

        if (resultsList.children.length === 0) {
            const noResultsLi = document.createElement("li");
            noResultsLi.textContent = "未找到匹配的结果";
            resultsList.appendChild(noResultsLi);
        }
    }
});
