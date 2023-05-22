let menuBtn= document.getElementById("menuBtn");

menuBtn.addEventListener("click", function(e){
     document.querySelector("body").classList.toggle("mobile-nav-active");
     this.classList.toggle("fa-xmark");
});

let typed = new Typed(".auto-input",{
     strings: ["Frontend Developer!", "YouTuber!", "Blogger"],
     typeSpeed: 100,
     backSpeed: 100,
     backDelay: 2000,
     loop: true,
});

let navlinks = document.querySelectorAll("nav ul li a");
let sections = document.querySelectorAll("section");


window.addEventListener("scroll", function(){
     const scrollPos = window.scrollY + 20
     sections.forEach(section => {
          if(scrollPos > section.offsetTop && scrollPos <(section.offsetTop + section.offsetHeight)){
               navlinks.forEach(link => {
                    link.classList.remove("active");
                    if(section.getAttribute("id") === link.getAttribute("href").substring(1)) {
                         link.classList.add("active")
                    }
               });
          }
     });
});