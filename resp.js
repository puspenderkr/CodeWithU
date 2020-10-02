burger= document.querySelector('.burger')
navlist= document.querySelector('.navlist')
navbar= document.querySelector('.navbar')



burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav');
    navlist.classList.toggle('v-class');
})