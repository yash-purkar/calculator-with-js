let string = "";
let input = document.querySelector("input");

let buttons = document.querySelectorAll(".button");
// console.log(buttons);

Array.from(buttons).forEach(function (currBtn) {
  currBtn.addEventListener("click", function (e) {
    try {
      if (e.target.innerHTML == "=") {
        string = eval(string);
        input.value = string;
      }
      else if (e.target.innerHTML == "C") {
        string = "";
        input.value = string;
      }
      else {
        // console.log(e.target);
        string = string + e.target.innerHTML;
        input.value = string;
      }
    }
    catch (err) {
      input.value = "Unvalid values🤪"
    }

  })
})