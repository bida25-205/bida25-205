console.log("JavaScript is connected!"); 

document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('bakeryFeedbackForm');
    const successPopup = document.getElementById('successPopup');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            
            if (successPopup) {
                successPopup.classList.remove('hidden');
            }

        
            setTimeout(() => {
                feedbackForm.reset();
                stars.forEach(s => {
                    s.classList.remove('fas');
                    s.classList.add('far');
                });
            }, 500);
        });
    }
});


function closePopup() {
    const successPopup = document.getElementById('successPopup');
    if (successPopup) {
        successPopup.classList.add('hidden');
    }
}