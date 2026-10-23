
"use strict";

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
}

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close mobile menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

// Close mobile menu when clicking outside it
document.addEventListener("click", (event) => {
    if (
        navLinks.classList.contains("open") &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        closeMenu();
    }
});

// Update copyright year automatically
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// Green pledge interaction
const pledgeButton = document.getElementById("pledgeButton");
const pledgeMessage = document.getElementById("pledgeMessage");

let hasPledged = false;

pledgeButton.addEventListener("click", () => {
    hasPledged = !hasPledged;

    if (hasPledged) {
        pledgeMessage.textContent =
            "Thank you for taking a step towards a greener future! 🌱";

        pledgeButton.innerHTML =
            'Pledge Made <span aria-hidden="true">✓</span>';
        pledgeButton.setAttribute("aria-pressed", "true");
    } else {
        pledgeMessage.textContent = "";

        pledgeButton.innerHTML =
            'Make My Green Pledge <span aria-hidden="true">✳</span>';
        pledgeButton.setAttribute("aria-pressed", "false");
    }
});
