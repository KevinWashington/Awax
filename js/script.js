/*===== MENU MOBILE =================================*/
let menuOpener = document.querySelector(".menu .menu-opener") 
let menu = document.querySelector(".menu nav")

menuOpener.addEventListener("click",() => {
    menu.classList.toggle("mostrarMenu")
    if(menu.classList.contains("mostrarMenu")){
        setTimeout(() =>{
            menu.style.right = "0"
        }, 100)
    }else{
        menu.style.right = "-80vw"
    }
    
    
})


/*===== BANNER SLIDER =================================*/
let pointerBannerActive = document.querySelectorAll(".banner .pointer")
let pointerBanner1 = document.querySelector(".banner .pointer:nth-child(1)")
let pointerBanner2 = document.querySelector(".banner .pointer:nth-child(2)")
let pointerBanner3 = document.querySelector(".banner .pointer:nth-child(3)")
let sliderBanner = document.querySelector(".banner .sliders")

pointerBanner1.addEventListener("click", (el)=>{
    sliderBanner.style.marginLeft = "0"
    pointerBannerActive.forEach((item)=>{
        item.classList.remove("active")
    })
    el.target.classList.add("active")
})

pointerBanner2.addEventListener("click", (el)=>{
    sliderBanner.style.marginLeft = "-100vw"
    pointerBannerActive.forEach((item)=>{
        item.classList.remove("active")
    })
    el.target.classList.add("active")
})

pointerBanner3.addEventListener("click", (el)=>{
    sliderBanner.style.marginLeft = "-200vw"
    pointerBannerActive.forEach((item)=>{
        item.classList.remove("active")
    })
    el.target.classList.add("active")
})

/*===== TEAM SLIDER =================================*/

let pointerTeamActive = document.querySelectorAll(".section-teamarea .pointer")
let pointerTeam1 = document.querySelector(".section-teamarea .pointer:nth-child(1)")
let pointerTeam2 = document.querySelector(".section-teamarea .pointer:nth-child(2)")
let pointerTeam3 = document.querySelector(".section-teamarea .pointer:nth-child(3)")
let sliderTeam = document.querySelector(".section-teamarea .sliders")

pointerTeam1.addEventListener("click", (el)=>{
    sliderTeam.style.marginLeft = "0"
    pointerTeamActive.forEach((item)=>{
        item.classList.remove("active")
    })
    el.target.classList.add("active")
})

pointerTeam2.addEventListener("click", (el)=>{
    sliderTeam.style.marginLeft = "-304px"
    pointerTeamActive.forEach((item)=>{
        item.classList.remove("active")
    })
    el.target.classList.add("active")
})

pointerTeam3.addEventListener("click", (el)=>{
    sliderTeam.style.marginLeft = "-608px"
    pointerTeamActive.forEach((item)=>{
        item.classList.remove("active")
    })
    el.target.classList.add("active")
})

/*===== REVIEWS SLIDER =================================*/

let pointerReviewActive = document.querySelectorAll(".section-reviews .pointer")
let pointerReview1 = document.querySelector(".section-reviews .pointer:nth-child(1)")
let pointerReview2 = document.querySelector(".section-reviews .pointer:nth-child(2)")
let pointerReview3 = document.querySelector(".section-reviews .pointer:nth-child(3)")
let sliderReview = document.querySelector(".section-reviews .sliders")

pointerReview1.addEventListener("click", (el)=>{
    sliderReview.style.marginLeft = "0"
    pointerReviewActive.forEach((item)=>{
        item.classList.remove("active")
    })
    el.target.classList.add("active")
})

pointerReview2.addEventListener("click", (el)=>{
    sliderReview.style.marginLeft = "-100%"
    pointerReviewActive.forEach((item)=>{
        item.classList.remove("active")
    })
    el.target.classList.add("active")
})

pointerReview3.addEventListener("click", (el)=>{
    sliderReview.style.marginLeft = "-200%"
    pointerReviewActive.forEach((item)=>{
        item.classList.remove("active")
    })
    el.target.classList.add("active")
})