window.addEventListener('DOMContentLoaded', () => {
    /* Scroll to top button */
    buttondown=document.querySelector('.button-down');
    buttondown.onclick=() => {document.documentElement.scrollTop=0;}
    window.addEventListener('scroll', () => {
        if(window.pageYOffset<200) buttondown.style.visibility="hidden";
        else buttondown.style.visibility="visible";
    })
    /* End scroll to top button */

    /* Mobile */
    showmenuitem=document.querySelector('.show-menu-item');
    menuitem=document.querySelector('.menu-item')
    console.log(menuitem);
    showmenuitem.onclick=()=>{
        menuitem.classList.toggle("show-element");
    }

    showmenu=document.querySelector('.fa-bars');
    menu=document.querySelector('.mobile-menu');
    showmenu.onclick=()=>{
        menu.classList.toggle("show-element");
    }
    /* End Mobile */
});

