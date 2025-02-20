// Define products for the dropdown
const products = [
    { id: "chatgpt", name: "ChatGPT" },
    { id: "bard", name: "Google Bard" },
    { id: "midjourney", name: "Midjourney AI" },
    { id: "dalle", name: "DALL·E 3" },
    { id: "ethereum", name: "Ethereum Blockchain" },
    { id: "tesla", name: "Tesla FSD" }
];

// Populate product dropdown dynamically
const productSelect = document.getElementById("productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Form validation function
document.getElementById("reviewForm").addEventListener("submit", function(event) {
    const rating = document.querySelector('input[name="rating"]:checked');
    const date = document.getElementById("installation-date").value;

    if (!rating) {
        alert("Please select a rating.");
        event.preventDefault();
    } else if (!date) {
        alert("Please enter the date of installation.");
        event.preventDefault();
    } else {
        saveReview();
    }
});

// Store review count in localStorage
function saveReview() {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
}
