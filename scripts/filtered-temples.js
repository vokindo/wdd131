// Array of Temple Objects
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // 4 Additional Temple Objects (sourced from the provided link)
    {
      templeName: "Accra Ghana Temple",
      location: "Accra, Ghana",
      dedicated: "2004, November, 17",
      area: 8000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-7149-thumb.jpg"
    },
    {
      templeName: "Apia Samoa Temple",
      location: "Apia, Samoa",
      dedicated: "1983, November, 30",
      area: 5000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg"
    },
    {
      templeName: "Birmingham England Temple",
      location: "Birmingham, England",
      dedicated: "1998, September, 29",
      area: 40000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/birmingham-england-temple/birmingham-england-temple-45435-main.jpg"
    },
    {
      templeName: "Brasilia Brazil Temple",
      location: "Brasilia, Brazil",
      dedicated: "2000, March, 15",
      area: 85000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
    },
    // 3 Additional Temple Objects
    {
      templeName: "Rome Italy Temple",
      location: "Rome, Italy",
      dedicated: "1990, June, 27",
      area: 70000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
    {
      templeName: "Sydney Australia Temple",
      location: "Sydney, Australia",
      dedicated: "1984, October, 22",
      area: 65000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sydney-australia-temple/sydney-australia-temple-43342-main.jpg"
    },
    {
      templeName: "Stockholm Sweden Temple",
      location: "Stockholm, Sweden",
      dedicated: "1985, April, 12",
      area: 30000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/stockholm-sweden-temple/stockholm-sweden-temple-30267-main.jpg"
    }
  ];
  
  // Function to create and display temple cards
  function displayTemples(templesArray) {
    const container = document.getElementById("templeContainer");
    container.innerHTML = ""; // Clear previous content
  
    templesArray.forEach(temple => {
      // Create a card element
      const card = document.createElement("div");
      card.classList.add("temple-card");
  
      // Temple image with native lazy loading
      const img = document.createElement("img");
      img.src = temple.imageUrl;
      img.alt = temple.templeName;
      img.loading = "lazy";
  
      // Temple name
      const name = document.createElement("h2");
      name.textContent = temple.templeName;
  
      // Temple location
      const location = document.createElement("p");
      location.textContent = `Location: ${temple.location}`;
  
      // Dedicated date
      const dedicated = document.createElement("p");
      dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
      // Temple area
      const area = document.createElement("p");
      area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
  
      // Append all elements to the card
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedicated);
      card.appendChild(area);
  
      // Append the card to the container
      container.appendChild(card);
    });
  }
  
  // Helper function to extract the year from the dedicated date string
  function getYear(dedicatedStr) {
    // Expected format: "YYYY, Month, DD"
    const parts = dedicatedStr.split(",");
    return parseInt(parts[0]);
  }
  
  // Filter functions
  function filterOld() {
    // Temples built before 1900
    const filtered = temples.filter(temple => getYear(temple.dedicated) < 1900);
    displayTemples(filtered);
  }
  
  function filterNew() {
    // Temples built after 2000
    const filtered = temples.filter(temple => getYear(temple.dedicated) > 2000);
    displayTemples(filtered);
  }
  
  function filterLarge() {
    // Temples larger than 90,000 square feet
    const filtered = temples.filter(temple => temple.area > 90000);
    displayTemples(filtered);
  }
  
  function filterSmall() {
    // Temples smaller than 10,000 square feet
    const filtered = temples.filter(temple => temple.area < 10000);
    displayTemples(filtered);
  }
  
  // Set up event listeners for navigation links
  document.getElementById("homeFilter").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(temples);
  });
  document.getElementById("oldFilter").addEventListener("click", (e) => {
    e.preventDefault();
    filterOld();
  });
  document.getElementById("newFilter").addEventListener("click", (e) => {
    e.preventDefault();
    filterNew();
  });
  document.getElementById("largeFilter").addEventListener("click", (e) => {
    e.preventDefault();
    filterLarge();
  });
  document.getElementById("smallFilter").addEventListener("click", (e) => {
    e.preventDefault();
    filterSmall();
  });
  
  // Toggle responsive navigation menu
  function toggleNav() {
    const nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  }
  
  // Update the footer with the current year and last modified date
  document.getElementById("currentyear").textContent = `©${new Date().getFullYear()} Victor Okindo, Kenya`;
  document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
  
  // On page load, display all temples
  document.addEventListener("DOMContentLoaded", () => {
    displayTemples(temples);
  });
  