
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
         anchor.addEventListener('click', function(e) {
            e.preventDefault();
                    
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
                    
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                        
                // Update URL hash without scrolling
                history.pushState(null, null, targetId);
            }
        });
    });
            
    // Button functionality
    document.getElementById('viewProjects').addEventListener('click', function() {
        alert('Projects section coming soon! In the meantime, check out my GitHub.');
        window.open('https://github.com', '_blank');
    });
            
    document.getElementById('workTogether').addEventListener('click', function() {
        window.scrollTo({
            top: document.getElementById('contact').offsetTop - 80,
            behavior: 'smooth'
        });
                
        history.pushState(null, null, '#contact');
    });
            
     // Form submission
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
            
    // Skill animation on scroll
    const skillSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.skill-level');
            
    function animateSkills() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
                    
            setTimeout(() => {
                bar.style.transition = 'width 1s ease-in-out';
                bar.style.width = width;
            }, 200);
        });
    }
            
    // Intersection Observer to trigger skill animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
            
     observer.observe(skillSection);
});