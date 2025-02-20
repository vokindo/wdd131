const products = [
    { id: "fc-1888", name: "DeepSeek", averagerating: 4.5 },
    { id: "fc-2050", name: "Tesla FSD", averagerating: 4.7 },
    { id: "fs-1987", name: "Google Bard", averagerating: 3.5 },
    { id: "ac-2000", name: "MidEtherium Blockchain", averagerating: 3.9 },
    { id: "jj-1969", name: "Chat GPT", averagerating: 5.0 }
];

const productSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Track Reviews
if (!localStorage.getItem('reviewCount')) {
    localStorage.setItem('reviewCount', 0);
}

document.getElementById('reviewForm').addEventListener('submit', function() {
    let count = parseInt(localStorage.getItem('reviewCount')) + 1;
    localStorage.setItem('reviewCount', count);
});
