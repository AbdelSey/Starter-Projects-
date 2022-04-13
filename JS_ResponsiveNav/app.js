
// followed a youtube tutorial on how to make a responsive navbar with animations for mobile




const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li")


    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        navLinks.forEach((link, index) => {
            if ( link.style.animation) {
                link.style.animation = " ";
            }
            else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 1.5}s`;
            }

         });
    });

}

    // animate Links



navSlide();
