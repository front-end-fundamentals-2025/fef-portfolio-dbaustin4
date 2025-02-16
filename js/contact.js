document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("form");

    // Create a message container dynamically
    const messageContainer = document.createElement("p");
    messageContainer.classList.add("form-message");
    contactForm.appendChild(messageContainer);

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default behaviour

        messageContainer.textContent = "Thank you for your message! I will get back to you soon.";

        contactForm.reset();
    });
});
