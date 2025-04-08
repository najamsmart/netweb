
// Canonical

document.addEventListener('DOMContentLoaded', function() {
    var link = document.createElement('link');
    link.rel = 'canonical';
    link.href = 'https://thebravenext.com/retail-monitoring-system';  
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