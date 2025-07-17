document.addEventListener("DOMContentLoaded", function () {
    const targets = document.querySelectorAll(".about-section, .why-us");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    targets.forEach(section => {
        section.classList.add("fade-in-hidden");
        observer.observe(section);
    });
});