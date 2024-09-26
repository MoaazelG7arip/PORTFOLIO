
gsap.registerPlugin(ScrollTrigger,TextPlugin)
const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)


let words = ['Informations', 'Skills','Education','Projects'];

let tl = gsap.timeline({
    repeat: -1,
});


words.forEach((word)=>{
    let innerTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 3
    })
    innerTimeline.to('.text', {
        text: word,
        duration: 2,
        onUpdate: ()=>{
            cursorTimeline.restart();
            cursorTimeline.pause();
        },
        onComplete: ()=>{
            cursorTimeline.play()
        }
    })
    tl.add(innerTimeline)
})

let cursorTimeline = gsap.timeline({
    repeat: -1,
    repeatDelay: .5,
});
cursorTimeline.fromTo(".cursor", {
    opacity: 1,
},{
    opacity: 0,
    delay: .5
})

gsap.fromTo(
   ".one .meta",
    {
        yPercent: -10,
        opacity: 0,
    },
    {
        yPercent: 0,
        opacity: 1,
        duration: 2,
        ease: "easeIn",
    }
);
document.querySelectorAll('.left').forEach(sec=>{
    gsap.fromTo(
        sec,
         {
             opacity: 0,
             xPercent: -100,
         },
         {
             opacity: 1,
             xPercent: 0,
             scrollTrigger: {
                trigger: sec,
                 start: "top 100%",
                 end: "bottom 100%",
                 scrub: true,
             },
             duration: 2,
             ease: "ease",
         }
    );
})
document.querySelectorAll('.right').forEach(sec=>{
    gsap.fromTo(
        sec,
         {
             opacity: 0,
             xPercent: 100,
         },
         {
             opacity: 1,
             xPercent: 0,
             scrollTrigger: {
                trigger: sec,
                 start: "top 100%",
                 end: "bottom 100%",
                 scrub: true,
             },
             duration: 2,
             ease: "ease",
         }
    );
})
document.querySelectorAll('.education .w-75 > div').forEach(sec =>{
    gsap.fromTo(
        sec,
         {
             opacity: 0,
             yPercent: 40,
         },
         {
             opacity: 1,
             yPercent: 0,
             scrollTrigger: {
                trigger: sec,
                 start: "top 80%",
             },
             duration: 1,
             ease: "ease",
         }
    );
})


