// Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})
// Cursor End



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



// ALL h6
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.all-h6'); 

    const typewriterEffect = (element, text) => {
        element.textContent = ''; 
        let index = 0; 

        const type = () => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100); 
            }
        };

        type(); 
    };

    const handleScroll = () => {
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();

            if (rect.top < window.innerHeight && rect.bottom > 0 && element.style.opacity === '0') {
                element.style.opacity = '1';
                typewriterEffect(element, element.textContent); 
                element.style.opacity = '1'; 
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
});

// All H6 End


// Back To Top
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("backtotop-main-container").style.display = "block";
    } else {
        document.getElementById("backtotop-main-container").style.display = "none";
    }
};
document.getElementById("back-to-top-btn").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
// Back To Top





// Canonical

document.addEventListener('DOMContentLoaded', function() {
    var link = document.createElement('link');
    link.rel = 'canonical';
    link.href = 'https://thebravenext.com/legal';  
    document.head.appendChild(link);
});


// Robot Tag
document.addEventListener('DOMContentLoaded', function() {
    var metaTag = document.createElement('meta');
    metaTag.name = "robots";
    metaTag.content = "index, follow";  
    document.head.appendChild(metaTag);
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