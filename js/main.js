
// MenuToggle script 
const mainNav = document.querySelector('.header-container');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', function () {
    mainNav.classList.toggle('open');
});

// ScrollNav script
const header = document.querySelector('header');
const heroSection = document.querySelector('.hero');

const heroSectionOptions = {
    rootMargin: "-300px 0px 0px 0px"
};

const heroSectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("scrolled-nav");
        } else {
            header.classList.remove("scrolled-nav");
        }
    });
}, heroSectionOptions);

heroSectionObserver.observe(heroSection);

//Scroll into view
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Nav link active state change

const mainSection = document.querySelectorAll('section');

const mainSectionOptions = {
    threshold: .5
};

let mainSectionObserver = new IntersectionObserver(navCheck, mainSectionOptions);

function navCheck(entries) {
    entries.forEach(entry => {

        const className = entry.target.className;
        const activeLink = document.querySelector(`[data-page=${className}]`);

        if (entry.isIntersecting) {
            activeLink.classList.add("current");
        }
        else {
            activeLink.classList.remove("current");
        }
    });
}

mainSection.forEach(section => {
    mainSectionObserver.observe(section);
})
