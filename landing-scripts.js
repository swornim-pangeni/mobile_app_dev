$(document).ready(function() {
    // Mobile menu functionality
    const $navLinks = $('#navLinks');
    $('#openMenu').click(function() {
        $navLinks.css('right', '0');
    });
    
    $('#closeMenu').click(function() {
        $navLinks.css('right', '-300px');
    });
    
    // Close menu when clicking on nav links (for mobile)
    $('.nav-links ul li a').click(function() {
        if ($(window).width() <= 768) {
            $navLinks.css('right', '-300px');
        }
    });
    
    // Newsletter form submission
    $('#newsletter-form').submit(function(e) {
        e.preventDefault();
        const $emailInput = $(this).find('input[type="email"]');
        const email = $emailInput.val().trim();
        
        if (email) {
            // Show success message
            alert('Thanks for subscribing! You\'ll receive updates about new games and features.');
            $emailInput.val('');
        }
    });
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        const targetId = $(this).attr('href');
        
        if (targetId === '#') return;
        
        const $targetElement = $(targetId);
        if ($targetElement.length) {
            $('html, body').animate({
                scrollTop: $targetElement.offset().top - 70
            }, 800);
        }
    });
    
    // Animation on scroll (simple version)
    function animateOnScroll() {
        $('.feature-card, .game-card, .step, .testimonial').each(function() {
            const elementPosition = $(this).offset().top;
            const screenPosition = $(window).scrollTop() + $(window).height() / 1.3;
            
            if (elementPosition < screenPosition) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    }
    
    // Initialize element styles for animation
    $('.feature-card, .game-card, .step, .testimonial').css({
        'opacity': '0',
        'transform': 'translateY(20px)',
        'transition': 'opacity 0.5s ease, transform 0.5s ease'
    });
    
    // Play Now buttons hover effect
    $('.play-now-btn').hover(
        function() {
            $(this).text('▶ Play');
        },
        function() {
            $(this).text('Play Now');
        }
    );
    
    // Run animation on load and scroll
    $(window).on('load', animateOnScroll);
    $(window).scroll(animateOnScroll);
});