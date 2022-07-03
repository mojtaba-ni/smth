let arrowClick = document.querySelector('.impTitleMobile')
let drop = document.querySelector('.dropdownShow')
let ArrowUp = document.querySelector('.arrowUp')
let ArrowDown = document.querySelector('.chevronWrapper')
let searchContainer = document.querySelector('.inputSrch')
let TitleIc = document.querySelector('.TitleIc')


function dropdown () {
    arrowClick.addEventListener('click' , (e)=>{
        drop.style.display = 'block'
        ArrowDown.style.display = 'none'
        ArrowUp.style.display = 'block'
    })
}

function dropdownClose () {

    arrowClick.addEventListener('click' , (e)=>{
        drop.style.display = 'none'
        ArrowUp.style.display = 'none'
        ArrowDown.style.display = 'block'
    })
}

function dropdownSearch () {
    TitleIc.addEventListener('click' , (e)=>{
        searchContainer.style.display = 'block'
    })
}

function dropdownCloseSearch () {

    TitleIc.addEventListener('click' , (e)=>{
        searchContainer.style.display = 'none'
    })
}