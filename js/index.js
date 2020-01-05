
// sticky navbar
window.onscroll = ()=> {myFunction()};
const navbar = document.querySelector(".navbar");
const sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

let data=[
    {
        image:"./images/watch1.png",
        name:"Venice silver automatic",
        brand:"G-SHOCK",
        link:"#"
    },
    {
        image:"./images/watch2.png",
        name:"Slim Collection Series 5",
        brand:"ALFRED SUNG",
        link:"#"
    },
    {
        image:"./images/watch3.png",
        name:"Venice silver Automatic",
        brand:"G-SHOCK",
        link:"#"
    },
    {
        image:"./images/watch4.png",
        name:"Venice silver Automatic",
        brand:"G-SHOCK",
        link:"#"
    },
    {
        image:"./images/watch5.png",
        name:"Venice silver Automatic",
        brand:"G-SHOCK",
        link:"#"
    },
    {
        image:"./images/watch6.png",
        name:"Venice silver Automatic",
        brand:"G-SHOCK",
        link:"#"
    },
    {
        image:"./images/watch7.png",
        name:"Venice silver Automatic",
        brand:"G-SHOCK",
        link:"#"
    }
]

//slideshow
const arrowLeft=document.querySelector(".slideshow-btn1")
const arrowRight=document.querySelector(".slideshow-btn2")
const mainPicture=document.querySelector(".main-slideshow-image")
const brandText=document.querySelector(".header-text");
const mainText=document.querySelector(".header-title")
const exploreText=document.querySelector(".explore-text1")
let slideShowImage=document.querySelector(".current-slideshow-image")
let currentIndex=0;


previousPreview=()=>{
    if(currentIndex-1<0){
        slideShowImage.src=data[data.length-1].image
    }else{
        slideShowImage.src=data[currentIndex-1].image
    }
}
nextPreview=()=>{
    if(currentIndex+1>data.length-1){
        slideShowImage.src=data[0].image
    }else{
        slideShowImage.src=data[currentIndex+1].image
    }
}
exitPreview=()=>{
    slideShowImage.src=data[currentIndex].image
}

nextSlide=()=>{
    if(mainPicture.classList.contains("fade-in")){
        mainPicture.classList.remove("fade-in")
    }
    mainPicture.classList.add("fade-out")
    setTimeout(()=>{
        mainPicture.classList.remove("fade-out")
        if(currentIndex+1>data.length-1){
            currentIndex=0
        }else{
            currentIndex=currentIndex+1
        }
        mainPicture.src=data[currentIndex].image
        mainPicture.style.width="263px"
        mainPicture.style.height="427px"
        mainPicture.classList.add("fade-in")
        mainText.innerHTML=data[currentIndex].name
        nextPreview()
        
    },1500)
}
previousSlide=()=>{
    if(mainPicture.classList.contains("fade-in")){
        mainPicture.classList.remove("fade-in")
    }
    mainPicture.classList.add("fade-out")
    setTimeout(()=>{
        mainPicture.classList.remove("fade-out")
        if(currentIndex-1<0){
            currentIndex=data.length-1
        }else{
            currentIndex=currentIndex-1
        }
        mainPicture.src=data[currentIndex].image
        mainPicture.style.width="263px"
        mainPicture.style.height="427px"
        mainPicture.classList.add("fade-in")
        mainText.innerHTML=data[currentIndex].name
        previousPreview()
    },1500)
}

//open close extra info
const tableRows=document.querySelectorAll("#table-toggler");

toggleExtraInfo=(id, self)=>{
    let iconclass=self.childNodes[17].childNodes[0].classList
    let extraInfo=document.querySelector(`#${id}`)
    if(extraInfo.style.display!="none"){
        extraInfo.style.display="none"
        self.removeAttribute("id")
        iconclass.remove("fa-chevron-up")
        iconclass.add("fa-chevron-down")

    }else{
        extraInfo.style.display="table-row"
        self.setAttribute("id", "marked-row")
        iconclass.remove("fa-chevron-down")
        iconclass.add("fa-chevron-up")
    }
}

//toggle star

const stars=document.querySelectorAll("#product-star");
for(i=0;i<stars.length;i++){
    stars[i].addEventListener("click", ()=>{
        event.stopPropagation()
        if(this.classList.contains("fas")){
            this.classList.remove("fas")
            this.classList.add("far")
        }else{
            this.classList.remove("far")
            this.classList.add("fas")
        }
    })
}

//select an option
let select=document.querySelectorAll(".select");
let selectedFilters=document.querySelector(".selected-filters")
for(i=0;i<select.length;i++){
    select[i].addEventListener("change", ()=>{
        let filterValue=this.options[this.selectedIndex].value
        console.log(this.options[this.selectedIndex])
        if(filterValue==="0"){
        }else{
            let li=document.createElement("LI");
            li.classList.add("selected-filters-item")
            let p=document.createElement("P");
            let p2=document.createElement("P");
            let textnode=document.createTextNode(filterValue)
            p.appendChild(textnode)
            p2.classList.add("x-btn")
            li.appendChild(p)
            li.appendChild(p2)
            selectedFilters.appendChild(li)
            getNewFilters()
            
        }
    })}


//remove selected-filter
let selFilters=document.querySelectorAll(".x-btn")
getNewFilters=()=>{
    selFilters=document.querySelectorAll(".x-btn")
    for(i=0;i<selFilters.length;i++){
        selFilters[i].addEventListener("click", ()=>{
           this.parentNode.remove()
        })}
}
getNewFilters()


//show on hover small cart 
let cartPreview=document.querySelector("#cart-items-list")
let cartImage=document.querySelector(".nav-cart-icon")

cartImage.addEventListener("mouseover", ()=>{
    cartPreview.style.display="block"
})
cartImage.addEventListener("mouseout", ()=>{
    cartPreview.style.display="none"
})


//cart

const cartQty=document.querySelector("#cart-items-number")
let qty=1
