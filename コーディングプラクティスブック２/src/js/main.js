// "use strict";

// const menuToggleButton = document.querySelector('.nav-button');

// const navFunc = () => {
// 	document.querySelector('html').classList.toggle('open');
// }
// menuToggleButton.addEventListener('click', navFunc);

(function ($) {
	$(function () {
		$('.nav-button').on('click', function () {
			$('body').toggleClass('open');
		});
	});
})(jQuery);