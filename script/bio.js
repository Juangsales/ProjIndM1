window.onscroll = function() {diminuirmenu()};

var navbar = document.getElementById("topfixo");
var sticky = navbar.offsetTop;

function diminuirmenu() {
  if (window.pageYOffset >= sticky) {
    document.getElementById("nome").style.margin = "10px";
    document.getElementById("nome").style.fontSize = "15px";
    document.getElementById("lista").style.fontSize = "12px";
    document.getElementById("nome").style.padding = "0px";
    document.getElementById("lista").style.padding = "0px";
    document.getElementById("nome").style.height = "50px";
    document.getElementById("lista").style.height = "45px";
    navbar.classList.add("sticky");

  } else {
    
    document.getElementById("nome").style.margin = "20px";
    document.getElementById("nome").style.fontSize = "25px";
    document.getElementById("lista").style.fontSize = "18px";
    document.getElementById("nome").style.padding = "10px";
    document.getElementById("lista").style.padding = "10px";
    document.getElementById("nome").style.height = "70px";
    document.getElementById("lista").style.height = "60px";
    navbar.classList.remove("sticky");
  }
}
