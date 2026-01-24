
var sidenav = document.querySelector(".side-navbar")

function showNavbar()
    {
        sidenav.style.left="0"
    }

function closeNavbar() 
    {
        sidenav.style.left="-60%"
    }

document.querySelectorAll(".new-arrival button")
        .forEach(function (buy){
                buy.addEventListener("click", function(){
                    window.location.href = "buy.html";
                                    });
                                });
