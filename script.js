let currentPage = location.pathname.split("/").pop();
let navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.color = "orange";
    }
});

console.log("Welcome to Sana's Bookstore — enjoy browsing!");

let form = document.querySelector("form");

if (form) {
    form.addEventListener("send", function (e) {
        e.preventDefault();
        alert("Thanks for contacting us! We'll get back to you as soon as possible");
        form.reset();
    });
}

let topBtn = document.createElement("button");
topBtn.textContent = "↑ Top";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.display = "none";
document.body.appendChild(topBtn);

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

