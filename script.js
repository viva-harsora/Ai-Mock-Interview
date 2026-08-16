/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* Close mobile menu after clicking link */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================
   FAQ ACCORDION
========================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach((otherItem) => {

            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    observer.observe(element);

});


/* =========================
   PARALLAX EFFECT
========================= */

const cartoonWorld = document.querySelector(".cartoon-world");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    if (cartoonWorld) {

        cartoonWorld.style.transform =
            `translateY(${scrollPosition * 0.08}px)`;

    }

});


const registerButtons =
    document.querySelectorAll(".register-btn, .nav-btn, .primary-btn");

registerButtons.forEach((button) => {

    button.addEventListener("click", () => {

        console.log("Registration button clicked!");

    });

});