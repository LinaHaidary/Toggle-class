function toggleNav() {
    var element = document.getElementById("thenav");
    var menuIcon = document.getElementById("homeIcon");
    var closeIcon = document.getElementById("closeIcon");
   

    element.classList.toggle("nav-open");
    homeIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
   }