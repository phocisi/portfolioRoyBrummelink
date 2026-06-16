gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    smooth: 1,
    effects: true,
    normalizeScroll: true
});

ScrollTrigger.create({
    trigger: ".project-header",
    pin: true,
    start: "center center",
    end: ".case-studies",
});

function scrollCaseStudies(){
        smoother.scrollTo(".project-header", true, "center center");
}