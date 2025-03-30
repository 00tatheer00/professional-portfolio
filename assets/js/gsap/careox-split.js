(function ($) {
  "use strict";

  $(window).on("load", function () {
      bwsplit_text();
  });

  // Split Text
  function bwsplit_text() {
      setTimeout(function () {
          var splitTextElements = $(".wt-section-title, .wt-section-title-pre, .section-title");
          if (splitTextElements.length === 0) return;
          gsap.registerPlugin(SplitText);
          splitTextElements.each(function (index, element) {
              var splitElement = new SplitText(element, {
                  type: "chars, words", // "chars, words, lines"
              });

              gsap.set(element, {
                  perspective: 400
              });

              if ($(element).hasClass("bw-split-in-fade")) {
                  gsap.set(splitElement.chars, {
                      opacity: 0,
                      ease: "Back.easeOut"
                  });
              }
              if ($(element).hasClass("wt-split-in-right")) {
                  gsap.set(splitElement.chars, {
                      opacity: 0,
                      x: "20",
                      ease: "Back.easeOut"
                  });
              }
              if ($(element).hasClass("wt-split-in-left")) {
                  gsap.set(splitElement.chars, {
                      opacity: 0,
                      x: "-20",
                      ease: "Back.easeOut"
                  });
              }
              if ($(element).hasClass("bw-split-in-rotate")) {
                  gsap.set(splitElement.chars, {
                      opacity: 0,
                      rotateX: "50deg",
                      ease: "circ.out"
                  });
              }
              if ($(element).hasClass("bw-split-in-scale")) {
                  gsap.set(splitElement.chars, {
                      opacity: 0,
                      rotateX: "50deg",
                      ease: "circ.out"
                  });
              }
              element.anim = gsap.to(splitElement.chars, {
                  scrollTrigger: {
                      trigger: element,
                      toggleActions: "restart pause resume reverse",
                      start: "top 90%"
                  },
                  x: "0",
                  y: "0",
                  rotateX: "0",
                  scale: 1,
                  opacity: 1,
                  duration: 1.2,
                  stagger: 0.02
              });
          });
      }, 200);
  }

})(jQuery);