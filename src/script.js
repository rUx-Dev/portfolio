window.onscroll = function() { resizeNavbar(); };

function addEffect() {
  var screenSize = window.innerWidth;

  if (screenSize > 600) {
    document.getElementById('info').classList.add('effect');
    document.getElementById('project-container').classList.add('effect');
    document.getElementById('card').classList.add('effect');
  }
  else {
    document.getElementById('info').classList.add('effect1');
    document.getElementById('project-container').classList.add('effect1');
    document.getElementById('card').classList.add('effect1');
  }
}

function resizeNavbar() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
    document.getElementById("navbar").style.height = "6vh";
    document.getElementById("navbar").style.background = "rgba(0,0,0,1)";
    document.getElementById("nav-img").style.maxWidth = "100px";
  }
  else {
    document.getElementById("navbar").style.height = "90vh";
    document.getElementById("navbar").style.background = "rgba(0,0,0,0)";
    document.getElementById("nav-img").style.maxWidth = "180px";
  }
}

function scrollToView(nav) {
  document.getElementById(nav).scrollIntoView(true, {behavior:"smooth"});
}