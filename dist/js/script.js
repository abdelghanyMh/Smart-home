// hide navbar when a link  clicked

// select navlinks 
const links = document.querySelectorAll('.nav__item')
// select navbar button 
const toggleBtn = document.getElementById("nav__toggle")

function hideNavBar(event) {
    toggleBtn.checked = false;
}



// add events listners for the navbar links
links.forEach(element => {
    element.addEventListener('click', hideNavBar);
});