// Chatbot Toggle
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotBox = document.getElementById('chatbot-box');

chatbotToggle.addEventListener('click', () => {
    chatbotBox.classList.toggle('hidden');
    chatbotBox.style.display = chatbotBox.classList.contains('hidden') ? 'none' : 'block';
});

// Chatbot FAQ Interaction
const faqButtons = document.querySelectorAll('.faq');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const question = button.textContent;
        let answer = '';

        switch(question) {
            case 'What services do you offer?':
                answer = 'We offer branding, UI/UX design, motion graphics, video editing, and website development services.';
                break;
            case 'What is your pricing model?':
                answer = 'Our pricing is project-based and tailored according to client needs. Contact us for a quote!';
                break;
            case 'How can I contact you?':
                answer = 'You can fill the contact form on our website or email us at hello@epicflip.com';
                break;
            case 'Where are you located?':
                answer = 'We are based globally, with our HQ in New York, USA.';
                break;
            default:
                answer = 'Please ask a valid question!';
        }

        alert(answer);
    });
});
