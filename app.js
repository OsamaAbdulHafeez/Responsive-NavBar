let width = 0
let logo = document.querySelector('.logo')
let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
let MenuAndIcons = document.querySelector('.MenuAndIcons')
let socialMedia = document.querySelector('.socialMedia')
let main = document.querySelector('.main')
let content = document.querySelector(".content")
let cross = document.querySelector('.cross')
let fake = "yes"
// console.log(burger.className)
function Screenwidth(flag) {
    width = window.innerWidth
    if (width < 992) {
        if (fake == "yes") {
            burger.classList.add('burger2')
            MenuAndIcons.classList.add('menuIcons')
        }

        // console.log(width)
    }
    else {
        burger.classList.remove('burger2')
        main.classList.remove('content')
        main.classList.add('main')
        MenuAndIcons.classList.remove('menuIcons')
        cross.classList.remove('crossShow')
        fake = "yes"
    }
}
Screenwidth()
setInterval(Screenwidth, 100)

console.log(main)
function Burgerhandler() {
    if (fake == "yes") {
            main.classList.remove('main')
            main.classList.add('content')
            MenuAndIcons.classList.remove('menuIcons')
            fake = "no"
            cross.classList.add('crossShow')
    }
    else {
        main.classList.add('main')
        main.classList.remove('content')
        MenuAndIcons.classList.add('menuIcons')
        cross.classList.remove('crossShow')
        // main.removeChild(bodyDiv)
        fake = "yes"
    }
    // content.style.display = "block"
}

function crossBtn(){
    main.classList.remove('content')
    main.classList.add('main')
    MenuAndIcons.classList.add('menuIcons')
    cross.classList.remove('crossShow')
    fake = "yes"
}

