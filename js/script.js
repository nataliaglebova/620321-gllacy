var feedback = document.querySelector(".feedback");
var feedback_btn = document.querySelector(".feedback-btn");
var close_button = document.querySelector(".close-button");
var close = document.querySelector(".modal-close");
var custom_name = document.querySelector(".custom-name");
var custom_email = document.querySelector(".custom-email");
var comments = document.querySelector(".comments");
var feedback_form = document.querySelector(".feedback-form");

feedback_btn.addEventListener("click", function(evt) {
  feedback.classList.add("modal-show");
});

feedback_form.addEventListener("submit", function(evt) {
  if (!custom_name.value || !custom_email.value || !comments.value) {
    evt.preventDefault();
    feedback.classList.add("modal-check");
  }
});

close_button.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback.classList.add("modal-close");
  setTimeout( function(cls){
  feedback.classList.remove("modal-show");
  feedback.classList.remove("modal-close");
  feedback.classList.remove("modal-check");},1500);

});
