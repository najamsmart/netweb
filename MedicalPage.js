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




// Li Active State
document.querySelectorAll('#medical-card-second-container-left ul li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('#medical-card-second-container-left ul li').forEach(li => {
            li.classList.remove('active');
        });
        this.classList.add('active');
    });
    item.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
            this.classList.add('hover');
        }
    });
    item.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.classList.remove('hover');
        }
    });
});




// CARD Load More
document.addEventListener('DOMContentLoaded', () => {
    const loadMoreButton = document.querySelector('#medical-card-second-container-right button');
    const hiddenCardContainer = document.querySelector('#hidden-card-container');
    loadMoreButton.addEventListener('click', () => {
        hiddenCardContainer.style.display = 'block';
        loadMoreButton.style.display = 'none'; 
    });
});



// Card Filteration
document.addEventListener('DOMContentLoaded', function () {
    const filterItems = document.querySelectorAll('#medical-card-second-container-left li');
    const cards = document.querySelectorAll('#medical-card-containment');
    filterItems.forEach(item => {
        item.addEventListener('click', function () {
            const selectedCategory = this.textContent.toLowerCase();
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none'; 
                }
            });
        });
    });
});














window.onload = function() {
    const letters = document.querySelectorAll('#medical-header-main-container h1 span');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = 1; // Fade in
            letter.style.transform = 'translateX(0)'; // Move to original position
        }, index * 100); // Stagger each letter's animation
    });
};



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
    link.href = 'https://thebravenext.com/medicalpage';  
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