
let icon = document.querySelector('.icon')
let iconActive = document.querySelector('.iconActive')
let responseLiHeart = document.querySelector('.responseLiHeart')
let responseLi = document.querySelector('.responseLi')
let iconMessage = document.querySelector('.iconMessage')
let iconMessageActive = document.querySelector('.iconMessageActive')
let inputWrapperNavbar = document.querySelector('.inputWrapperNavbar')
let scrollToTop = document.querySelector('.scrollToTop')

function HandleIconActive (){
    responseLiHeart.addEventListener('click', ()=>{
        icon.style.display = "none";
        iconActive.style.display = "block";
    })
}
function HandleIconMessageActive (){
    responseLi.addEventListener('click', ()=>{
        iconMessage.style.display = "none";
        iconMessageActive.style.display = "block";
    })
}

window.addEventListener('scroll' , (e)=>{
    if(window.scrollY < 100){
        inputWrapperNavbar.style.display = 'none'
        scrollToTop.style.display = 'none'
    }
    if(window.scrollY > 100){
        inputWrapperNavbar.style.display = 'block'
        scrollToTop.style.display = 'block'
    }
})

function scrolTop () {
    window.scrollTo({top:0 , behavior: 'smooth'})
}

