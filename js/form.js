
document.addEventListener('DOMContentLoaded', function () {

  // Initialize EmailJS
  emailjs.init('_vO72uLus83FhBIhp');

  // FORM SUBMIT
  const form = document.getElementById('subscribe-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // stop page reload

    emailjs.sendForm(
      'service_ai2ei1g',
      'template_woxedrj'
      this
    ).then(
      function () {
        alert('Sent  successful!');
        form.reset();
      },
      function (error) {
        console.error('FAILED...', error);
        alert('Send failed. Try again.');
      }
    );
  });

  // CLOSE BUTTON
  const close = document.querySelector('.close');
  close.addEventListener('click', function () {
    window.location.href = 'index.html';
  });

});
