document.addEventListener("DOMContentLoaded", function () {


    // Contact Form Handling

    const contactForm = document.getElementById("contactForm");


    if (contactForm) {


        contactForm.addEventListener("submit", function (event) {


            event.preventDefault();


            const name = document.getElementById("name").value;


            alert(
                "Thank you " + name + 
                "! Your message has been submitted successfully."
            );


            contactForm.reset();


        });


    }



    // Automatically update footer year

    const footer = document.querySelector("footer p");


    if (footer) {


        const currentYear = new Date().getFullYear();


        footer.innerHTML =
            "© " + currentYear +
            " Vishal D | Personal Portfolio";


    }


});