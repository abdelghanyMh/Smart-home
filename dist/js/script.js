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


/** the Intersection Observer API code start **/

const animationItems = document.querySelectorAll(".animate");
const inView = "animate-in-view";
const outView = "animate-out-view";


const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {

                entry.target.classList.remove(outView);
                entry.target.classList.add(inView);
            }
            else {
                entry.target.classList.remove(inView);
                entry.target.classList.add(outView);

            }
        });
    },
    {
        threshold: .20,
        rootMargin: '-100px'
    }
);
animationItems.forEach(item => {
    observer.observe(item)
})

/** the Intersection Observer API code end **/
