const words =["Bonjour, je m'appelle Andy"," "," Je cherche un stage de 10 semaines","du 19 Avril au 27 juin 2022"," ","comme développeur Web et Web mobile junior."," "," "]
let cursor = gsap.to('.cursor', {opacity: 0, ease:"power2.inOut", repeat:-1})

let boxTl = gsap.timeline()

boxTl.to('.box', {duration: 1, width:"17vw", delay: 0.5, ease: "power4.inOut"})
.from('.hi', {duration: 1, y:"7vw", ease: "power3.out", onComplete: () => masterTl.play()})
.to('.box', {duration: 1, height:"7vw", ease: "elastic.out"})
.to('.box', {duration: 2, autoAlpha:0.5, yoyo: true, repeat: -1})

let masterTl = gsap.timeline({repeat: -1}).pause()

words.forEach(word => {
    let tl = gsap.timeline({repeat: 0, yoyo: true, repeatDelay: 1})
    tl.to('.text', {duration: 3, text: word})
    masterTl.add(tl)
});