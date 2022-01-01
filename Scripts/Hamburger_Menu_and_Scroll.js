var menuBtn = document.querySelector('.menu-btn');
var nav_bar_ul = document.getElementById('nav_bar_ul');
let menuOpen = false;

var localisation_a = document.getElementById("nav_localisation");
var activities_a = document.getElementById("nav_activities");
var contact_a = document.getElementById("nav_contact");

var localisation = document.getElementById("maps");
var activities = document.getElementById("activities_container");
var contact = document.getElementById("contact_container");

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    nav_bar_ul.classList.add('active');
    menuBtn.style.position = 'fixed';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    nav_bar_ul.classList.remove('active');
    menuBtn.style.position = 'relative';
    menuOpen = false;
  }
  
});


activities_a.addEventListener("click", (e) => {
  menuBtn.classList.remove('open');
  nav_bar_ul.classList.remove('active');
  menuBtn.style.position = 'relative';
  menuOpen = false;
  e.preventDefault();
  activities.scrollIntoView({ behavior:'smooth', block:'start'});
});

contact_a.addEventListener("click", (e) => {
  menuBtn.classList.remove('open');
  nav_bar_ul.classList.remove('active');
  menuBtn.style.position = 'relative';
  menuOpen = false;
  e.preventDefault();
  contact.scrollIntoView({ behavior:'smooth', block:'start'});
});

localisation_a.addEventListener("click", (e) => {
  menuBtn.classList.remove('open');
  nav_bar_ul.classList.remove('active');
  menuBtn.style.position = 'relative';
  menuOpen = false;
  e.preventDefault();
  localisation.scrollIntoView({ behavior:'smooth', block:'start'})
});