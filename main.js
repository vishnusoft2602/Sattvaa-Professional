
// Minimal JS for interaction (mobile nav, form fallback)
document.addEventListener('DOMContentLoaded', function() {
  // Simple form submit handler to show a message
  var form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks! Your message has been received. (Form is demo-only)');
      form.reset();
    });
  }
});
