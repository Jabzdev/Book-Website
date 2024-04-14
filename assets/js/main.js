/*=============== SEARCH ===============*/
const searchButton = document.querySelector('#search-button'),
      searchClose = document.querySelector('#search-close'),
      searchContent = document.querySelector('#search-content')

/*====== SEARCH SHOW ======*/
/* Validate if constant exists */
if(searchButton) {
  searchButton.addEventListener('click', () =>{
    searchContent.classList.add('show-search')
  })
}

/*======= SEARCH HIDDEN =======*/
/* Validate if constant exists */
if(searchClose) {
  searchClose.addEventListener('click', () => {
    searchContent.classList.remove('show-search')
  })
}



/*=============== LOGIN ===============*/
const loginButton = document.querySelector('#login-button'),
      loginClose = document.querySelector('#login-close'),
      loginContent = document.querySelector('#login-content')

/*====== LOGIN SHOW ======*/
/* Validate if constant exists */
if(loginButton) {
  loginButton.addEventListener('click', () =>{
    loginContent.classList.add('show-login')
  })
}

/*======= LOGIN HIDDEN =======*/
/* Validate if constant exists */
if(loginClose) {
  loginClose.addEventListener('click', () => {
    loginContent.classList.remove('show-login')
  })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.querySelector('#header')

  this.scrollY >= 50 ? header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader);

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home-swiper', {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1220: {
      spaceBetween: -32,
    }
  }
});

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured-swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    }
  }
});

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new-swiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',

  breakpoints: {
    1150: {
      slidesPerView: 3,
    }
  }
});

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial-swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  breakpoints: {
    1150: {
      slidesPerView: 3,
      centeredSlides: false,
    }
  }
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.querySelector('#scroll-up')

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('#testimonial');

const scrollActive = () => {
    const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }    
  })  
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';


// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon')


// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//We validate if the user previously chose a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Active / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  /*Add or remove the dark / icon theme*/
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  /*We save the theme and the current icon that the user chose*/
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 100,
  reset: true

  // reset: true, // Animation repeat
})

sr.reveal(`.home-data, .featured-container, .new-container, .join-data, .testimonial-container, .footer`);
sr.reveal(`.home-images`, {delay: 600});
sr.reveal(`.services-card`, {interval: 100});
sr.reveal(`.discount-data`, {origin: 'left'});
sr.reveal(`.discount-images`, {origin: 'right'});
