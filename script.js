console.log("JavaScript is connected!"); 

document.addEventListener('DOMContentLoaded', function() {
  console.log('JS loaded'); 
  
  const form = document.getElementById('feedbackForm');
  const popup = document.getElementById('thankYouPopup');
  const closeBtn = document.getElementById('closePopup');

  if (!form) {
    console.error('Form with id="feedbackForm" not found!');
    return;
  }

  form.addEventListener('submit', async function(e) {
    e.preventDefault(); 
    console.log('Form intercepted, sending to Formspree...');

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
        console.log('Formspree success');
        popup.style.display = 'block'; 
        form.reset(); 
      } else {
        alert('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      console.log('Fetch error:', error);
      alert('Oops! There was a problem submitting your form.');
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  }

  if (popup) {
    popup.addEventListener('click', function(e) {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
  }
});


document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }
});

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

