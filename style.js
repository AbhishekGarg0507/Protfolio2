gsap.to(".nav",{
    backgroundColor:"#111",
    height:"50px",
    duration:.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -11%",
        end:"top -10%",
        scrub:1
    }
})
cursor();
animateHomeColor();
// SkillColor();
// certiColor();
animateHome();

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

var allh4 = document.querySelectorAll(".nav h4 , .logo , .circle, .about-in p a, .skill-container h2, a, .form .button, .card");
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
var allh4 = document.querySelectorAll(".card");
allh4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(dets){
        crsr.style.scale =2;
        crsr.style.border = "1px solid #111";
        crsr.style.backgroundColor = "transparent";
        document.querySelector(".main").style.backgroundColor = "#ecff7298";
    })
    elem.addEventListener("mouseleave",function(dets){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #a8c300";
        crsr.style.backgroundColor = "#a8c300";
        document.querySelector(".main").style.backgroundColor = "#111";
    })
})
}

function animateHomeColor(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:".home",
            scroller:"body",
            start:"top 20%",
            end:"top -100%",
            scrub:3 
        }
    })
    tl.to(".main",{
        backgroundColor: "#000"
    })
    }
function animateHome(){
     
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:".home",
            scroller:"body",
            // markers:true,
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
        padding:"50px",
        onComplete:function(){
            animateAbout();
        }
    },"a")
    
}
function animateAbout(){
    tl = gsap.timeline({
        scrollTrigger:{
            trigger:".about",
            scroller:"body",
            // markers:true,
            start:"top 20%",
            end:"top 30%",
            scrub:5
        }
    })
    tl.from(".about-in p",{
        y:50,
        opacity:0,
        duration:2,
        stagger:1 
    },"b")
    .from(".img-container .profileImage",{
        y:60,
        rotate:"10deg",
        opacity:0,
        duration:1,
        onComplete:function(){
            animateSkill();
        }
    })
}

function animateSkill(){
    tl = gsap.timeline({
        scrollTrigger:{
            trigger:".skill",
            scroller:"body",
            // markers:true,
            start:"top 60%",
            end:"top 0%",
            scrub:5
        }
    })
    tl
    .from(".icon2",{
        transform:"translateX(0)",
        padding:"0px",
        duration:1,
        opacity:0
    })
    .from(".skill .hr",{
        width:"0%",
        duration:2,
        opacity:0
        // delay:2
    })
    .from(".heading-skill",{
        opacity:0,
        // delay:3,
        y:100,
        duration:2
    })
    .from(".skill-container h2",{
        y:100,
        opacity:0,
        // delay:1,
        duration:1,
        stagger:.2,
        onComplete:function(){
            animatecards();
        }
    })

}
function animatecards(){
    gsap.from(".row .card",{
        width:0,
        scale:0,
        opacity:0,
        scrollTrigger:{
            trigger:".row",
            scroller:"body",
            start:"top 40%",
            end:"top 55%",
            scrub:2

        }
    })
    gsap.from(".row1 .card",{
        width:0,
        scale:0,
        opacity:0,
        scrollTrigger:{
            trigger:".row1 .card",
            scroller:"body",
            markers:true,
            start:"top 100%",
            end:"top 85%",
            scrub:2

        }
    })

    }
function certiColor(){
    gsap.to(".main",{
        backgroundColor: "#000",
        scrollTrigger:{
            trigger:".certificates",
            scroller:"body",
            // markers:true,
            start:"top 70%",
            end:"top 10%",
            scrub:3  
        }
    })
}
function SkillColor(){
    gsap.to(".main",{
        backgroundColor: "#fff",
        scrollTrigger:{
            trigger:".skill",
            scroller:"body",
            // markers:true,
            start:"top 70%",
            end:"top 10%",
            scrub:3
        }
    })
}