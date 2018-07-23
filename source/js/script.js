//-----------Плавный скролл----------------//

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//-----------Поп-ап----------------//

var modal = document.querySelector(".pop-up");
var callBack = document.querySelector(".call-me");
var modalClose = modal.querySelector(".pop-up__close");
var popupForm = modal.querySelector(".pop-up__form");

callBack.addEventListener("click", function () {
    modal.classList.add("pop-up--open");
    callBack.style.display = "none";
});

modalClose.addEventListener("click", function () {
    modal.classList.remove("pop-up--open");
    callBack.style.display = "block";
});
