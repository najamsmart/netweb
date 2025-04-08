const phrases = ["  with our Data Science and solutions"];
let activePhrase = 0;
let activeCharIndex = 0;
let typeInterval;

const dynamicTextElement = document.querySelector("#dynamic-text");
const cursorElement = document.querySelector("#data-cursor");

function typeEffect() {
    const content = phrases[activePhrase].substring(0, activeCharIndex + 1);
    dynamicTextElement.textContent = content;
    activeCharIndex++;

    if (content === phrases[activePhrase]) {
        clearInterval(typeInterval);
        setTimeout(() => {
            typeInterval = setInterval(deleteEffect, 60);
        }, 1300);
    }
}

function deleteEffect() {
    const content = phrases[activePhrase].substring(0, activeCharIndex - 1);
    dynamicTextElement.textContent = content;
    activeCharIndex--;

    if (content === '') {
        clearInterval(typeInterval);
        activePhrase = (activePhrase + 1) % phrases.length;
        activeCharIndex = 0;

        setTimeout(() => {
            cursorElement.style.display = 'inline-block';
            typeInterval = setInterval(typeEffect, 50);
        }, 100);
    }
}

typeInterval = setInterval(typeEffect, 100);




// Canonical

document.addEventListener('DOMContentLoaded', function() {
    var link = document.createElement('link');
    link.rel = 'canonical';
    link.href = 'https://thebravenext.com/data-science';  
    document.head.appendChild(link);
});


// Robot Tag
document.addEventListener('DOMContentLoaded', function() {
    var metaTag = document.createElement('meta');
    metaTag.name = "robots";
    metaTag.content = "index, follow";  
    document.head.appendChild(metaTag);
});













const dvideoUrls = [
    'Anomaly Detection in Network Traffic The Brave Next Step in Cybersecurity.mp4',
    'The Brave Next How AI is Revolutionizing Sales Management with Auto-Updated Dashboard.mp4'
];

let dcurrentVideoIndex = 0;

function changeVideo() {
    const dvideoPlayer = document.getElementById('dvideoPlayer');
    const dvideoSource = document.getElementById('dvideoSource');
    
    dvideoSource.src = dvideoUrls[dcurrentVideoIndex];
    
    dvideoPlayer.load();
    dvideoPlayer.play();
    dcurrentVideoIndex = (dcurrentVideoIndex + 1) % dvideoUrls.length;
}

setInterval(changeVideo, 6000);
changeVideo();







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