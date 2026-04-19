console.log("JavaScript is connected!"); 

document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.querySelector('.feedback-form');
    const successPopup = document.getElementById('successPopup');

    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
        
            const formData = new FormData(this);

           
            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                successPopup.classList.remove('hidden');
                feedbackForm.reset();
            } else {
                alert("Oops! There was a problem. Please try again or message us on WhatsApp.");
            }
        });
    }
});


function closePopup() {
    const successPopup = document.getElementById('successPopup');
    if (successPopup) {
        successPopup.classList.add('hidden');
    }
}