
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
const cartPreviewList=document.querySelector(".cart-grid")
const sideBar=document.querySelector("#sidebar-cart")
const sideBarList=document.querySelector(".sidebar-grid")
const cartQty=document.querySelector("#cart-items-number")
const increaseBtn=document.querySelectorAll(".increase-btn")
const decreaseBtn=document.querySelectorAll(".decrease-btn")
const addToChartButtons=document.querySelectorAll(".add-to-cart-button")
const cartItemsNumber=document.querySelector("#cart-items-number")
const cartItemsPreview=document.querySelector("#cart-items-list")
const totalSum=document.querySelector(".total-sum")
const totalSidebarSum=document.querySelector(".total-sidebar-sum")
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
        if(event.target.classList.contains("fas")){
            event.target.classList.remove("fas")
            event.target.classList.add("far")
        }else{
            event.target.classList.remove("far")
            event.target.classList.add("fas")
        }
    })
}

//select an option
let select=document.querySelectorAll(".select");
let selectedFilters=document.querySelector(".selected-filters")
for(i=0;i<select.length;i++){
    select[i].addEventListener("change", ()=>{
        let filterValue=event.target.options[event.target.selectedIndex].value
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
           event.target.parentNode.remove()
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


let qty=0
//increase qty of single product
for(i=0;i<increaseBtn.length;i++){
    increaseBtn[i].addEventListener("click", ()=>{
        event.stopPropagation()
        let innerQty=event.target.parentNode.parentNode.parentNode.children[0].children[0].innerHTML
        let sum=parseInt(innerQty)+1
        event.target.parentNode.parentNode.parentNode.children[0].children[0].innerHTML=sum
        }
    )
}

//decrease qty of single product
for(i=0;i<decreaseBtn.length;i++){
    decreaseBtn[i].addEventListener("click", ()=>{
        event.stopPropagation()
        let innerQty=event.target.parentNode.parentNode.parentNode.children[0].children[0].innerHTML
        let sum=parseInt(innerQty)-1
        if(innerQty==="0"){
        }else{
            event.target.parentNode.parentNode.parentNode.children[0].children[0].innerHTML=sum
            }
        }
    )
}


//add to cart button functionality 
for(i=0;i<addToChartButtons.length;i++){
    addToChartButtons[i].addEventListener("click", ()=>{
        event.stopPropagation()
         // if quantity is 0 it can not be added
         let singleProductQty=event.target.parentNode.parentNode.parentNode.children[6].children[0].children[0].innerHTML
         //get price from html document
         let listedprice=event.target.parentNode.parentNode.parentNode.children[4].innerHTML
        if(event.target.classList.contains("add-to-cart-button")){
            if(singleProductQty==="0"){
                alert("Izaberite kolicinu")
            }else{
                changeAddButton(event)
                qty++
                addToCartList(event);
                let price=parseInt(listedprice.replace(/\D/g,''))/100
                let previousSum=parseInt(totalSum.innerHTML.replace(/\D/g,''))
                let sum=(parseInt(price)*parseInt(singleProductQty))+previousSum
                let total=sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                totalSum.innerHTML=total
                cartItemsNumber.innerHTML=qty
                cartItemsPreview.style.display="block"
                cartItemsPreview.classList.add("fade-in")
                
                setTimeout(()=>{
                    cartItemsPreview.classList.remove("fade-in")
                    cartItemsPreview.classList.add("fade-out")
                },2000)
                setTimeout(()=>{
                    cartItemsPreview.style.display="none"
                    cartItemsPreview.classList.remove("fade-out")
                },4000)
                addToSideBar(event);
                totalSidebarSum.innerHTML=total
                
            }

           
        }else{
            changeAddedButton(event)
            // qty--
            // cartItemsNumber.innerHTML=qty
      
        }
    })}


//add item to cart preview


    changeAddButton=(event)=>{
        event.target.classList.remove("add-to-cart-button")
        event.target.classList.add("added-to-cart-button")
        event.target.innerHTML=""
        let word="ADDED"
        let i=document.createElement("I");
        i.classList.add("fas")
        i.classList.add("fa-check")
        let textnode=document.createTextNode(word)
        event.target.appendChild(textnode)
        event.target.appendChild(i)
    }
    changeAddedButton=(event)=>{
        event.target.classList.remove("added-to-cart-button")
        event.target.classList.add("add-to-cart-button")
        event.target.innerHTML=""
        let word="ADD"
        let i=document.createElement("I");
        i.classList.add("fas")
        i.classList.add("fa-shopping-cart")
        let textnode=document.createTextNode(word)
        event.target.appendChild(textnode)
        event.target.appendChild(i)
    }

    //creating div element for each product added to cart
addToCartList=(event)=>{
    let div1=document.createElement("DIV")
    let img=document.createElement("IMG")
        img.setAttribute("src",event.target.parentNode.parentNode.parentNode.children[1].children[0].src)
        img.setAttribute("alt"," ")
    let div2=document.createElement("DIV")
    div2.classList.add("cart-text")
    let h3=document.createElement("H3")
    h3.innerHTML=event.target.parentNode.parentNode.parentNode.children[2].children[0].innerHTML
    let p=document.createElement("P")
    p.innerHTML=event.target.parentNode.parentNode.parentNode.children[2].children[1].innerHTML
    let div3=document.createElement("DIV")
    div3.classList.add("cart-mark")
    let h5=document.createElement("H5")
    h5.innerHTML=event.target.parentNode.parentNode.parentNode.children[3].children[0].innerHTML
    let div4=document.createElement("DIV")
    div4.classList.add("x-btn")
    let div5=document.createElement("DIV")
    div5.classList.add("edge")
    div1.appendChild(img)
    div2.appendChild(h3)
    div2.appendChild(p)
    div3.appendChild(h5)
    cartPreviewList.appendChild(div1)
    cartPreviewList.appendChild(div2)
    cartPreviewList.appendChild(div3)
    cartPreviewList.appendChild(div4)

}

showSidebar=()=>{
    if(sideBar.style.display==="block"){
        sideBar.style.display="none"
    }else{
    sideBar.style.display="block"
    }
}

addToSideBar=(event)=>{

    //create complete div for single product
let sideBarDiv2=document.createElement("DIV")
let sidebarDiv1=document.createElement("DIV")
sidebarDiv1.classList.add("sidebar-x-btn")
let sidebarDiv3=document.createElement("DIV")
sidebarDiv3.innerHTML=event.target.parentNode.parentNode.parentNode.children[4].innerHTML
sidebarDiv3.classList.add("sidebar-price")
let sidebarDiv4=document.createElement("DIV")
let sidebarDiv5=document.createElement("DIV")
let div4div1=document.createElement("DIV")
let sidebarp2=document.createElement("P")
    sidebarp2.classList.add("sidebar-quantity")
    sidebarp2.innerHTML=event.target.parentNode.parentNode.parentNode.children[6].children[0].children[0].innerHTML
let div4div2=document.createElement("DIV")
let divbtn1=document.createElement("BUTTON")
    divbtn1.classList.add("sidebar-plus-btn")
let divbtn2=document.createElement("BUTTON")
    divbtn2.classList.add("sidebar-minus-btn")
    divbtn2.innerHTML='<i class="fas fa-chevron-down"></i>'
    divbtn1.innerHTML='<i class="fas fa-chevron-up" ></i>'
    div4div2.appendChild(divbtn1)
    div4div2.appendChild(divbtn2)
    div4div1.appendChild(sidebarp2)
    sidebarDiv4.appendChild(div4div1)
    sidebarDiv5.appendChild(div4div2)
    sidebarDiv5.classList.add("sidebar-inc-dec-buttons")
    let h3=document.createElement("H3")
    h3.innerHTML=event.target.parentNode.parentNode.parentNode.children[2].children[0].innerHTML
    let p=document.createElement("P")
    p.innerHTML=event.target.parentNode.parentNode.parentNode.children[2].children[1].innerHTML
    sideBarDiv2.appendChild(h3)
    sideBarDiv2.appendChild(p)
sideBarList.appendChild(sidebarDiv1)
sideBarList.appendChild(sideBarDiv2)
sideBarList.appendChild(sidebarDiv3)
sideBarList.appendChild(sidebarDiv4)
sideBarList.appendChild(sidebarDiv5)


}
