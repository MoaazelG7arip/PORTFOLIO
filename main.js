
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





