var languages = [
  "ActionScript",
  "AppleScript",
  "ASP",
  "JavaScript",
  "Lisp",
  "Perl",
  "PHP",
  "Python",
];

window.onload = function() {
    var inputElement = document.getElementById("Input");
    inputElement.addEventListener("input", function() {
      if (inputElement.validity.valid) {
        inputElement.classList.remove("invalid");
      } else {
        inputElement.classList.add("invalid");
      }
    });
  };

$(function () {
  // select the input element and apply datepicker() method
  $("#datepicker").datepicker();

  $("#language").autocomplete({
    source: languages,
  });
});
