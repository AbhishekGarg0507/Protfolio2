function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
  .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
  .to(".purple", {backgroundColor: "#28a92b"}, 0);

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
// init();

// ...............................................................................................
var crsr = document.querySelector(".cursor");
var blur = document.querySelector(".cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+20 + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x-200+"px";
    blur.style.top = dets.y-200+"px";
})

var allh4 = document.querySelectorAll(".nav h4 , .logo , .circle, .about-in p a, .skill-container h2");
allh4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(dets){
        crsr.style.scale =2;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave",function(dets){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #a8c300";
        crsr.style.backgroundColor = "#a8c300";
    })
})
var allh4 = document.querySelectorAll(".skill-container h2, .skill-content, .card");
allh4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(dets){
        crsr.style.scale =2;
        crsr.style.border = "1px solid #a8c300";
        crsr.style.backgroundColor = "transparent";
        blur.style.backgroundColor = "#bfd727bf"
    })
    elem.addEventListener("mouseleave",function(dets){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #a8c300";
        crsr.style.backgroundColor = "#a8c300";
        blur.style.backgroundColor = "#b5c73f38"
    })
})

gsap.to(".nav",{
    backgroundColor:"#111",
    height:"50px",
    duration:.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        markers:true,
        start:"top -11%",
        end:"top -10%",
        scrub:1
    }
}) 
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        scroller:"body",
        markers:true,
        start:"top -8%",
        end:"top -10%",
        scrub:3,
        // duration:.5
    }
})
tl.to(".home h1",{
    x:-90,
},"a")
.to(".home h2",{
    x:90,
},"a")
.to(".icon",{
    padding:"50px"
},"a")


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top 20%",
        end:"top -100%",
        scrub:3  
    }
})
tl2.to(".main",{
    backgroundColor: "#000",
    
})
var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".skill",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 10%",
        scrub:3  
    }
})
tl3.to(".main",{
    backgroundColor: "#fff",
})
var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".certificates",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 10%",
        scrub:3  
    }
})
tl4.to(".main",{
    backgroundColor: "#000",
})
// var tl3 = gsap.timeline({
//     scrollTrigger:{
//         trigger:".skill",
//         scroller:"body",
//         // markers:true,
//         start:"top 70%",
//         end:"top -200%",
//         scrub:4 
//     }
// })

// tl3.to(".main",{
//     backgroundColor:"red"
// }).to(".cursor-blur",{
//     // backgroundColor:"#b5c73fd9"
// })
// var tl4 = gsap.timeline({
//     scrollTrigger:{
//         trigger:".work",
//         scroller:"body",
//         // markers:true,
//         start:"top 70%",
//         end:"top -300%",
//         scrub:4 
//     }
// })
// tl4.to(".main",{
//     backgroundColor:"blue"
// }).to(".cursor-blur",{
//     // backgroundColor:"#b5c73fd9"
// })

// var tl5 = gsap.timeline({
//     scrollTrigger:{
//         trigger:".main",
//         scroller:"body",
//         markers:true,
//         start:"top 70%",
//         end:"top -90%",
//         scrub:4
//     }
// })

// tl5.to(".contact",{
//     height:"100%",
//     duration:1,
    
// }).to(".work",{
// height:"0vh"
// })
