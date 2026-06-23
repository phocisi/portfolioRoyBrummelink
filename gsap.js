gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    smooth: 1,
    effects: true,
    normalizeScroll: true
});

<<<<<<< Updated upstream

function scrollCaseStudies(){
    gsap.to(smoother, {
        scrollTop: smoother.offset(".case-studies", "top top"),
        duration: 1
    })
}

function scrollTestimonial(){
    gsap.to(smoother, {
        scrollTop: smoother.offset(".testimonial", "top top"),
        duration: 1
    })
}

function scrollRecent(){
    gsap.to(smoother, {
        scrollTop: smoother.offset(".recent-work", "top top"),
        duration: 1
    })
}

function scrollContact(){
    gsap.to(smoother, {
        scrollTop: smoother.offset(".contact", "top top"),
        duration: 1
    })
=======
ScrollTrigger.create({
    trigger: ".project-header",
    pin: true,
    start: "center center",
    end: ".case-first-work",
});

function scrollCaseStudies(){
    console.log("scroll");
        smoother.scrollTo(".project-header", true, "center center");
>>>>>>> Stashed changes
}