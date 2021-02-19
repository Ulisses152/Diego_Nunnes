//Abrir menu
document.getElementById("myBtn").addEventListener("click", openMenu);

function openMenu() {

    
    var myButtonClasses = document.getElementById("box-menu").classList;


    if (myButtonClasses.contains("menu-closed")) {
   
       myButtonClasses.remove("menu-closed");
       myButtonClasses.add("menu-opened")
   
    } else {
       myButtonClasses.remove("menu-opened") 
       myButtonClasses.add("menu-closed");
   
    }
   
    

   }

  //STICK MENU

  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

// Get the navbar
var menu = document.getElementById("menu-sticky");

// Get the offset position of the navbar
var stickymenu = menu.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= stickymenu) {
    menu.classList.add("sticky")
  } else {
    menu.classList.remove("sticky");
  }
}



