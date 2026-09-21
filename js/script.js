<<<<<<< HEAD
// =============================
// MOBILE NAVIGATION
// =============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show");

        menuBtn.textContent =
            navMenu.classList.contains("show")
                ? "✕"
                : "☰";

    });

}


// =============================
// TYPING ANIMATION
// =============================

const typingElement = document.getElementById("typing");

const roles = [
    "Full Stack Developer",
    "JavaScript Developer",
    "Problem Solver",
    "Computer Science Student"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}


typeEffect();


// =============================
// SCROLL REVEAL
// =============================

const revealElements =
    document.querySelectorAll(".reveal");


const revealOnScroll = () => {

    revealElements.forEach(element => {

        const position =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (position < windowHeight - 80) {

            element.classList.add("show");

        }

    });

};


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();


// =============================
// CONTACT FORM
// =============================

const contactForm =
    document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const button =
                contactForm.querySelector("button");

            button.textContent =
                "Message Sent ✓";

            button.style.background =
                "linear-gradient(135deg,#16a34a,#22c55e)";

            contactForm.reset();

            setTimeout(() => {

                button.textContent =
                    "Send Message →";

                button.style.background = "";

            }, 3000);

        }
    );

}


// =============================
// CLOSE MOBILE MENU
// =============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {

            navMenu.classList.remove("show");

            if (menuBtn) {
                menuBtn.textContent = "☰";
            }

        }

    });

=======
// =============================
// MOBILE NAVIGATION
// =============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show");

        menuBtn.textContent =
            navMenu.classList.contains("show")
                ? "✕"
                : "☰";

    });

}


// =============================
// TYPING ANIMATION
// =============================

const typingElement = document.getElementById("typing");

const roles = [
    "Full Stack Developer",
    "JavaScript Developer",
    "Problem Solver",
    "Computer Science Student"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}


typeEffect();


// =============================
// SCROLL REVEAL
// =============================

const revealElements =
    document.querySelectorAll(".reveal");


const revealOnScroll = () => {

    revealElements.forEach(element => {

        const position =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (position < windowHeight - 80) {

            element.classList.add("show");

        }

    });

};


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();


// =============================
// CONTACT FORM
// =============================

const contactForm =
    document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const button =
                contactForm.querySelector("button");

            button.textContent =
                "Message Sent ✓";

            button.style.background =
                "linear-gradient(135deg,#16a34a,#22c55e)";

            contactForm.reset();

            setTimeout(() => {

                button.textContent =
                    "Send Message →";

                button.style.background = "";

            }, 3000);

        }
    );

}


// =============================
// CLOSE MOBILE MENU
// =============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {

            navMenu.classList.remove("show");

            if (menuBtn) {
                menuBtn.textContent = "☰";
            }

        }

    });

>>>>>>> 03c29e6e680d062bc9a797f614b90af99ab7ad3a
});