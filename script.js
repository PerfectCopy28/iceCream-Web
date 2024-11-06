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
const scrollUp = () => {
	const scrollBtn = document.getElementById('scroll-up');
	if(this.scrollY >= 250){
		scrollBtn.classList.remove('-bottom-1/2');
		scrollBtn.classList.add('bottom-4');
	} else{
		scrollBtn.classList.add('-bottom-1/2');
		scrollBtn.classList.remove('bottom-4');
	}
};
window.addEventListener('scroll', scrollUp)
/*--------------- ACTIVE LINK ---------------*/
const activeLink = () => {
	const sections = document.querySelectorAll('section');
	const navLink = document.querySelectorAll('.nav-link');
	let target = 'home';
	sections.forEach(section => {
		const sectionTop = section.offsetTop;
		if(scrollY >= sectionTop - 60){
			target = section.getAttribute('id');
		};
	});
	navLink.forEach(link => {
		link.classList.remove('active');

		if(link.href.includes(target)){
			link.classList.add('active');
		};
	});
};
window.addEventListener('scroll', activeLink);
/*--------------- CHANGE BACKGROUND HEADER ---------------*/
const scrollHeader = () => {
	const navbar = document.getElementById('navbar');
	if(this.scrollY >= 200){
		navbar.classList.add('shadow-myboxshadow');
	} else{
		navbar.classList.remove('shadow-myboxshadow');
	}
}
window.addEventListener('scroll', scrollHeader);
/*--------------- SCROLL REVEAL ANIMATION ---------------*/
const sr = ScrollReveal({
	origin: 'left',
  reset : true,
	distance : '80px',
	duration : 2000,
	delay : 200
});

sr.reveal(`.hero-utama, .promo-img, .blogs-content img`,{origin: 'bottom', scale: 0.5, delay:700});
sr.reveal(`.hero__text h1, .promo-text, .promo-text button, .left-side, .flover__item, .blogs-text`,{origin: 'left',interval: 700});
sr.reveal(`.featured-btn, .promo-text i, .footer-content`,{origin: 'bottom',interval: 700});
sr.reveal(`.hero__text h4, .featured-text h2, .promo-text h2, .promo-text p, .shop-text, .shop-item, .promo-seasonal, .ingredients-text`,{origin: 'top',interval: 700});
sr.reveal(`.side-text, .right-side, .blogs-content`,{origin: 'right',interval: 700});