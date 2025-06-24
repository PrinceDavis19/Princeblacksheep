document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Navbar Toggle ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar__menu'); // Select the ul element

    if (mobileMenu && navbarMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-active'); // For animated hamburger
            navbarMenu.classList.toggle('active'); // To show/hide the menu
        });

        // Close mobile menu when a link is clicked
        navbarMenu.querySelectorAll('.navbar__links').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('is-active');
                navbarMenu.classList.remove('active');
            });
        });
    }

    // --- FAQ Accordion ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling; // The .faq-answer div
            const isActive = question.classList.contains('active');

            // Close all other open answers
            faqQuestions.forEach(q => {
                if (q !== question && q.classList.contains('active')) {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = null;
                    q.nextElementSibling.style.padding = '0 25px'; // Reset padding
                }
            });

            // Toggle current answer
            if (isActive) {
                question.classList.remove('active');
                answer.style.maxHeight = null;
                answer.style.padding = '0 25px'; // Reset padding
            } else {
                question.classList.add('active');
                // Set max-height to scrollHeight to animate
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.padding = '20px 25px'; // Apply padding when open
            }
        });
    });

    // --- Testimonials Carousel ---
    const testimonialContainer = document.querySelector('.testimonial-container');
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');

    if (testimonialContainer && prevBtn && nextBtn && testimonialSlides.length > 0) {
        // Calculate the width of one slide + its margin
        const slideWidth = testimonialSlides[0].offsetWidth + 30; // 30px is margin-right
        let currentIndex = 0;

        function updateCarousel() {
            // Scroll to the current index position
            testimonialContainer.scrollLeft = currentIndex * slideWidth;
        }

        nextBtn.addEventListener('click', () => {
            if (currentIndex < testimonialSlides.length - 1) { // Stop before the last slide, assuming 1.5 slides visible
                currentIndex++;
            } else {
                currentIndex = 0; // Loop back to start
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = testimonialSlides.length - 1; // Loop to end
            }
            updateCarousel();
        });

        // Initialize carousel position
        updateCarousel();
    }


  const slider = document.querySelector('.resources-slider');
  const leftBtn = document.querySelector('.slide-btn.left');
  const rightBtn = document.querySelector('.slide-btn.right');

  let scrollX = 0;
  const step = 250; // Amount to slide (px) each time

  leftBtn.addEventListener('click', () => {
    scrollX = Math.max(0, scrollX - step);
    slider.style.transform = `translateX(-${scrollX}px)`;
  });

  rightBtn.addEventListener('click', () => {
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    scrollX = Math.min(maxScroll, scrollX + step);
    slider.style.transform = `translateX(-${scrollX}px)`;
  });


            