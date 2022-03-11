const navList = document.querySelectorAll('.list');
const content = document.querySelector('.content');

function pageLoader() {
    let x = this.querySelector('.text');
    if (x.innerHTML == "ABOUT") {
        content.setAttribute("src", "about.html");
    } else if (x.innerHTML == "MEDIA") {
        content.setAttribute("src", "media.html");
    } else if (x.innerHTML == "CONTACT") {
        content.setAttribute("src", "contact.html");
    } else {
        content.setAttribute("src", "home.html");
    }
}

navList.forEach((item) => 
item.addEventListener('click', pageLoader));