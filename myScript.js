document.addEventListener('DOMContentLoaded', function() {
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

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const errors = document.querySelectorAll('.error');
            errors.forEach(error => {
                error.style.display = 'none';
            });

            let isValid = true;

            const fname = document.getElementById('fname');
            if (!fname.value.trim()) {
                document.getElementById('fnameError').style.display = 'block';
                isValid = false;
            }

            const email = document.getElementById('email');
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!email.value.match(emailPattern)) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }

            const message = document.getElementById('message');
            if (!message.value.trim()) {
                document.getElementById('messageError').style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                sendEmail();
            }
        });
    }

    function sendEmail() {
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        const body = `Name: ${fname}<br> Last Name: ${lname}<br/> Email: ${email}<br/> Phone: ${phone}<br/> Message: ${message}`;

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "zcaminacamina@gmail.com",
            Password: "E3FE5B08B11B34B7C50618AF5EFD261AB1A8 ",
            To: 'zcamincamin@gamil.com',
            From: "zcaminacamina@gmail.com",
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
    }

    const buttons = document.querySelectorAll('.lang-btn');
    const textTitle = document.getElementById('title');
    const textIntroText = document.getElementById('intro-text');
    const textDesc = document.getElementById('desc');
    const textDesc1 = document.getElementById('desc1');
    const textDesc2 = document.getElementById('desc2');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const language = button.getAttribute('language');
            console.log(`Language button clicked: ${language}`); // Debug log
            updateContent(language);
            highlightActiveButton(language);
            localStorage.setItem('language', language);
        });
    });

    function updateContent(language) {
        textTitle.textContent = texts[language]['title'];
        textIntroText.innerHTML = texts[language]['intro-text']; // Use innerHTML for multiline text
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

    const storedLang = localStorage.getItem('language');
    const lang = storedLang || 'en';
    updateContent(lang);
    highlightActiveButton(lang);
});
