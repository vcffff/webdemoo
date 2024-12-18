function send(event) {
    event.preventDefault(); 

    let params = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };
    emailjs.send("service_yugb5gj", "template_w6ytk3a", params)
        .then(() => {
            alert("Email sent successfully!");
            document.getElementById('contactForm').reset(); 
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("Error sending email: " + error.text);
        });
}
