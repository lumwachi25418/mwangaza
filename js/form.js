// function FormSubmit(){
//     const Submit=document.querySelector('.submit')
//     Submit.addEventListener('click',function(){
//         alert('Subscription successful!')
//     })
//     (
// function sendForm() {
//   emailjs.init("_vO72uLus83FhBIhp");
// })();

// var templateParams = {
//   from_name: 'Sender',
//   message: 'Test Message'
// };

// emailjs.sendForm('service_ai2ei1g', 'template_woxedrj', templateParams)
//   .then(function (response) {
//     console.log('SUCCESS!', response.status, response.text);
//   }, function (error) {
//     console.log('FAILED...', error);
//   }); 
// }
// FormSubmit()
// function closeForm(){
//     const close=document.querySelector('.close')
//     close.addEventListener('click',function(){
//    window.location .href='index.html'   
//     })
// }
// closeForm()
document.addEventListener('DOMContentLoaded', function () {

  // Initialize EmailJS
  emailjs.init('_vO72uLus83FhBIhp');

  // FORM SUBMIT
  const form = document.getElementById('subscribe-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // stop page reload

    emailjs.sendForm(
      'service_ai2ei1g',
      'template_woxedrj',
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
