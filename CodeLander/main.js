window.addEventListener('DOMContentLoaded', () => {
    show=document.querySelectorAll('.show');
    panel=document.querySelectorAll('.panel');
    for (let x = 0; x < show.length; x++) {
        show[x].onclick=() =>{
            panel[x].classList.toggle('active');
        }
    }
    section1=document.querySelector('#top');
    console.log(section1);
    menuitem=document.querySelectorAll('.menu-item');
    window.addEventListener('scroll', () => {
        vt=window.pageYOffset;
        console.log(vt);
        if(vt>=30){
            menuitem.forEach((x) => {
                x.setAttribute('data-top', ' ');
            });
            section1.classList.add('top-fixed');
        }
        else{
            menuitem.forEach((x) => {
                x.setAttribute('data-top',x.getAttribute('data-unchange'));
            });
            section1.classList.remove('top-fixed');
        }
    })

    menubars=document.querySelector('.menu-bars')
    menu=document.querySelector('.menu');
    menubars.onclick=()=>{
        menu.classList.toggle('menu-mobile-show')
    }
});
