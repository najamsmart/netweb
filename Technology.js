
// Canonical

document.addEventListener('DOMContentLoaded', function() {
    var link = document.createElement('link');
    link.rel = 'canonical';
    link.href = 'https://thebravenext.com/technology';  
    document.head.appendChild(link);
});


// Robot Tag
document.addEventListener('DOMContentLoaded', function() {
    var metaTag = document.createElement('meta');
    metaTag.name = "robots";
    metaTag.content = "index, follow";  
    document.head.appendChild(metaTag);
});


// Cookies Bar
document.getElementById('cookie-settings').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('cookie-bar').classList.toggle('hidden');
});
document.getElementById('accept').addEventListener('click', function() {
    document.getElementById('cookie-bar').classList.add('hidden');
});
document.getElementById('decline').addEventListener('click', function() {
    document.getElementById('cookie-bar').classList.add('hidden');
});
/* COOKIES BAR End  */


// Harness Image Open 

const Technology_images = {
    'mainImage': [
        './Images/AI-Motion-Detection-Real-Time-Monitoring-for-Increased-Safety-and-Accuracy-Dashboard.png',
        './Images/AI-Motion-Detection-Real-Time-Monitoring-for-Increased-Safety-and-Accuracy.png'
    ],
    'image-4-main': [
        './Images/AI-Driven-Solutions-for-Smarter-More-Efficient-Monitoring-Systems-Dashboard.png',
        './Images/AI-Driven-Solutions-for-Smarter-More-Efficient-Monitoring-Systems1.png'
    ],
    'image-5-main': [
        './Images/Smart-PPE-Detection-Dashboard.png',
        './Images/Smart-PPE-Detection.png'
    ],
    'image-7-main': [
        './Images/The-Future-of-Textile-Industry-How-AI-is-Redefining-Manufacturing-Efficiency-Dashboard.png',
        './Images/The-Future-of-Textile-Industry-How-AI-is-Redefining-Manufacturing-Efficiency.png'
    ],
    'image-8-main': [
        '/Images/AI-Face-Recognition-Transforming-Security-Retail-and-Beyond-Dashboard.png',
        '/Images/AI-Face-Recognition-Transforming-Security-Retail-and-Beyond.png'
    ],
    'image-1-main': [
        './Images/Smart-Manufacturing-AI-at-the-Forefront-of-Industrial-Transformation.png',
        './Images/Smart-Manufacturing-AI-at-the-Forefront-of-Industrial-Transformation.png'
    ],
    'image-2-main': [
        './Images/Save-Mart-Integrates-AI-for-Advanced-Detection-and-Shopper-Insights-Dashboard.png',
        './Images/Save-Mart-Integrates-AI-for-Advanced-Detection-and-Shopper-Insights.png'
    ],
    'image-3-main': [
        './Images/Enhancing-Security-Detecting-Occupancy-Using-AI-Driven-Presence-Detection-Dashboard.png',
        './Images/Enhancing-Security-Detecting-Occupancy-Using-AI-Driven-Presence-Detection.png'
    ]
};

document.querySelectorAll('.harness-right img').forEach(Technology_img => {
    Technology_img.addEventListener('click', function() {
        const Technology_fullscreenOverlay = document.getElementById('fullscreenOverlay');
        const Technology_fullscreenImage = document.getElementById('fullscreenImage');
        const Technology_toggleButton = document.getElementById('toggle-btn');

        if (!Technology_fullscreenOverlay || !Technology_fullscreenImage || !Technology_toggleButton) return;

        Technology_fullscreenOverlay.style.display = 'flex';

        if (Technology_images[Technology_img.id]) {
            const Technology_imageArray = Technology_images[Technology_img.id];
            Technology_fullscreenImage.src = Technology_imageArray[0];
            Technology_fullscreenImage.alt = Technology_img.alt || ''; 
            Technology_fullscreenImage.title = Technology_img.title || '';  
            Technology_toggleButton.dataset.images = JSON.stringify(Technology_imageArray);
            Technology_toggleButton.dataset.currentIndex = 0; 
        }
    });
});

document.getElementById('toggle-btn').addEventListener('click', function() {
    const Technology_fullscreenImage = document.getElementById('fullscreenImage');
    const Technology_imagesArray = JSON.parse(this.dataset.images || '[]');
    let Technology_currentIndex = parseInt(this.dataset.currentIndex || '0');

    if (Technology_imagesArray.length === 0) return;

    Technology_currentIndex = (Technology_currentIndex + 1) % Technology_imagesArray.length; 

    Technology_fullscreenImage.src = Technology_imagesArray[Technology_currentIndex];
    this.dataset.currentIndex = Technology_currentIndex;
});

document.getElementById('fullscreenOverlay').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

document.getElementById('fullscreenOverlay').addEventListener('wheel', function() {
    this.style.display = 'none';
});

document.getElementById('fullscreenOverlay').addEventListener('touchmove', function() {
    this.style.display = 'none';
});












// FOOTER EMAIL 
document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const emailInput = document.getElementById('email-input');
    const emailValue = emailInput.value.trim();
    const gmailDomain = '@gmail.com';
    
    if (emailValue) {
        if (emailValue.endsWith(gmailDomain)) {
window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=najam@thebravenext.com&su=Email Submission&body=User Email: ${emailValue}`, '_blank');
            emailInput.value = ''; 
        } else {
            alert('Please enter a valid email address ending with ' + gmailDomain);
        }
    } else {
        alert('Please enter a valid email address.');
    }
});

document.getElementById('email-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); 
        document.getElementById('email-form').dispatchEvent(new Event('submit'));
    }
});
// FOOTER EMAIL END