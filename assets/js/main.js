/***************************************************
==================== JS INDEX ======================
****************************************************

1. PreLoader Js
2. Common Js
3. Mouse active Js
4. Menu Controls JS
5. Offcanvas Js
6. Offcanvas 2 Js
7. Search Js
8. Smooth Scroll Js
9. split text animation Js
10. gsap section scrolling js 
11. project scroll effect js 
12. char splitText js
13. split invert Text js
14. Text Reveal Animation js 
15. Text fliping 3d Animation js
16. Fade-Animation js
17. Project scroll gsap js
18. about splitText js
19. Hover-animation js
20. hover reveal for image js
21. button hover animation js
22. Background Image Fixed js
23. Body overlay Js
24. One Page Scroll Js
25. Sticky Header Js
26. Header Height Js
27. Sidebar Js
28. backtotop Js
29. Portfolio filter js
30. Nice Select js
31. magnificPopup img view js 
32. magnificPopup video view js
33. Rating Js
34. scroll rotate js
35. Skillbar Js
36. Wow Js
37. Counter Js
38. parallax
39. cursor style js
40. wt-btn-trigger js

****************************************************/


(function ($) {
    "use strict";

    var windowOn = $(window);


    // 1. PreLoader Js
    const svg = document.getElementById("preloaderSvg");
	const preTl = gsap.timeline({
		onComplete: startAnimationAfterPreloader,
	});
	const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
	const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
    preTl.to(".preloader-heading .load-text , .preloader-heading .cont", {
		delay: 1.5,
		y: -100,
		opacity: 0,
	});
	preTl
		.to(svg, {
			duration: 0.5,
			attr: { d: curve },
			ease: "power2.easeIn",
		})
		.to(svg, {
			duration: 0.5,
			attr: { d: flat },
			ease: "power2.easeOut",
		});
	preTl.to(".preloader", {
        delay: 1.5,
		y: -1500,
	});
	preTl.to(".preloader", {
		zIndex: -1,
		display: "none",
	});
	let svgText = document.querySelector("svg text");
	function startAnimationAfterPreloader() {
		if (svgText) {
			// Add a class or directly apply styles to trigger the stroke animation
			svgText.classList.add("animate-stroke");
		}
	}



    // 2. Common Js

    $("[data-background").each(function () {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });

    $('a, button, .themepure-theme-toggle').on("mouseenter", function () {
        $('#awesome-cursor-circle').addClass('hide');
    });
    $('a, button, .themepure-theme-toggle').on("mouseleave", function () {
        $('#awesome-cursor-circle').removeClass('hide');
    });


    // 3. Mouse active
    $(".wt-service-3-item,.wt-portfolio-4-wrap").on("mouseenter", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });



    // 4. Menu Controls Js
    $('.wt-hamburger-toggle').on('click', function () {
        $('.wt-header-side-menu').slideToggle('wt-header-side-menu');
    });

    if ($('.wt-main-menu-content').length && $('.wt-main-menu-mobile').length) {
        let navContent = document.querySelector(".wt-main-menu-content").outerHTML;
        let mobileNavContainer = document.querySelector(".wt-main-menu-mobile");
        mobileNavContainer.innerHTML = navContent;


        let arrow = $(".wt-main-menu-mobile .has-dropdown > a");

        arrow.each(function () {
            let self = $(this);
            let arrowBtn = document.createElement("BUTTON");
            arrowBtn.classList.add("dropdown-toggle-btn");
            arrowBtn.innerHTML = "<i class='fa-regular fa-angle-right'></i>";

            self.append(function () {
                return arrowBtn;
            });

            self.find("button").on("click", function (e) {
                e.preventDefault();
                let self = $(this);
                self.toggleClass("dropdown-opened");
                self.parent().toggleClass("expanded");
                self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
                self.parent().parent().children(".wt-submenu").slideToggle();


            });

        });
    }




    // 5. Offcanvas Js
    $(".wt-offcanvas-open-btn").on("click", function () {
        $(".offcanvas__area").addClass("offcanvas-opened");
        $(".body-overlay").addClass("opened");
    });
    $(".offcanvas-close-btn").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".body-overlay").removeClass("opened");
    });



    // 6. Offcanvas 2 Js
    $(".wt-offcanvas-open-btn").on("click", function () {
		$(".wt-offcanvas-2-area").addClass("opened");

		setTimeout(() => {
			$('.wt-text-hover-effect-word').addClass('animated-text');
		}, 900);
	});
	$(".wt-offcanvas-2-close-btn").on("click", function () {
		setTimeout(() => {
			$('.wt-text-hover-effect-word').removeClass('animated-text');
		}, 1200);
		$(".wt-offcanvas-2-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});


    // 7. Search Js
    if ($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function () {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function () {
            $('body').removeClass('search-active');
        });
    }


    // 8. Smooth Scroll Js
    function smoothSctoll() {
        $('.smooth a').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 120
                }, 1500);
            }
        });
    }
    smoothSctoll();
    if ($('#smooth-wrapper').length && $('#smooth-content').length) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);

        gsap.config({
            nullTargetWarn: false,
        });

        let smoother = ScrollSmoother.create({
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: false,
            ignoreMobileResize: true,
        });
    }


    // 9. split text animation Js
    let zm = gsap.matchMedia();
    zm.add("(min-width: 600px)", () => {
        var st = $(".wt-split-text");
        if (st.length == 0) return;
        gsap.registerPlugin(SplitText);
        st.each(function (index, el) {
            el.split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "wt-split-line"
            });
            gsap.set(el, {
                perspective: 400
            });

            if ($(el).hasClass('right')) {
                gsap.set(el.split.chars, {
                    opacity: 0,
                    x: "50",
                    ease: "Back.easeOut",
                });
            }
            if ($(el).hasClass('left')) {
                gsap.set(el.split.chars, {
                    opacity: 0,
                    x: "-50",
                    ease: "circ.out",
                });
            }
            if ($(el).hasClass('up')) {
                gsap.set(el.split.chars, {
                    opacity: 0,
                    y: "80",
                    ease: "circ.out",
                });
            }
            if ($(el).hasClass('down')) {
                gsap.set(el.split.chars, {
                    opacity: 0,
                    y: "-80",
                    ease: "circ.out",
                });
            }
            el.anim = gsap.to(el.split.chars, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                },
                x: "0",
                y: "0",
                rotateX: "0",
                scale: 1,
                opacity: 1,
                duration: 0.4,
                stagger: 0.02,
            });
        });
    });


    // 10. gsap section scrolling Js 
    if ($('.wt-project-textline').length > 0) {
        gsap.set('.wt-project-textline', {
            x: '25%'
        });
        gsap.timeline({
                scrollTrigger: {
                    trigger: '.wt-project-textline ',
                    start: '-1500 10%',
                    end: 'bottom 20%',
                    scrub: true,
                    invalidateOnRefresh: true
                }
            })
            .to('.wt-project-textline ', {
                x: '-80%'
            });
    }


    // 11. project scroll effect Js 
    var controller = new ScrollMagic.Controller();
    var $elheight = window.innerHeight;
    $('.wt-project-effect').each(function () {
        var $this = $(this);
        var $thisHeight = $(this).height();

        var scene = new ScrollMagic.Scene({
            triggerElement: $this[0],
            duration: $thisHeight
        }).addTo(controller);

        scene.triggerHook(0.9)

        scene.on('enter', function () {
            $this.addClass('active');
        });

        if ($("body").hasClass("smooth-scroll")) {
            scrollbar.addListener(() => {
                scene.refresh()
            });
        }
    })


    // 12. char splitText Js
    if ($(window).width() > 576 && $(".wt-char-animation").length > 0) {
        let char_come = gsap.utils.toArray(".wt-char-animation");
        char_come.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: "top 90%",
                    end: "bottom 60%",
                    scrub: false,
                    markers: false,
                    toggleActions: "play none none none",
                },
            });
    
            const itemSplitted = new SplitText(splitTextLine, {
                type: "chars, words",
            });
            gsap.set(splitTextLine, {
                perspective: 300
            });
            itemSplitted.split({
                type: "chars, words"
            });
            tl.from(itemSplitted.chars, {
                duration: 1,
                delay: 0.5,
                x: 100,
                autoAlpha: 0,
                stagger: 0.05,
            });
        });
    }

 
    // 13. split invert Text Js
    const split = new SplitText(".wt-text-invert", {
        type: "lines"
    });
    split.lines.forEach(target => {
        gsap.to(target, {
            backgroundPositionX: 0,
            ease: "none",
            scrollTrigger: {
                trigger: target,
                scrub: 1,
                start: "top 85%",
                end: "bottom center",
            },
        });
    });



    // 14. Text Reveal Animation Js
    const anim_reveal = document.querySelectorAll(".wt_reveal_anim");
    anim_reveal.forEach(areveal => {

        var duration_value = 1.5;
        var onscroll_value = 1;
        var stagger_value = 0.02;
        var data_delay = 0.05;

        if (areveal.getAttribute("data-duration")) {
            duration_value = areveal.getAttribute("data-duration");
        }
        if (areveal.getAttribute("data-on-scroll")) {
            onscroll_value = areveal.getAttribute("data-on-scroll");
        }
        if (areveal.getAttribute("data-stagger")) {
            stagger_value = areveal.getAttribute("data-stagger");
        }
        if (areveal.getAttribute("data-delay")) {
            data_delay = areveal.getAttribute("data-delay");
        }

        areveal.split = new SplitText(areveal, {
            type: "lines,words,chars",
            linesClass: "wt-reveal-line"
        });

        if (onscroll_value == 1) {
            areveal.anim = gsap.from(areveal.split.chars, {
                scrollTrigger: {
                    trigger: areveal,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play reverse play reverse'
                },
                duration: duration_value,
                delay: data_delay,
                ease: "circ.out",
                y: 200,
                stagger: stagger_value,
                opacity: 0,
            });
        } else {
            areveal.anim = gsap.from(areveal.split.chars, {
                duration: duration_value,
                delay: data_delay,
                ease: "circ.out",
                y: 200,
                stagger: stagger_value,
                opacity: 0,
            });
        }

    });



    // 15. Text fliping 3d Animation Js 
	let tj_title_anim = gsap.utils.toArray(".wt_title_anim");
	tj_title_anim.forEach(splitTextLine => {
		var delay_value = 0.5;
		if (splitTextLine.getAttribute("data-delay")) {
			delay_value = splitTextLine.getAttribute("data-delay");
		}
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: "top 90%",
				duration: 1.5,
				scrub: false,
				markers: false,
				toggleActions: "play none none none",
			},
		});

		const itemSplitted = new SplitText(splitTextLine, {
			type: "lines",
		});
		gsap.set(splitTextLine, {
			perspective: 400,
		});
		itemSplitted.split({
			type: "lines",
		});
		tl.from(itemSplitted.lines, {
			duration: 1,
			delay: delay_value,
			opacity: 0,
			rotationX: -80,
			force3D: true,
			transformOrigin: "top center -50",
			stagger: 0.1,
		});
	});



    // 16. Fade-Animation Js
    const fadeArrayup = gsap.utils.toArray(".wt_fade_anim");
    fadeArrayup.forEach((t, e) => {
        var r = "bottom",
            a = 1,
            o = 1,
            i = 50,
            s = .5,
            l = "power2.out";
        t.getAttribute("data-fade-offset") && (i = t.getAttribute("data-fade-offset")), t.getAttribute("data-duration") && (o = t.getAttribute("data-duration")), t.getAttribute("data-fade-from") && (r = t.getAttribute("data-fade-from")), t.getAttribute("data-on-scroll") && (a = t.getAttribute("data-on-scroll")), t.getAttribute("data-delay") && (s = t.getAttribute("data-delay")), t.getAttribute("data-ease") && (l = t.getAttribute("data-ease")), 1 == a ? ("top" == r && gsap.from(t, {
            y: -i,
            opacity: 0,
            ease: l,
            duration: o,
            delay: s,
            scrollTrigger: {
                trigger: t,
                start: "top 110%"
            }
        }), "left" == r && gsap.from(t, {
            x: -i,
            opacity: 0,
            ease: l,
            duration: o,
            delay: s,
            scrollTrigger: {
                trigger: t,
                start: "top 110%"
            }
        }), "bottom" == r && gsap.from(t, {
            y: i,
            opacity: 0,
            ease: l,
            duration: o,
            delay: s,
            scrollTrigger: {
                trigger: t,
                start: "top 110%"
            }
        }), "right" == r && gsap.from(t, {
            x: i,
            opacity: 0,
            ease: l,
            duration: o,
            delay: s,
            scrollTrigger: {
                trigger: t,
                start: "top 110%"
            }
        }), "in" == r && gsap.from(t, {
            opacity: 0,
            ease: l,
            duration: o,
            delay: s,
            scrollTrigger: {
                trigger: t,
                start: "top 110%"
            }
        })) : ("top" == r && gsap.from(t, {
            y: -i,
            opacity: 0,
            ease: l,
            duration: o,
            delay: s
        }), "left" == r && gsap.from(t, {
            x: -i,
            opacity: 0,
            ease: l,
            duration: o,
            delay: s
        }), "bottom" == r && gsap.from(t, {
            y: i,
            opacity: 0,
            ease: l,
            duration: o,
            delay: s
        }), "right" == r && gsap.from(t, {
            x: i,
            opacity: 0,
            ease: l,
            duration: o,
            delay: s
        }), "in" == r && gsap.from(t, {
            opacity: 0,
            ease: l,
            duration: o,
            delay: s
        }))
    });



    // 17. Project scroll gsap Js
    let pr = gsap.matchMedia();
    pr.add("(min-width: 768px)", () => {

        let tl = gsap.timeline();
        let projectpanels = document.querySelectorAll('.project-panel')
        projectpanels.forEach((section, index) => {
            tl.to(section, {
                scrollTrigger: {
                    trigger: section,
                    pin: section,
                    scrub: 1,
                    start: 'center center',
                    end: "bottom 100%",
                    endTrigger: '.project-panel-area',
                    pinSpacing: false,
                    markers: false,
                },
            })
        })
    });



    // 18. about splitText Js
    if ($('.wt-about-title').length > 0) {

        let cta = gsap.timeline({
            repeat: -1,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.wt-about-title',
                start: 'bottom 100%-=50px'
            }
        });
        gsap.set('.wt-about-title', {
            opacity: 0
        });
        gsap.to('.wt-about-title', {
            opacity: 1,
            duration: 1,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.wt-about-title',
                start: 'bottom 100%-=50px',
                once: true
            }
        });

        let mySplitText = new SplitText(".wt-about-title", {
            type: "words,chars"
        });
        let chars = mySplitText.chars;
        let endGradient = chroma.scale(['#1b1b1b', '#1b1b1b', '#1b1b1b', '#1b1b1b', '#1b1b1b']);
        cta.to(chars, {
            duration: 0.5,
            scaleY: 0.6,
            ease: "power1.out",
            stagger: 0.04,
            transformOrigin: 'center bottom'
        });
        cta.to(chars, {
            yPercent: -20,
            ease: "elastic",
            stagger: 0.03,
            duration: 0.8
        }, 0.5);
        cta.to(chars, {
            scaleY: 1,
            ease: "elastic.out",
            stagger: 0.03,
            duration: 1.5
        }, 0.5);
        cta.to(chars, {
            color: (i, el, arr) => {
                return endGradient(i / arr.length).hex();
            },
            ease: "power1.out",
            stagger: 0.03,
            duration: 0.3
        }, 0.5);
        cta.to(chars, {
            yPercent: 0,
            ease: "back",
            stagger: 0.03,
            duration: 0.8
        }, 0.7);
        cta.to(chars, {
            color: '#1b1b1b',
            duration: 1.4,
            stagger: 0.05
        });
    }


    // 19. Hover-animation Js
    function hoverWidget_animation() {
        let active_bg = $(".wt-hover__widget .active-bg");
        let element = $(".wt-hover__widget .current");
        $(".wt-hover__widget .wt-widget__item").on("mouseenter", function () {
            let e = $(this);
            activeHover(active_bg, e);
        });
        $(".wt-hover__widget").on("mouseleave", function () {
            element = $(".wt-hover__widget .current");
            activeHover(active_bg, element);
            element.closest(".wt-widget__item").siblings().removeClass("mleave");
        });
        activeHover(active_bg, element);
    }
    hoverWidget_animation();

    function activeHover(active_bg, e) {
        if (!e.length) {
            return false;
        }
        let topOff = e.offset().top;
        let height = e.outerHeight();
        let menuTop = $(".wt-hover__widget").offset().top;
        e.closest(".wt-widget__item").removeClass("mleave");
        e.closest(".wt-widget__item").siblings().addClass("mleave");
        active_bg.css({
            top: topOff - menuTop + "px",
            height: height + "px"
        });
    }
    $(".wt-hover__widget .wt-widget__item").on("click", function () {
        $(".wt-hover__widget .wt-widget__item").removeClass("current");
        $(this).addClass("current");
    });


    // 20. hover reveal for image Js
    const hoverItem = document.querySelectorAll(".wt-hover__reveal-item");

    function moveImage(e, hoverItem, index) {
        const item = hoverItem.getBoundingClientRect();
        const x = e.clientX - item.x;
        const y = e.clientY - item.y;
        if (hoverItem.children[index]) {
            hoverItem.children[index].style.transform = `translate(${x}px, ${y}px)`;
        }
    }
    hoverItem.forEach((item, i) => {
        item.addEventListener("mousemove", (e) => {
            setInterval(moveImage(e, item, 1), 50);
        });
    });



    // 21. button hover animation Js
    $('.wt-hover-btn').on('mouseenter', function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('.wt-btn-circle-dot').css({
            top: y,
            left: x
        });
    });

    $('.wt-hover-btn').on('mouseout', function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('.wt-btn-circle-dot').css({
            top: y,
            left: x
        });
    });
    var hoverBtns = gsap.utils.toArray(".wt-hover-btn-wrapper");
    const hoverBtnItem = gsap.utils.toArray(".wt-hover-btn-item");
    hoverBtns.forEach((btn, i) => {
        $(btn).mousemove(function (e) {
            callParallax(e);
        });

        function callParallax(e) {
            parallaxIt(e, hoverBtnItem[i], 60);
        }

        function parallaxIt(e, target, movement) {
            var $this = $(btn);
            var relX = e.pageX - $this.offset().left;
            var relY = e.pageY - $this.offset().top;

            gsap.to(target, 1, {
                x: ((relX - $this.width() / 2) / $this.width()) * movement,
                y: ((relY - $this.height() / 2) / $this.height()) * movement,
                ease: Power2.easeOut,
            });
        }
        $(btn).mouseleave(function (e) {
            gsap.to(hoverBtnItem[i], 1, {
                x: 0,
                y: 0,
                ease: Power2.easeOut,
            });
        });
    });



    // 22. Background Image Fixed Js
	if ($('.wt-about-inr-thumb').length > 0) {
		ScrollTrigger.create({
			trigger: ".wt-about-inr-thumb",
			start: "top 65",
			end: "bottom 0%",
			pin: ".wt-about-inr-thumb-img",
			pinSpacing: false,
		});
	}



    // Project gsap animation start
	if ($('.wt-portfolio-4-wrapper').length > 0) {
		gsap.set('.wt-portfolio-4-wrapper', {
			x: '25%'
		});
		gsap.timeline({
			scrollTrigger: {
				trigger: '.wt-portfolio-4-area',
				start: '-1000 10%',
				end: '1000 30%',
				scrub: true,
				invalidateOnRefresh: true
			}
		})
			.to('.wt-portfolio-4-wrapper ', {
				x: '-200%'
			});
	}



    // 23. Body overlay Js
    $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".wt-search-area").removeClass("opened");
        $(".cartmini__area").removeClass("cartmini-opened");
        $(".body-overlay").removeClass("opened");
    });


    // 24. One Page Scroll Js
    function scrollNav() {
        $('.wt-onepage-menu li a').click(function () {
            $(".wt-onepage-menu li a.active").removeClass("active");
            $(this).addClass("active");

            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 80
            }, 300);
            return false;
        });
    }
    scrollNav();


    // 25. Sticky Header Js
    windowOn.on('scroll', function () {
        var scroll = windowOn.scrollTop();
        if (scroll < 200) {
            $("#header-sticky").removeClass("header-sticky");
        } else {
            $("#header-sticky").addClass("header-sticky");
        }
    });


    // 26. Header Height Js
    if ($('.wt-header-height').length > 0) {
        var headerHeight = document.querySelector(".wt-header-height");
        var setHeaderHeight = headerHeight.offsetHeight;
        $(".wt-header-height").each(function () {
            $(this).css({
                'height': setHeaderHeight + 'px'
            });
        });

        $(".wt-header-height.header-sticky").each(function () {
            $(this).css({
                'height': inherit,
            });
        });
    }


    // 27. Sidebar Js
    $(".wt-menu-bar").on("click", function () {
        $(".wtoffcanvas").addClass("opened");
        $(".body-overlay").addClass("apply");
    });
    $(".close-btn").on("click", function () {
        $(".wtoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });
    $(".body-overlay").on("click", function () {
        $(".wtoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });


    // 28. backtotop Js
    function back_to_top() {
        var btn = $('#back_to_top');
        var btn_wrapper = $('.back-to-top-wrapper');

        windowOn.scroll(function () {
            if (windowOn.scrollTop() > 300) {
                btn_wrapper.addClass('back-to-top-btn-show');
            } else {
                btn_wrapper.removeClass('back-to-top-btn-show');
            }
        });

        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, '300');
        });
    }
    back_to_top();



    // 29. Portfolio filter js
	$('.grid').imagesLoaded(function () {

		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '',		
			}
		});


		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});



    // 30. Nice Select Js
    if ($("select").length > 0) {
        $("select").niceSelect();
    }


    // 31. magnificPopup img view Js 
    $('.popup-image').magnificPopup({
        // delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    // 32. magnificPopup video view Js
    $(".popup-video").magnificPopup({
        type: "iframe",
    });


    // 33. Rating Js
    if ($(".fill-ratings span").length > 0) {
        var star_rating_width = $(".fill-ratings span").width();
        $(".star-ratings").width(star_rating_width);
    }


    // 34. scroll rotate Js
    let reloadClassName = document.getElementById("reload");
    if (reloadClassName !== null) {
        window.onscroll = function () {
            scrollRotate();
        };
        function scrollRotate() {
            reloadClassName.style.transform = "rotate(" + window.pageYOffset / 10 + "deg)";
        }
    }


    // 35. Skillbar Js
    $(document).ready(function () {
        progress_bar();
    });
    function progress_bar() {
        var speed = 30;
        var items = $(".progress_bar").find(".progress-item");
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var item = $(entry.target).find(".progress");
                    var itemValue = item.data("progress");
                    var i = 0;
                    var value = $(entry.target);
                    var count = setInterval(function () {
                        if (i <= itemValue) {
                            var iStr = i.toString();
                            item.css({
                                width: iStr + "%",
                            });
                            value.find(".item_value").html(iStr + "%");
                        } else {
                            clearInterval(count);
                        }
                        i++;
                    }, speed);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        items.each(function () {
            observer.observe(this);
        });
    }


    // 36. Wow Js
    new WOW().init();


    // 37. Counter Js
    new PureCounter();
    new PureCounter({
        filesizing: true,
        selector: ".filesizecount",
        pulse: 2,
    });


    // 38. parallax Js
    if ($('.scene').length > 0) {
        $('.scene').parallax({
            scalarX: 2,
            scalarY: 2,
        });
    };
    if ($('.scene-2').length > 0) {
        $('.scene-2').parallax({
            scalarX: 1,
            scalarY: 1,
        });
    };

    

    // 39. cursor style Js
    document.addEventListener("DOMContentLoaded", function () {
        var cursor = document.querySelector(".cursor");
        var cursor2 = document.querySelector(".cursor2");
        document.addEventListener("mousemove", function (e) {
            cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
        });
        var cursorScale = document.querySelectorAll('a, button, .brand-item,.swiper-button-prev,.swiper-button-next, .icons');
        cursorScale.forEach(link => {
            link.addEventListener('mousemove', () => {
                cursor.classList.add('grow');
                if (link.classList.contains('small')) {
                    cursor.classList.remove('grow');
                    cursor.classList.add('grow-small');
                }
            });
            link.addEventListener('mouseleave', () => {
                cursor.classList.remove('grow');
                cursor.classList.remove('grow-small');
            });
        });
    });


    // 40. wt-btn-trigger Js
    if ($('.wt-btn-trigger').length > 0) {

        gsap.set(".wt-btn-bounce", {
            y: -100,
            opacity: 0
        });
        var mybtn = gsap.utils.toArray(".wt-btn-bounce");
        mybtn.forEach((btn) => {
            var $this = $(btn);
            gsap.to(btn, {
                scrollTrigger: {
                    trigger: $this.closest('.wt-btn-trigger'),
                    start: "top center",
                    markers: false
                },
                duration: 1,
                ease: "bounce.out",
                y: 0,
                opacity: 1,
            })
        });
    }


})(jQuery);