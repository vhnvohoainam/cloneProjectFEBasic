window.addEventListener('DOMContentLoaded', () => {
    /* Scroll to top button */
    buttondown=document.querySelector('.button-down');
    buttondown.onclick=() => {document.documentElement.scrollTop=0;}
    window.addEventListener('scroll', () => {
        if(window.pageYOffset<200) buttondown.style.visibility="hidden";
        else buttondown.style.visibility="visible";
    })
    /* End scroll to top button */
    
});

