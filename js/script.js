// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
}

// Animation on scroll for services and testimonials
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .testimonial-card');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (position < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements with hidden state
document.querySelectorAll('.service-card, .testimonial-card').forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
// Initial check on page load
window.addEventListener('load', animateOnScroll);

// Form validation for booking page
if (document.getElementById("bookingForm")) {
    const bookingForm = document.getElementById("bookingForm");
    
    bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Get form fields
        const fullName = document.getElementById("fullName");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const service = document.getElementById("service");
        const date = document.getElementById("date");
        const time = document.getElementById("time");
        
        let isValid = true;
        
        // Validate full name
        if (fullName.value.trim() === "") {
            showError(fullName, "Full name is required");
            isValid = false;
        } else {
            showSuccess(fullName);
        }
        
        // Validate email
        if (email.value.trim() === "") {
            showError(email, "Email is required");
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, "Please enter a valid email");
            isValid = false;
        } else {
            showSuccess(email);
        }
        
        // Validate phone
        if (phone.value.trim() === "") {
            showError(phone, "Phone number is required");
            isValid = false;
        } else if (!isValidPhone(phone.value)) {
            showError(phone, "Please enter a valid phone number");
            isValid = false;
        } else {
            showSuccess(phone);
        }
        
        // Validate service
        if (service.value === "") {
            showError(service, "Please select a service");
            isValid = false;
        } else {
            showSuccess(service);
        }
        
        // Validate date
        if (date.value === "") {
            showError(date, "Please select a date");
            isValid = false;
        } else {
            // Check if date is in the future
            const selectedDate = new Date(date.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                showError(date, "Please select a future date");
                isValid = false;
            } else {
                showSuccess(date);
            }
        }
        
        // Validate time
        if (time.value === "") {
            showError(time, "Please select a time");
            isValid = false;
        } else {
            showSuccess(time);
        }
        
        if (isValid) {
            // In a real application, you would send the form data to a server here
            alert("Appointment booked successfully! We will confirm your appointment shortly.");
            bookingForm.reset();
        }
    });
    
    function showError(input, message) {
        const formGroup = input.parentElement;
        formGroup.classList.add("error");
        
        const errorMessage = formGroup.querySelector(".error-message");
        errorMessage.textContent = message;
    }
    
    function showSuccess(input) {
        const formGroup = input.parentElement;
        formGroup.classList.remove("error");
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    function isValidPhone(phone) {
        const re = /^[\+]?[1-9][\d]{0,15}$/;
        return re.test(phone.replace(/[\s\-\(\)]/g, ''));
    }
}

// Animation on scroll for team members
function animateTeamOnScroll() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        const position = member.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (position < screenPosition) {
            member.style.opacity = 1;
            member.style.transform = 'translateY(0)';
        }
    });
}

// Initialize team members with hidden state
document.querySelectorAll('.team-member').forEach(member => {
    member.style.opacity = 0;
    member.style.transform = 'translateY(20px)';
    member.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Listen for scroll events on about page
if (document.querySelector('.team-section')) {
    window.addEventListener('scroll', animateTeamOnScroll);
    window.addEventListener('load', animateTeamOnScroll);
}