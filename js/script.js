var searchblock = document.querySelector(".main-search");
var searchmodal = document.querySelector(".search-form");
var feedback = document.querySelector(".feedback");
var feedback_btn = document.querySelector(".feedback-btn");
var close_button = document.querySelector(".close-button");
var enter_form = document.querySelector(".sing-in-form");
var enter_area = document.querySelector(".log-in");
var order = document.querySelector(".order");
var full_cart = document.querySelector(".full-cart");
var close = document.querySelector(".modal-close");

searchblock.addEventListener("mouseover", function(evt) {
	evt.preventDefault();
	searchmodal.classList.add("modal-show");
});

if (feedback && feedback_btn !== null) {
	feedback_btn.addEventListener("click", function(evt1) {
		feedback.classList.add("modal-show");
	})
};

if (close_button && feedback !== null) {
	close_button.addEventListener("click", function(evt2) {
		evt2.preventDefault();
		feedback.classList.remove("modal-show");
	})
};

if (enter_area && enter_form !== null) {
	enter_area.addEventListener("mouseover", function(evt3) {
		evt3.preventDefault();
		enter_form.classList.add("modal-show");
	})
};

if (full_cart && order !== null) {
	full_cart.addEventListener("mouseover", function(evt4) {
		evt4.preventDefault();
		order.classList.add("modal-show");
	})
};

window.addEventListener("keydown", function(evt5) {
	if (evt5.keyCode === 27) {
		searchmodal.classList.remove("modal-show");
	}
});


if (enter_area && enter_form !== null) {
	window.addEventListener("keydown", function(evt6) {
		if (evt6.keyCode === 27) {
			enter_form.classList.remove("modal-show");
		}
	});
};

if (full_cart && order !== null) {
	window.addEventListener("keydown", function(evt7) {
		if (evt7.keyCode === 27) {
			order.classList.remove("modal-show");
		}
	});
};
