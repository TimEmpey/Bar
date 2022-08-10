window.onload = function {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefaultDefault();

    let drinkMenue = document.getElementById("drinks");
    drinkMenue.setAttribute("class", "hidden");
    let under21Message = document.getElementById("under-21");
    under21Message.setAttribute("class", "hidden");

    const age = parsInt (document.querySelector("input#age").value);

    if(age>=21) {
      drinkMenue.removeAttribute("class");
    }
  }
}