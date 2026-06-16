gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    smooth: 1,
    effects: true,
    normalizeScroll: true
});

function scrollCaseStudies(){
        smoother.scrollTo(".case-studies", true);
}