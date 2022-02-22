var navBurger=document.getElementById("myburger");
var navBar=document.getElementById("deepnav");
var clic=true;
function navFunction(){
  if(clic==true){
    navBar.style.visibility="visible";
  }
  clic=!clic;
 if(clic){
    navBar.style.visibility="hidden";
 }

  
}

var cancel=document.getElementById("cancel");

function cancelUl(){
    navBar.style.visibility="hidden";
}