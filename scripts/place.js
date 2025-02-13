document.addEventListener("DOMContentLoaded", () => {
    // Get the current year and display it in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").innerHTML = `&copy; ${currentYear} Victor Okindo, Kenya`;

    // Get the last modified date of the document and display it
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

    // Define static temperature and wind speed values
    const temperature = 19; // °C
    const windSpeed = 0; // km/h

    // Function to calculate wind chill factor
    function calculateWindChill(temp, wind) {
        if (temp <= 10 && wind > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2);
        }
        return "N/A";
    }

    // Calculate and display wind chill
    document.getElementById("windChill").textContent = `Wind Chill: ${calculateWindChill(temperature, windSpeed)}°C`;
});
