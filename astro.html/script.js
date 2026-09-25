
/* =====================================================
   PLANET INFORMATION
===================================================== */

function showPlanet(planet) {

    const information = {

        Mercury:
            "Mercury is the smallest planet in our solar system and the closest planet to the Sun.",

        Venus:
            "Venus is the second planet from the Sun and has an extremely hot surface.",

        Earth:
            "Earth is our home planet and the only known planet to support life.",

        Mars:
            "Mars is called the Red Planet because iron minerals on its surface give it a reddish appearance.",

        Jupiter:
            "Jupiter is the largest planet in our solar system and is famous for its Great Red Spot.",

        Saturn:
            "Saturn is a gas giant famous for its beautiful and extensive ring system."
    };

    alert(
        planet +
        "\n\n" +
        information[planet]
    );
}


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );

    contactForm.reset();

});


/* =====================================================
   NAVIGATION ACTIVE EFFECT
===================================================== */

const navLinks =
    document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.style.color = "#cbd5e1";
        });

        this.style.color = "#60a5fa";

    });

});