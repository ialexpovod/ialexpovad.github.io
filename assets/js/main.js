const  navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}

/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
    let itemClass = this.parentNode.className;
    const offset = 100;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
    }

    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";

        const elementPosition = this.parentNode.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
});
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active');
        });

        target.classList.add('qualification__active');

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active');
        })
        tab.classList.add('qualification__active');
    })
})

const modalViews = document.querySelectorAll('.Expertise__modal'),
    modalBtns = document.querySelectorAll('.Expertise__button'),
    modalCloses = document.querySelectorAll('.Expertise__modal-close');

let modal = function (modalClick){
    modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i);
    })
});

modalCloses.forEach(modalClose => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal');
        });
    });
});

let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let swiperarticles = new Swiper(".articles__container", {
    loop: true,
    grapCursor: true,
    spaceBetween: 40,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      568: {
        slidesPerView: 2,
      },
    },
  });

  const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

window.addEventListener('scroll', function() {
    const scrollUp = document.getElementById('scroll-up');
    let footer = document.getElementById('footer');
    let rect = footer.getBoundingClientRect(); // Gets the current position of the footer

    // Check if the top of the footer is visible
    if (rect.top <= window.innerHeight) {
        // If the footer is visible, change the button's color
        scrollUp.classList.add("scrollup--footer");
    } else {
        // Otherwise, remove the class
        scrollUp.classList.remove("scrollup--footer");
    }
});

function scrollHeader(){
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);



function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if (this.scrollY >= 80) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener('scroll', scrollUp);

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Google recaptcha
window.onload = function() { 
    var el = document.getElementById('g-recaptcha-response'); 
    if (el) { 
      el.setAttribute('required', 'required'); 
    } 
  }

// validate all field in the contact form
document.getElementById("check").onclick = function() {
    let allAreFilled = true;
    document.getElementById("submit_form").querySelectorAll("[required]").forEach(function(i) {
      if (!allAreFilled) return;
      if (!i.value) { allAreFilled = false;  return; }
    })
    if (!allAreFilled) {
      alert('Fill all the fields');
    }
};


const backToTopButton = document.getElementById("back-to-top");

document.addEventListener('scroll', function() {
    var scrollUpButton = document.getElementById('back-to-top');
    var footer = document.querySelector('footer');

    var footerPosition = footer.getBoundingClientRect().top + window.scrollY;
    var scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition >= footerPosition) {
        scrollUpButton.style.color = 'white';
    }
    else {
        scrollUpButton.style.color = '';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to update the current year in the footer
    function updateYear() {
        // Get the current year
        var currentYear = new Date().getFullYear();

        // Update the content of the element with id "currentYear"
        var footerCopy = document.getElementById('currentYear');
        if (footerCopy) {
            footerCopy.innerHTML = '&copy; ' + currentYear + ', Alex Povad';
        }
    }

    // Call the function initially to set the year when the page loads
    updateYear();
});
