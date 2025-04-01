// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// 
const searchForm = document.querySelector('.search-form')
const searchBox = document.querySelector('#search-box')

document.querySelector('#search-button').onclick = (e) => {
    e.preventDefault()
    searchForm.classList.toggle('active')
    searchBox.focus()
}

const shoppingCart = document.querySelector('.shopping-cart')
const scb = document.querySelector('#shopping-cart-button')
scb.onclick = (e) => {
    e.preventDefault()
    shoppingCart.classList.toggle('active')
}

// 
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button')

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active')
    }

    if (!scb.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active')
    }
})

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal')
const itemDetailButtons = document.querySelectorAll('.item-detail-button')

itemDetailButtons.forEach((e) => {
    e.onclick = (element) => {
        element.preventDefault()
        itemDetailModal.style.display = 'flex'
    }
})

// Close Modal Box
document.querySelector('.modal .close-icon').onclick = (element) => {
        itemDetailModal.style.display = 'none'
        element.preventDefault()
    }

window.onclick = (e) => {
    if(e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none'
     }
}
