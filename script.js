/*--------------- TOGGLE BUTTON ---------------*/
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const closeicon = document.getElementById('closeicon');

hamburger.addEventListener('click', () => {
	navMenu.classList.toggle('left-[0]');
});
closeicon.addEventListener('click', () => {
	navMenu.classList.toggle('left-[0]');
});
navLink.forEach(link => {
	link.addEventListener('click', () => {
		navMenu.classList.toggle('left-[0]');
	});
});
/*--------------- SWIPER ---------------*/
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
	grabCursor: true,
	slidesPerView: 1,
	spaceBetween: 10,
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
	},
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
/*--------------- SHOW SCROLL UP ---------------*/


/*--------------- ACTIVE LINK ---------------*/


/*--------------- CHANGE BACKGROUND HEADER ---------------*/


/*--------------- SCROLL REVEAL ANIMATION ---------------*/