console.log("JavaScript is connected!"); 

document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('bakeryFeedbackForm');
    const successPopup = document.getElementById('successPopup');

    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', async function(e) {
            e.preventDefault(); 
            
        
            const formData = new FormData(this);

        try {
            const response = await fetch(this.action, {
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
                alert("Submission failed. Please try again!");
            }
         } catch (error) {
            alert("There was an error connecting to server")
         }
        });
    
    }
});


function closePopup() {
    document.getElementById('successPopup').classList.add('hidden');
}