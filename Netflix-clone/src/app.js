const nav = document.getElementById('nav')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 125){
        nav.classList.add('nav-back');
    } else{
        nav.classList.remove('nav-back');
    }
})