// Get the review count from localStorage
let reviewCount = localStorage.getItem('reviewCount') || 0;

// Update the review count on the page
document.getElementById('reviewCount').textContent = reviewCount;

// Update Footer with Current Year and Last Modified Date
document.getElementById("currentyear").innerHTML = `&copy; ${new Date().getFullYear()} Victor Okoth Okindo, Kenya`;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;
