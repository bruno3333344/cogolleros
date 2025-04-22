// Inicializa la clave pública de EmailJS
emailjs.init('2QjbnAJ4bXVCF8UFF'); // Reemplaza con tu public key

// Obtén el formulario y el botón de enviar
const form = document.getElementById('form');
const btn = document.getElementById('button');

// Agrega el evento para cuando el formulario sea enviado
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  // Cambiar el valor del botón a "Enviando..." mientras se procesa
  btn.value = 'Enviando...';

  const serviceID = 'service_0jibmcn';  // Tu Service ID de EmailJS
  const templateID = 'template_oi9wmzy'; // Tu Template ID de EmailJS

  // Enviar el formulario a EmailJS usando `sendForm`
  emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      // Si el mensaje se envía correctamente
      btn.value = 'Enviar Mensaje';
      alert('¡Mensaje enviado!');
    })
    .catch((err) => {
      // Si hay un error al enviar el mensaje
      btn.value = 'Enviar Mensaje';
      alert('Error al enviar el mensaje: ' + JSON.stringify(err));
    });
});
