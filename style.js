
cursor();
scrollTimeLines();
// ...............................................................................................
function cursor(){
    var crsr = document.querySelector(".cursor");
var blur = document.querySelector(".cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+20 + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x-200+"px";
    blur.style.top = dets.y-200+"px";
})

var allh4 = document.querySelectorAll(".nav h4 , .logo , .circle, .about-in p a, .skill-container h2, a, .form .button");
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
var allh4 = document.querySelectorAll(".skill-container h2, .skill-content ");
allh4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(dets){
        crsr.style.scale =2;
        crsr.style.border = "1px solid #a8c300";
        crsr.style.backgroundColor = "transparent";
        blur.style.backgroundColor = "#b5c73f"
    })
    elem.addEventListener("mouseleave",function(dets){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #a8c300";
        crsr.style.backgroundColor = "#a8c300";
        blur.style.backgroundColor = "#b5c73f90"
    })
})
var allh4 = document.querySelectorAll(".card");
allh4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(dets){
        crsr.style.scale =2;
        crsr.style.border = "1px solid #111";
        crsr.style.backgroundColor = "transparent";
        blur.style.backgroundColor = "#b5c73f";
        document.querySelector(".main").style.backgroundColor = "#ecff7298";
    })
    elem.addEventListener("mouseleave",function(dets){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #a8c300";
        crsr.style.backgroundColor = "#a8c300";
        blur.style.backgroundColor = "#b5c73f50"
        document.querySelector(".main").style.backgroundColor = "#fff";
    })
})
}


function scrollTimeLines(){
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
            scrub:3
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
            trigger:".home",
            scroller:"body",
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
    
}
