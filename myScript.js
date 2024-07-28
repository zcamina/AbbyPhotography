document.addEventListener('DOMContentLoaded', function() {
    // Define texts for English and Spanish
    const texts = {
        "en": {
            "title": "Welcome to My Photo Gallery",
            "intro-text": `Welcome to my personal photo gallery! I am Abby Smith. Here you'll find a showcase of my passion 
            for photography, featuring a diverse range of subjects from stunning landscapes to candid moments. I hope you 
            enjoy exploring my work as much as I enjoyed capturing these moments. Feel free to reach out and share your thoughts!`,
            "desc": "Portraits",
            "desc1": "Travels",
            "desc2": "Streets"
        },
        "es": {
            "title": "Bienvenido a mi galería de fotos",
            "intro-text": `¡Bienvenido a mi galería personal de fotos! Soy Abby Smith. Aquí encontrarás una muestra de mi pasión 
            por la fotografía, con una variedad de temas que van desde paisajes impresionantes hasta momentos espontáneos. Espero 
            que disfrutes explorando mi trabajo tanto como yo disfruté capturando estos momentos. ¡No dudes en ponerte en contacto 
            y compartir tus pensamientos!`,
           "desc": "Retratos",  
           "desc1": "Viajes",   
           "desc2": "Calles"
        }
    };
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous errors
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => {
            error.style.display = 'none';
        });

        let isValid = true;

        // Validate First Name
        const fname = document.getElementById('fname');
        if (!fname.value.trim()) {
            document.getElementById('fnameError').style.display = 'block';
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email.value.match(emailPattern)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        }

        // Validate Message
        const message = document.getElementById('message');
        if (!message.value.trim()) {
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        }

        // If all validations pass
        if (isValid) {
            // Form submission logic
            sendEmail();
        }
    });
   
    /* // Handle form submission
    var form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            sendEmail();
        });*/

        function sendEmail() {
            var fname = document.getElementById('fname').value;
            var lname = document.getElementById('lname').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var message = document.getElementById('message').value;
            var body = `Name: ${fname}<br> Last Name: ${lname}<br/> Email: ${email}<br/> Phone: ${phone}<br/> Message: ${message}`;

            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "zcaminacamina@gmail.com", // Replace with your email
                Password: "E3FE5B08B11B34B7C50618AF5EFD261AB1A8", // Replace with your password
                To: 'zcaminacamina@gmail.com', // Replace with recipient's email
                From: "zcaminacamina@gmail.com", // Replace with your email
                Subject: "Contact Message from Website",
                Body: body
            }).then(
                message => {
                    if (message === 'OK') {
                        swal("Successful!", "Your message was sent!", "success");
                    } else {
                        swal("Error", "Failed to send message.", "error");
                    }
                }
            ).catch(
                error => {
                    console.error(error);
                    swal("Error", "An unexpected error occurred.", "error");
                }
            );
      /*  }*/
    }

    // Handle language switching
    const buttons = document.querySelectorAll('.lang-btn');
    const textTitle = document.getElementById('title');
    const textIntroText = document.getElementById('intro-text');
    const textDesc = document.getElementById('desc');
    const textDesc1 = document.getElementById('desc1');
    const textDesc2 = document.getElementById('desc2');

    // Add click event listeners to language buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const language = button.getAttribute('language');
            updateContent(language);
            highlightActiveButton(language);
            // Store the selected language in localStorage
            localStorage.setItem('language', language);
        });
    });

    function updateContent(language) {
        textTitle.textContent = texts[language]['title'];
        textIntroText.textContent = texts[language]['intro-text'];
        textDesc.textContent = texts[language]['desc'];
        textDesc1.textContent = texts[language]['desc1'];
        textDesc2.textContent = texts[language]['desc2'];
    }

    function highlightActiveButton(language) {
        buttons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('language') === language) {
                button.classList.add('active');
            }
        });
    }

    // Set initial language from localStorage or default to English
    const storedLang = localStorage.getItem('language');
    const lang = storedLang || 'en';
    updateContent(lang);
    highlightActiveButton(lang);
});
