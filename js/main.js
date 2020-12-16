// preloader
/* jQuery Pre loader
      -----------------------------------------------*/
$(window).on("load", function() {
    $(".preloader").delay(400).fadeOut(500); // set duration in brackets
});

$(document).ready(function() {
    // ---------------porject area---------------------
    let $btns = $(".project-area .button-group button");

    $btns.click(function(e) {
        $(".project-area .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $(".project-area .grid").isotope({
            filter: selector,
        });

        return false;
    });

    $(".project-area .button-group #btn1").trigger("click");

    $(".project-area .grid .test-popup-link").magnificPopup({
        type: "image",
        gallery: { enabled: true },
    });

    // Owl-carousel

    $(".site-main .about-area .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            560: {
                items: 2,
            },
        },
    });

    // sticky navigation menu

    let nav_offset_top = $(".header_area").height() + 50;

    function navbarFixed() {
        if ($(".header_area").length) {
            $(window).scroll(function() {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".header_area .main-menu").addClass("navbar_fixed");
                } else {
                    $(".header_area .main-menu").removeClass("navbar_fixed");
                }
            });
        }
    }

    navbarFixed();
});

// ====================Navbar fixed==========================
$(document).ready(function() {
    $(window).scroll(function() {
        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // slide-up script
    $(".scroll-up-btn").click(function() {
        $("html").animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $("html").css("scrollBehavior", "auto");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["an Enginner", "a Web Developer", "a Student", "a Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // for tooltip in skills

    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // hide mobile menu after clicking on a link
    $(".navbar-collapse a").click(function() {
        $(".navbar-collapse").collapse("hide");
    });


});



// using javascript

// Get the container element
var btnContainer = document.getElementById("activated__links");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}




// *===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});
/*SCROLL HOME*/
sr.reveal(".home__title__hey", {});
sr.reveal(".home__title__myself", { delay: 200 });
sr.reveal(".home__title__typing", { delay: 400 });
sr.reveal(".home__btn", { delay: 400 });
sr.reveal(".home__img", { interval: 200 });

// /*SCROLL ABOUT*/

sr.reveal(".about__img", { delay: 350 });
sr.reveal(".about_para_1", { delay: 200 });
sr.reveal(".about_para_2", { delay: 400 });
sr.reveal(".about_btn", { delay: 500 });

/*SCROLL education*/
sr.reveal(".education__school", {});
sr.reveal(".education__college", { delay: 300 });
sr.reveal(".education__engg", { delay: 400 });

/*SCROLL skills*/
sr.reveal(".prog__lang", {});
sr.reveal(".web_lang", { delay: 300 });
sr.reveal(".web_frameworks", { delay: 400 });
sr.reveal(".databases", { delay: 500 });
sr.reveal(".deploy", { delay: 600 });

/*SCROLL contacts*/
sr.reveal(".name_input", { delay: 250 });
sr.reveal(".contact_input", { delay: 300 });
sr.reveal(".email_input", { delay: 350 });
sr.reveal(".textarea_input", { delay: 400 });
sr.reveal(".shaked_btn", { delay: 600 });

// Scroll footer
// sr.reveal(".footer-area", { delay: 200 });