const navAnimation = () =>{
    let nav = document.querySelector("nav")

nav.addEventListener("mouseenter", () => {
    gsap.to("#nav-bottom", {
        height: "21vh",
        duration: 0.5
    });

    gsap.to(".nav-part2 h5", {
        display: "block",
        duration: 0.2
    });

    gsap.to(".nav-part2 h5 span", {
        y: 0,
        stagger: {
            amount: 0.5
        }
    });
});

nav.addEventListener("mouseleave", function () {
    gsap.to(".nav-part2 h5 span", {
        y: 25,
        stagger: {
            amount: 0.2
        }
    });

    gsap.to(".nav-part2 h5", {
        display: "none",
        duration: 0.1
    });

    gsap.to("#nav-bottom", {
        height: 0,
        duration: 0.5
    });
});

}

navAnimation();