console.log("JavaScript is connected!"); 

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const popup = document.getElementById('thankYouPopup');
    const closeBtn = document.getElementById('closePopup');
});

if (!form) {
    console.error('Form with id="feedbackForm" not found!');
    return;
}
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault(); 
    
  const formData = new FormData(form);
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      
      popup.style.display = 'block';
      form.reset();
    } else {
      
      alert('Oops! There was a problem submitting your form. Please try again.');
    }
  } catch (error) {
    
    alert('Oops! There was a problem submitting your form. Please try again.');
  }
});

closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});

popup.addEventListener('click', function(e) {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});