const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


// Auto-update year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// -------------------------------------------------------
// document.getElementById("home").addEventListener("click", function () {
//     document.getElementById("hero-section").scrollIntoView({
//         behavior: "smooth";
//     });
// });

document.getElementById("about-btn").addEventListener("click",function(){
	document.getElementById("about").scrollIntoView({
		behavior:"smooth"
	})
})
// -------------------------------------------------------
// Smooth scroll routing
document.querySelectorAll(".sub-navbar a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();


document.addEventListener('DOMContentLoaded', () => {
    const resumeButton = document.querySelector('.resume-button');
    const contactInfo = document.querySelector('.contact-info');

    // Add a class to the contact info after a delay to trigger a fade-in animation
    setTimeout(() => {
        contactInfo.style.opacity = '1';
        contactInfo.style.transform = 'translateY(0)';
    }, 1500);

    // Fade-in animation for contact info using CSS transition
    contactInfo.style.transition = 'opacity 1s ease, transform 1s ease';
    contactInfo.style.opacity = '0';
    contactInfo.style.transform = 'translateY(20px)';
});