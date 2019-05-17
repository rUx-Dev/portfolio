window.onscroll = function() {resizeNavbar();};

function resizeNavbar() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
    document.getElementById("navbar").style.height = "6vh";
    document.getElementById("navbar").style.background = "rgba(0,0,0,1)";
    document.getElementById("nav-img").style.maxWidth = "100px";
  }
  else {
    document.getElementById("navbar").style.height = "90vh";
    document.getElementById("navbar").style.background = "rgba(0,0,0,0)";
    document.getElementById("nav-img").style.maxWidth = "200px";
  }
}

function scrollToView(nav) {
  document.getElementById(nav).scrollIntoView(true, {behavior:"smooth"});
}

function imageHover(x) {
  x.style.opacity = "1";
}
function imageDefault(x) {
  x.style.opacity = "0.5";
}
