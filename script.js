document.addEventListener("DOMContentLoaded", () => {
    console.log('Script loaded');

    // Clone logos for infinite scroll
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
        const logoSet = logoContainer.innerHTML;
        logoContainer.innerHTML = logoSet + logoSet + logoSet;

        // Pause animation on hover
        logoContainer.addEventListener('mouseenter', () => {
            logoContainer.style.animationPlayState = 'paused';
        });

        logoContainer.addEventListener('mouseleave', () => {
            logoContainer.style.animationPlayState = 'running';
        });
    } 

    // Clone logos for infinite scroll
    const testimonialsContainer = document.querySelector('.testimonials-container');
    if (testimonialsContainer) {
        const testimonialSet = testimonialsContainer.innerHTML;
        testimonialsContainer.innerHTML = testimonialSet + testimonialSet + testimonialSet;

        // Pause animation on hover
        testimonialsContainer.addEventListener('mouseenter', () => {
            testimonialsContainer.style.animationPlayState = 'paused';
        });

        testimonialsContainer.addEventListener('mouseleave', () => {
            testimonialsContainer.style.animationPlayState = 'running';
        });
    } 

    const caseStudies = {
        '1': {
            title: 'Athena Smartcard Solutions',
            challenge: 'Navigating complex international financial regulations while scaling smart card technology to new markets.',
            solution: 'Developed a financial strategy that optimized cross-border transactions, improved cost efficiencies, and ensured compliance with local regulations.',
            results: 'Successfully expanded into new regions with a streamlined financial structure, reducing regulatory friction and enhancing operational scalability.'
        },
        '2': {
            title: 'Hyble Tech',
            challenge: 'Defining a financial model that supports rapid AI-driven innovation while maintaining profitability and investor confidence.',
            solution: 'Designed a structured financial plan incorporating R&D tax credits, sustainable growth forecasting, and strategic funding rounds.',
            results: 'Positioned Hyble Tech as a financially resilient AI leader, securing investor confidence and accelerating product development with minimized financial risk.'
        },
        '3': {
            title: 'Touch Bionics',
            challenge: 'Managing the financial complexities of scaling high-cost medical technology into global markets with varying reimbursement structures.',
            solution: 'Provided a financial roadmap optimizing pricing strategy, cash flow management, and reimbursement negotiations for international expansion.',
            results: 'Successfully launched in multiple markets with a sustainable revenue model, improving accessibility for patients while ensuring long-term profitability.'
        },
        '4': {
            title: 'Voxar',
            challenge: 'Structuring finances to facilitate an acquisition while ensuring continued investment in medical imaging innovation.',
            solution: 'Created a robust financial due diligence package, identified cost-saving opportunities, and optimized financial reporting for potential buyers.',
            results: 'Secured a successful acquisition by Barco, with Voxar’s technology integrated into a global leader in medical imaging solutions.'
        },
        '5': {
            title: 'Wave RX',
            challenge: 'Aligning financial strategy with regulatory compliance for medical product approvals and commercial rollout.',
            solution: 'Developed a capital allocation plan balancing regulatory costs, clinical trials, and go-to-market funding needs.',
            results: 'Wave RX successfully launched its skin disorder treatments with a financial model supporting sustainable R&D and market penetration.'
        },
        '6': {
            title: 'Zixi',
            challenge: 'Creating a financial framework for scaling high-bandwidth video streaming while maintaining profit margins.',
            solution: 'Designed a pricing and cost-optimization strategy that aligned revenue streams with growing infrastructure demands.',
            results: 'Achieved profitability while scaling operations, enabling Zixi to become a leading provider of high-quality video streaming technology.'
        }
    };

    function openModal(companyId) {
        console.log('Opening modal for:', companyId);
        const study = caseStudies[companyId];
        if (!study) {
            console.error('No case study found for:', companyId);
            return;
        }

        caseStudyModal.querySelector('.case-study-title').textContent = study.title;
        caseStudyModal.querySelector('.case-study-challenge p').textContent = study.challenge;
        caseStudyModal.querySelector('.case-study-solution p').textContent = study.solution;
        caseStudyModal.querySelector('.case-study-results p').textContent = study.results;

        caseStudyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Modal opened, classes:', caseStudyModal.classList.toString());
    }

    function closeModal() {
        console.log('Closing modal');
        caseStudyModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Case Study Modal Functionality
    const caseStudyModal = document.getElementById('caseStudyModal');
    const closeBtn = document.querySelector('.close-modal');
    const logoImages = document.querySelectorAll('.logo-image');

    // Add click listeners to logo imagesimage.png
    logoImages.forEach(specificLogoImage => {
        specificLogoImage.addEventListener('click', (e) => {
            const companyId = e.currentTarget.dataset.company;
            if (!companyId) {
                console.error('Error: No companyId found in dataset.');
                return;
            }
            openModal(companyId); // Now the function runs only when clicked
        });
    });

    // Ensure modal is closed when page is first loaded
    closeModal();

    // Close button listener
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    //Debug click listener
    document.body.addEventListener('click', (e) => {
        console.log('Clicked on:', e.target);
    });

    // Click outside modal to close
    caseStudyModal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

});