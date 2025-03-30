
(function ($) {
	"use strict";


	// slider all js
	const sliderswiper = new Swiper('.wt-slider-active', {
		// Optional parameters
		speed:1500,
		loop: true,
		slidesPerView: 1,
		autoplay: true,
		effect:'fade',
		breakpoints: {
			'1600': {
				slidesPerView:1,
			},
			'1400': {
				slidesPerView:1,
			},
			'1200': {
				slidesPerView:1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
		// pagination dots
		pagination: {
			el: ".wt-slider-dots",
			clickable:true,
		},

	});

	
	// Home 1 testimonial
	$('.wt-testimonial-2-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 2000, 
		autoplay: true, 
		autoplaySpeed: 2500,
		arrows: true,
		prevArrow: '.slick-prev',
  		nextArrow: '.slick-next',
		fade: true,
		asNavFor: '.wt-testimonial-2-thumb-active'

	});
	$('.wt-testimonial-2-thumb-active').slick({	
		slidesToShow: 1,
		slidesToScroll: false,
		asNavFor: '.wt-testimonial-2-active',
		dots: false,
		arrows: false,
		autoplay: true,  
		autoplaySpeed: 2500,   
		speed: 2000, 
		fade: true,
		focusOnSelect: true,
		centerPadding: '0',
		centerMode: true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				slidesToShow: 1,
			}
		}	
		]
	});



	// Home 2 Brand 
	var slider = new Swiper('.wt-brand-2-active', {
		slidesPerView: 7,
		spaceBetween: 30,
		loop: true,
		autoplay:true,
		speed: 3000,
		centeredSlides: true,
		breakpoints: {
			'1400': {
				slidesPerView: 7,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 2,
			},
		},
	});



	// Home 3 Maquee 
	var slider = new Swiper('.wt-maquee-3-active', {
		slidesPerView: "auto",
		spaceBetween: 65,
		loop: true,
		speed: 5000,
		allowTouchMove: false,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
		breakpoints: {
			320: {
				spaceBetween: 40,
			},
			768: {
				spaceBetween: 40,
			},
			992: {
				spaceBetween: 40,
			},
			1200: {
				spaceBetween: 65,
			},
		},
	});


	// Home 3 Testimonial Js
	var testimonialSwiper = new Swiper(".wt-testimonial-3-active", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		speed: 1500,
		navigation: {
			nextEl: ".slider-next",
			prevEl: ".slider-prev",
		},
	});



	// Home 3 Portfolio Js
	var slider = new Swiper(".wt-portfolio-4-active", {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		speed: 2000,
		arrow: false,
		breakpoints: {
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 2,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'375': {
				slidesPerView: 2,
			},

			a11y: false,
		},
	});

	


	

	// Home 4 testimonial Js
	var slider = new Swiper('.wt-testimonial-4-active', {
		slidesPerView: "auto",
		spaceBetween: 30,
		loop: true,
		speed: 1500,
		breakpoints: {
			'1200': {
				slidesPerView: 2.5,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 2,
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},

		// pagination
		pagination: {
			el: ".wt-testimonial-4-dot",
			clickable: true,
			renderBullet: function (index, className) {
			  return '<span class="' + className + '">' + '<button>'+(index + 1)+'</button>' + "</span>";
			},
		},
	});




	




})(jQuery);