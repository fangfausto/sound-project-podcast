document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("about");

    // Options for the Intersection Observer
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Adjust this threshold as needed
    };

    // Function to handle the intersection changes
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the section is intersecting with the viewport, make it visible
                aboutSection.style.opacity = "1";
                aboutSection.style.visibility = "visible";
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }

    // Create an Intersection Observer with the handleIntersection function
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe the about section
    observer.observe(aboutSection);
});
