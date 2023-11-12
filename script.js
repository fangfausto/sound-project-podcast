document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.getElementById("about");
    const homeSection = document.getElementById("home");
    const homeLink = document.querySelector('a[href="#home"]');
    const aboutLink = document.querySelector('a[href="#about"]');

    // Options for the Intersection Observer
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.99
    };

    // Function to handle the intersection changes
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the section is intersecting with the viewport and scrolled down more than 50%
                if (entry.intersectionRatio > 0.5) {
                    aboutSection.classList.add("about-visible");
                } else {
                    aboutSection.classList.remove("about-visible");
                }
            }
        });
    }

    // Create an Intersection Observer with the handleIntersection function
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe the home section
    observer.observe(homeSection);

    // Event listener for clicking on the home link
    homeLink.addEventListener("click", function (event) {
        event.preventDefault();
        aboutSection.classList.remove("about-visible");
    });

    // Event listener for clicking on the about link
    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        aboutSection.classList.add("about-visible");
    });
});

