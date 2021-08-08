// Select the element
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function delcare(){
	big_wrapper = document.querySelector('.big-wrapper');
	toggle_btn = document.querySelector('.toggle-btn');
	hamburger_menu = document.querySelector('.hamburger-menu');
}

const main = document.querySelector('main');
delcare()

let dark = false;

var toggleAnimation =  () => {
	dark = !dark

	let clone = big_wrapper.cloneNode(true);

	if (dark) {
		clone.classList.remove('light');
		clone.classList.add('dark');
	}else {
		clone.classList.remove('dark');
		clone.classList.add('light');
	}
	
	clone.classList.add('copy');
	main.appendChild(clone);

	document.body.classList.add('stop-scrolling');

	clone.addEventListener("animationend", () => {
		document.body.classList.remove('stop-scrolling');
		big_wrapper.remove();
		clone.classList.remove('copy');
		// reset variables
		delcare();
		events();
	})
	// big_wrapper.classList.toggle('dark');
	// big_wrapper.classList.toggle('light');
}

function events(){
	toggle_btn.addEventListener("click", toggleAnimation)
	hamburger_menu.addEventListener("click", () => {
		big_wrapper.classList.toggle('active');
	})
}

events();