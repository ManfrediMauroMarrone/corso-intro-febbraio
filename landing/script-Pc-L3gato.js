const show = document.querySelector('#btn-show')
const menu = document.querySelector('.hidden-menu')
const closeIcon = document.querySelector('#close-icon')

show.addEventListener('click', () => {
    menu.classList.remove('hidden')
})

closeIcon.addEventListener('click', () => {
    menu.classList.add('hidden')
})