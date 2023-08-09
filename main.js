document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    
    const data = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };

    // Aquí puedes agregar la lógica para enviar el correo electrónico o almacenar los datos en una base de datos
    // Por ejemplo, puedes utilizar la API fetch para enviar los datos a un servidor

    // Ejemplo de uso de fetch para enviar los datos a un servidor
    fetch("tu_endpoint_de_servidor", {
        method: "POST",
        feaders: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Datos enviados correctamente:", data);
        // Puedes mostrar un mensaje al usuario o redirigir a una página de agradecimiento
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
        // Puedes mostrar un mensaje de error al usuario
    });
});