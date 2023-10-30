



// ==========AOS ==========//
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
  });
  ScrollReveal().reveal('.about-me h3, .inner-box', {origin: 'top'});
  ScrollReveal().reveal('.home-content, .heading .contact', {origin: 'bottom'});
  ScrollReveal().reveal('.about-img, .whychoose-img',{origin: 'left'});
  ScrollReveal().reveal('.about-me h2, .card-container, .about-content, .aos-right', {origin: 'right'});
  // -------------Alert---------//
  
  const btnburger = document.querySelector(".fa-bars-staggered");
  const nav = document.querySelector(".links-nav");
  
  btnburger.addEventListener("click", ()=>{
      nav.style.display = "block";
  })
  
  
  
  // var swiper = new Swiper(".mySwiper", {
  //     speed: 600,
  //     parallax: true,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   });
  
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
          }
        }
      });