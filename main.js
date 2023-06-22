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
