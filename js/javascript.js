window.onload = function(){
    document.querySelector('.hamburger-menu').addEventListener("click", function(){
        if(document.querySelector('nav.menu-mobile').style.display == 'block'){
            document.querySelector('nav.menu-mobile').style.display = 'none';
        } else {
            document.querySelector('nav.menu-mobile').style.display = 'block';
        }
    });
};