

/** the Intersection Observer API  for the navbar code start **/

const header = document.querySelector("header");
const nav = document.querySelector("nav");

const navScrolled = "nav-scrolled";

headerOptions = {
    rootMargin: "-100px 0px 0px 0px",
}

const headerObserver = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
        console.log(entry.isIntersecting);

        if (entry.isIntersecting) {
            nav.classList.remove(navScrolled);
        }
        else {
            nav.classList.add(navScrolled);
        }
    }),
    headerOptions
);

headerObserver.observe(header)

/** the Intersection Observer  API  for the nav  code end **/


/** the Intersection Observer API  for the body sections code start **/

const animationItems = document.querySelectorAll(".animate");
const inView = "animate-in-view";
const outView = "animate-out-view";


const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
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
        threshold: .15,
        rootMargin: '-90px 8px'
    }
);
animationItems.forEach(item => {
    observer.observe(item)
})

/** the Intersection Observer  API  for the body sections code end **/
