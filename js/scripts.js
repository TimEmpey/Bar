window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let drinkMenu = document.getElementById("drinks");
    drinkMenu.setAttribute("class", "hidden");
    let under21Message = document.getElementById("under-21");
    under21Message.setAttribute("class", "hidden");

    const age = parseInt(document.querySelector("input#age").value);

    if (age > 21) { 
      drinkMenu.removeAttribute("class");
    } else if (age === 21) { 
      window.alert("Have some fun, you’re just 21!");
      drinkMenu.removeAttribute("class");
    } else {
      under21Message.removeAttribute("class");
    }
  };
};