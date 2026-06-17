gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    smooth: 1,
    effects: true,
    normalizeScroll: true
});


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
}