function toggleNavbar(event) { 
   var navbarMenu = document.getElementById("navbarMenu");


    if (navbarMenu.style.display==="none") {
        navbarMenu.style.display="block"
        navbarMenu.classList.add("show");
    }
    else{
        navbarMenu.style.display="none"
    }
}
function hiddenNavbar() {
    var bars = document.getElementsByClassName("navbar-toggle").style.display="none" ; 
}
