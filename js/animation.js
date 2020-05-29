
window.onload = function () {
    gsap.registerPlugin(CSSRulePlugin);

    var rule = CSSRulePlugin.getRule(".hero-text h1::after");

    var tl = gsap.timeline({});

    tl.to(rule, { duration: 1.5, cssRule: { scaleY: 0 } })
    tl.from('.hero-text p', { duration: 1, opacity: 0, x: -50 })
    tl.from('.hero-btn', { duration: 1, opacity: 0, x: 50 })

    var tlC = gsap.timeline({ repeat: -1 });
    tlC.from('.arrow', { duration: 1.8, delay: .5, opacity: 0, y: -15 })
};   