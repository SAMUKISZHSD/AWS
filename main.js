const showSocial = (toggleCardId, socialCardId) => {
    const toggle = document.getElementById(toggleCardId);
    const social = document.getElementById(socialCardId);
  
    toggle.addEventListener("click", () => {
      if (social.classList.contains("animation")) {
        social.classList.add("down-animation");
  
        setTimeout(() => {
          social.classList.remove("down-animation");
        }, 1000);
      }
  
      social.classList.toggle("animation");
    });
};
  
showSocial("card-toggle1", "card-social1");
showSocial("card-toggle2", "card-social2");
showSocial("card-toggle3", "card-social3");
showSocial("card-toggle4", "card-social4");
showSocial("card-toggle5", "card-social5");
showSocial("card-toggle6", "card-social6");
  
var btnCurriculoIds = [
    "btn-curriculo1",
    "btn-curriculo2",
    "btn-curriculo3",
    "btn-curriculo4",
    "btn-curriculo5",
    "btn-curriculo6"
];

for (var i = 0; i < btnCurriculoIds.length; i++) {
    var btnCurriculo = document.getElementById(btnCurriculoIds[i]);
    var modal = document.getElementById("myModal" + (i + 1));

    (function (btn, modal) {
        btn.addEventListener("click", function () {
            modal.style.display = "block";
            modal.classList.add("modal-slide-in");
        });
    })(btnCurriculo, modal);
}

var closeModal = function (modal) {
    modal.classList.add("modal-slide-out");
    setTimeout(function () {
        modal.style.display = "none";
        modal.classList.remove("modal-slide-out");
    }, 300);
};

var closeButtons = document.getElementsByClassName("close");
var modals = document.getElementsByClassName("modal");

for (var j = 0; j < closeButtons.length; j++) {
    (function (btn, modal) {
        btn.addEventListener("click", function () {
            closeModal(modal);
        });
    })(closeButtons[j], modals[j]);
}

window.addEventListener("click", function (event) {
    for (var k = 0; k < modals.length; k++) {
        if (event.target === modals[k]) {
            closeModal(modals[k]);
        }
    }
});