// ================= APPOINTMENT FORM =================

document.getElementById("appointmentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("patientName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const department = document.getElementById("department").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (
        name === "" ||
        phone === "" ||
        email === "" ||
        department === "" ||
        date === "" ||
        time === ""
    ) {
        alert("Please fill all required fields.");
        return;
    }

    alert(
        "Appointment Booked Successfully!\n\n" +
        "Patient: " + name + "\n" +
        "Department: " + department + "\n" +
        "Date: " + date + "\n" +
        "Time: " + time
    );

    document.getElementById("appointmentForm").reset();

});


// ================= EMERGENCY BUTTON =================

function emergencyCall() {

    alert(
        "🚨 EMERGENCY SERVICES\n\n" +
        "Please call +91 98765 43210\n\n" +
        "CarePlus Hospital Emergency Department is available 24/7."
    );

}


// ================= DATE VALIDATION =================

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();

const month = String(today.getMonth() + 1).padStart(2, "0");

const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;


// ================= SCROLL ANIMATION =================

const sections = document.querySelectorAll(
    ".card, .doctor-card, .service, .patient-card, .testimonial"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(function(section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.7s ease";

    observer.observe(section);

});