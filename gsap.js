gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    smooth: 1,
    effects: true,
    normalizeScroll: true
});

ScrollTrigger.create({
    trigger: ".case-studies",
    pin: true,
    start: "center center",
    end: ".case-studies",
});

function scrollCaseStudies(){
        smoother.scrollTo(".case-studies", true, "center center");
}