let text = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modification:" + text;

document.getElementById("currentyear").innerHTML = "&copy2024 Victor Okindo, Kenya"

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }