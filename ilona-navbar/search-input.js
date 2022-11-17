const search = document.querySelector('.search')
const btn = document.querySelector('.btn-search-input')
const input = document.querySelector('.input')
const openInput = document.getElementById('open-input');


btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})
