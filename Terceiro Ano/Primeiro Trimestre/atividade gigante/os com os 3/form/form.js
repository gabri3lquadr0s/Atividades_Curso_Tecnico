document.getElementById("contactForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;
    var message = document.getElementById("message").value;
    var attachment = document.getElementById("attachment").value;

    if (!name || !email || !phone || !dob || !message || !attachment) {
        event.preventDefault();
        document.getElementById("info").innerHTML = "<p id='error-msg'>Por favor, preencha todos os campos.</p>";
    } else {
        document.getElementById("info").innerHTML = "<p>Formulário enviado com sucesso!</p>";
    }
});