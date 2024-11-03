const sr = ScrollReveal({
	origin: 'left',
  reset : true,
	distance : '80px',
	duration : 2000,
	delay : 200
});

sr.reveal(`.buble1, .buble2,  .blog-bawah img`,{origin: 'bottom', scale: 0.5, delay:700});
sr.reveal(`.home-text h1, .home-text p, .money img, .testimonial-review, .card-1,  .blog-atas h1`,{origin: 'left',interval: 700});
sr.reveal(`.home-text button, .features-bawah, .money-conten button, .works-bawah, .testimonial-bawah, .card-2, .blog-text`,{origin: 'bottom',interval: 700});
sr.reveal(`.features-atas, .works-atas, .testimonial-atas, .pricing-atas, .blog-atas`,{origin: 'top',interval: 700});
sr.reveal(`.home-text img, .money-conten h4, .money-conten h1, .money-conten p, .pricing-tombol, .card-3, .blog-atas h4`,{origin: 'right',interval: 500});