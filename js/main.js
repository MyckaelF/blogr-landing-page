const menuHamburger = document.querySelector('.menuMobile')
const containerMenu = document.querySelector('.containerMenu')

menuHamburger.onclick = () => {
    containerMenu.classList.toggle('active')

    const contains = containerMenu.classList.contains('active')

    if(contains) {
        menuHamburger.setAttribute('src', 'images/icon-close.svg')
    } else  {
        menuHamburger.setAttribute('src', 'images/icon-hamburger.svg')
    }
}