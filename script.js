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



// MENU
document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelector('.navbar-toggler');
    
    toggler.addEventListener('click', function () {
        if (this.textContent.trim() === 'MENU') {
            this.textContent = 'CLOSE';
        } else {
            this.textContent = 'MENU';
        }
    });
});

// MENU END

// H1
var sentences = ["  Environment, Health, and Safety (EHS) with AI"];
var currentSentence = 0;
var currentSentenceChar = 0;
var intervalValue;
var textElement = document.querySelector("#text");
var myCursor = document.querySelector("#cursor");

function TypingEffect() {
    var text = sentences[currentSentence].substring(0, currentSentenceChar + 1);
    textElement.innerHTML = text;
    currentSentenceChar++;
    
    if (text === sentences[currentSentence]) {
        clearInterval(intervalValue);
        setTimeout(function () {
            intervalValue = setInterval(DeletingEffect, 60);
        }, 1300); 
    }
}

function DeletingEffect() {
    var text = sentences[currentSentence].substring(0, currentSentenceChar - 1);
    textElement.innerHTML = text;
    currentSentenceChar--;
    
    if (text === '') {
        clearInterval(intervalValue);
        if (currentSentence === sentences.length - 1) {
            currentSentence = 0;
        } else {
            currentSentence++;
        }
        
        currentSentenceChar = 0;
        
        setTimeout(function () {
            myCursor.style.display = 'inline-block';
            intervalValue = setInterval(TypingEffect, 50);
        }, 100);
    }
}

intervalValue = setInterval(TypingEffect, 100);
// H1 End

// H4 Hover CHANGE
let lastHoveredId = null; 

function showSection1() {
    const section1 = document.getElementById('section1');
    const videoSection = document.getElementById('section1-right-video-section');

    if (section1) {
        section1.style.display = 'block'; 
    }

    if (videoSection) {
        videoSection.style.display = 'block';
    }
}

document.querySelectorAll('.hover-target').forEach(item => {
    item.addEventListener('click', event => {
        event.stopPropagation(); 
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        const videoSection = document.getElementById('section1-right-video-section');
        if (videoSection) {
            videoSection.style.display = 'none';
        }

        const targetId = item.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetId === 'section1') {
            showSection1();
        } else {
            targetSection.style.display = 'block';
        }

        lastHoveredId = targetId; 
    });
});
document.addEventListener('click', event => {
    if (!event.target.closest('.hover-target')) {
        if (lastHoveredId) {
            const lastHoveredSection = document.getElementById(lastHoveredId);
            if (lastHoveredSection) {
                lastHoveredSection.style.display = 'block';
            }

            const videoSection = document.getElementById('section1-right-video-section');
            videoSection.style.display = 'none'; 
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    showSection1();

    document.querySelectorAll('.content-section').forEach(section => {
        if (section.id !== 'section1') {
            section.style.display = 'none';
        }
    });
});

// H4 Hover CHANGE END

// faq visible
document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll('#bspecial-all-container-left h5, #bspecial-all-container-mid h5');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        headers.forEach(header => {
            const rect = header.getBoundingClientRect();

            if (rect.top < windowHeight && rect.bottom >= 0) {
                header.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility(); 
});
// faq visible end

// MAP
document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('global-map-container');
    const circles = document.querySelectorAll('.circle');

    const handleScroll = () => {
        const rect = mapContainer.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            mapContainer.classList.add('visible'); 
            circles.forEach(circle => {
                circle.style.visibility = 'visible';
            });
            
            window.removeEventListener('scroll', handleScroll);
        }
    };

    window.addEventListener('scroll', handleScroll);
});

// MAP END

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



// EHS HEROES LARGE SCREEN 
const ehsLargeCardSlider = document.querySelector('.card-slider');
const ehsLargeCards = document.querySelectorAll('.ehs-card');
const ehsLargeNextArrow = document.querySelector('.next-arrow');

let ehsLargeCurrentIndex = 0;
const ehsLargeTotalCards = ehsLargeCards.length;
const cloneCount = 50;  
let isUpdating = false;

const allCards = Array.from(ehsLargeCards); 

function cloneCards() {
    for (let i = 0; i < cloneCount; i++) {
        ehsLargeCards.forEach(card => {
            const clone = card.cloneNode(true);
            ehsLargeCardSlider.appendChild(clone);
            clone.addEventListener('click', handleCardClick);
            allCards.push(clone); 
        });
    }
}

function ehsLargeUpdateCardDisplay() {
    const ehsLargeCardNameDisplay = document.getElementById('card-name-display');
    const ehsLargeEhsName = document.getElementById('ehs-name');
    const ehsLargeEhsDescription = document.getElementById('ehs-description');

    const currentCard = allCards[ehsLargeCurrentIndex % allCards.length]; 
    ehsLargeCardNameDisplay.textContent = currentCard.dataset.name;
    ehsLargeEhsName.textContent = currentCard.querySelector('.card-name').textContent;
    ehsLargeEhsDescription.textContent = currentCard.dataset.description;

    const ehsLargeOffset = -ehsLargeCurrentIndex * (currentCard.offsetWidth + 10);
    ehsLargeCardSlider.style.transform = `translateX(${ehsLargeOffset}px)`;
}

function ehsLargeShowNextCard() {
    if (isUpdating) return; 
    isUpdating = true;

    ehsLargeCurrentIndex++;
    ehsLargeUpdateCardDisplay();
    setTimeout(() => {
        isUpdating = false;
    }, 300);
}

function handleCardClick(event) {
    const card = event.currentTarget; 
    ehsLargeCurrentIndex = allCards.indexOf(card);
    ehsLargeUpdateCardDisplay(); 

    const clone = card.cloneNode(true);
    ehsLargeCardSlider.appendChild(clone);
    clone.addEventListener('click', handleCardClick);
    allCards.push(clone); 
}

ehsLargeCards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});

cloneCards();
ehsLargeUpdateCardDisplay();
ehsLargeNextArrow.addEventListener('click', ehsLargeShowNextCard);

// EHS HEROES END LARGE SCREEN

// EHS HEROES SMALL SCREEN
const ehsSmallCards = [
    {
        title: "Wasili Gusko",
        upperTitle: "Swire Coca-Cola",
        description: "In just six months of implementation, we’ve experienced significant improvements in our operational efficiency and safety culture.",
        image: "/images/man.png"
    },
    {
        title: "Hans Jhon",
        upperTitle: "IcyWind",
        description: "Our commitment to ensuring safe work environments is significantly enhanced by our key ally.",
        image: "/images/man3.png"
    },
    {
        title: "Allan Parsalle",
        upperTitle: "Griggles",
        description: "Our dedication to safe work environments is bolstered by our trusted partner.",
        image: "/images/man2.png"
    },
    {
        title: "Chris Turnor",
        upperTitle: "Amazon",
        description: "We are proud to have a vital partner in our mission to create safe work environments.",
        image: "/images/man4.png"
    },
    {
        title: "Seth Rollin",
        upperTitle: "Hutamaki",
        description: "Our commitment to providing a safe workplace is strengthened by our essential partner.",
        image: "/images/man5.png"
    },
];

const cardContainer = document.getElementById("small-ehs-card-container");
const titleElement = document.getElementById("card-title");
const descriptionElement = document.getElementById("card-description");
const titleSpanElement = document.getElementById("card-title-span"); // New span element
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let ehsSmallCurrentIndex = 0;

// Create cards by repeating the original set 3 times
function initializeCards() {
    for (let i = 0; i < 3; i++) {
        ehsSmallCards.forEach(cardData => {
            const card = createCard(cardData);
            cardContainer.appendChild(card);
            if (i !== 0) {
                card.style.transform = `translateX(100%)`;
            }
        });
    }
}

function createCard(cardData) {
    const card = document.createElement("div");
    card.classList.add("ehs-small-card");
    card.innerHTML = `<img src="${cardData.image}" title="The Brave Next" alt="${cardData.title}"><h3>${cardData.title}</h3>`;
    return card;
}

function updateCards() {
    const cards = document.querySelectorAll('.ehs-small-card');
    const cardWidth = 250; 
    const cardMargin = 10; 
    const totalWidth = cardWidth + cardMargin * 2; 

    cards.forEach((card, index) => {
        card.style.transition = "transform 0.5s ease";
        card.style.transform = `translateX(${(index - ehsSmallCurrentIndex) * totalWidth}px)`;
    });

    const actualIndex = ehsSmallCurrentIndex % ehsSmallCards.length;
    titleElement.textContent = ehsSmallCards[actualIndex].upperTitle;
    descriptionElement.textContent = ehsSmallCards[actualIndex].description;
    titleSpanElement.textContent = ehsSmallCards[actualIndex].title; // Update span with title
}

// Button event listeners
prevButton.addEventListener("click", () => {
    ehsSmallCurrentIndex = (ehsSmallCurrentIndex - 1 + ehsSmallCards.length * 3) % (ehsSmallCards.length * 3);
    updateCards();
});

nextButton.addEventListener("click", () => {
    ehsSmallCurrentIndex = (ehsSmallCurrentIndex + 1) % (ehsSmallCards.length * 3);
    updateCards();
});

// Initialize and update cards
initializeCards();
updateCards();

// EHS HEROES END SMALL SCREEN



// SPECIAL FAQ
document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.special-faq-question');

    function toggleFAQ(event) {
        const clickedQuestion = event.currentTarget;
        const answer = clickedQuestion.nextElementSibling;

        clickedQuestion.classList.toggle('active');

        if (answer.classList.contains('expanded')) {
            answer.classList.remove('expanded');
        } else {
            document.querySelectorAll('.special-faq-answer').forEach(a => {
                if (a !== answer) {
                    a.classList.remove('expanded');
                    a.previousElementSibling.classList.remove('active');
                }
            });

            answer.classList.add('expanded');
        }
    }

    faqQuestions.forEach(question => {
        question.addEventListener('click', toggleFAQ);
    });
});
// SPECIAL FAQ PORTION END



// SPECIAL FAQ COLOR
document.querySelectorAll('.special-faq-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('active'); 
    });

    item.addEventListener('mouseleave', () => {
    });

    item.addEventListener('focus', () => {
        item.classList.add('active');
    });

    item.addEventListener('blur', () => {
        item.classList.remove('active'); 
    });
});

// SPECIAL FAQ COLOR EMD



// BSPECIAL SLIDE
const slides = document.querySelectorAll('.bslide');
const textBox = document.getElementById('bspecial-img-text-box');
const textItems = document.querySelectorAll('#bspecial-all-container-left h5, #bspecial-all-container-mid h5');
let currentIndex = 0;

function changeSlide(index) {
    const currentSlide = slides[currentIndex].querySelector('img');
    currentSlide.classList.add('blur');
    textBox.classList.add('fade-out');

    setTimeout(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = index;
        slides[currentIndex].classList.add('active');

        const newSlide = slides[currentIndex].querySelector('img');
        newSlide.classList.remove('blur');

        const newText = textItems[index].getAttribute('data-text');
        textBox.innerText = newText;
        textBox.classList.remove('fade-out');
    }, 500); // Match this duration to your CSS transition duration
}

function initializeSlides() {
    slides[0].classList.add('active');
    textBox.innerText = textItems[0].getAttribute('data-text');
}

textItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        const index = item.getAttribute('data-index');
        changeSlide(index);
    });
});

initializeSlides();
// BSPECIAL SLIDE END


// Counting Number
document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.counting-number');

    function startCounting(element, targetNumber) {
        let currentNumber = 0;
        const interval = 50; 
        const step = targetNumber / (2000 / interval); 

        const counter = setInterval(() => {
            currentNumber += step;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(counter);
            }
            
            if (targetNumber % 1 !== 0) {
                element.textContent = currentNumber.toFixed(1);
            } else {
                element.textContent = Math.round(currentNumber); 
            }
        }, interval);
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const targetNumber = parseFloat(element.getAttribute('data-target'));
                startCounting(element, targetNumber);
                observer.unobserve(element); 
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(counter => {
        observer.observe(counter);
    });
});

// Counting Number End





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






// Bspecial  Animation 

window.addEventListener('load', function() {
    const headings = document.querySelectorAll('#bspecial-all-container h5');

    const options = {
        root: null, 
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const heading = entry.target;
                heading.style.opacity = '0'; 
                heading.style.transform = 'translateX(-100%)'; 
                heading.style.transition = 'none';
                
         
                setTimeout(() => {
                    heading.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; 
                    heading.style.opacity = '1'; 
                    heading.style.transform = 'translateX(0)';
                }, index * 100); 

   
                observer.unobserve(heading);
            }
        });
    }, options);


    headings.forEach((heading) => {
        observer.observe(heading);
    });
});

// Bspecial  Animation 




// Industry Href
function updateNavLink() {
    const navLink = document.getElementById('industry-first-nav-item');
    if (window.innerWidth < 992) {
        navLink.href = "#Industry-Mobile"; 
    } else {
        navLink.href = "#Industry"; 
    }
}

updateNavLink();

window.addEventListener('resize', updateNavLink);
// Industry Href End

// Enterprise Section images
const enterprise_images = [
    { src: "./Images/Figma.png", alt: "The Brave Next Figma logo", title: "The Brave Next Figma logo" },
    { src: "./Images/Flutter.png", alt: "The Brave Next Flutter logo", title: "The Brave Next Flutter logo" },
    { src: "./Images/Dart.png", alt: "The Brave Next Dart logo", title: "The Brave Next Dart logo" },
    { src: "./Images/MySQL.png", alt: "The Brave Next MySQL logo", title: "The Brave Next MySQL logo" },
    { src: "./Images/Python.png", alt: "The Brave Next Python logo", title: "The Brave Next Python logo" },
    { src: "./Images/MongoDB.png", alt: "The Brave Next MongoDB logo", title: "The Brave Next MongoDB logo" },
    { src: "./Images/Js.png", alt: "The Brave Next JavaScript logo", title: "The Brave Next JavaScript logo" },
    { src: "./Images/React.png", alt: "The Brave Next React logo", title: "The Brave Next React logo" },
    { src: "./Images/Angular.png", alt: "The Brave Next Angular logo", title: "The Brave Next Angular logo" },
    { src: "./Images/Nodejs.png", alt: "The Brave Next Node.js logo", title: "The Brave Next Node.js logo" },
    { src: "./Images/Rails.png", alt: "The Brave Next Ruby on Rails logo", title: "The Brave Next Ruby on Rails logo" },
    { src: "./Images/PHP.png", alt: "The Brave Next PHP logo", title: "The Brave Next PHP logo" },
    { src: "./Images/Swift.png", alt: "The Brave Next Swift logo", title: "The Brave Next Swift logo" },
    { src: "./Images/Kotlin.png", alt: "The Brave Next Kotlin logo", title: "The Brave Next Kotlin logo" },
    { src: "./Images/Java.png", alt: "The Brave Next Java logo", title: "The Brave Next Java logo" },
    { src: "./Images/Typescript.png", alt: "The Brave Next TypeScript logo", title: "The Brave Next TypeScript logo" },
    { src: "./Images/Tensorflow.png", alt: "The Brave Next TensorFlow logo", title: "The Brave Next TensorFlow logo" },
    { src: "./Images/Docker.png", alt: "The Brave Next Docker logo", title: "The Brave Next Docker logo" },
    { src: "./Images/Redis.png", alt: "The Brave Next Redis logo", title: "The Brave Next Redis logo" },
    { src: "./Images/GraphQL.png", alt: "The Brave Next GraphQL logo", title: "The Brave Next GraphQL logo" },
    { src: "./Images/PostgreSQL.png", alt: "The Brave Next PostgreSQL logo", title: "The Brave Next PostgreSQL logo" },
    { src: "./Images/firebase.png", alt: "The Brave Next Firebase logo", title: "The Brave Next Firebase logo" },
    { src: "./Images/Jupiter-notebook.png", alt: "The Brave Next Jupyter Notebook logo", title: "The Brave Next Jupyter Notebook logo" },
    { src: "./Images/Sass.png", alt: "The Brave Next Sass logo", title: "The Brave Next Sass logo" }
];


let enterprise_currentIndex = 0;

const enterprise_imgContainer = document.getElementById("enterprise-img-container");

function enterprise_showImages() {
    enterprise_imgContainer.innerHTML = "";
    const enterprise_imagesToShow = enterprise_images.slice(enterprise_currentIndex, enterprise_currentIndex + 6);
    enterprise_imagesToShow.forEach(image => {
        const enterprise_img = document.createElement("img");
        enterprise_img.src = image.src;  
        enterprise_img.alt = image.alt;
        enterprise_img.title = image.title;
        enterprise_imgContainer.appendChild(enterprise_img);
    });
    enterprise_currentIndex += 6;
    if (enterprise_currentIndex >= enterprise_images.length) {
        enterprise_currentIndex = 0;
    }
}
enterprise_showImages();

setInterval(() => {
    enterprise_showImages();
}, 2000);





// All Harness
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const closeBtn = document.querySelector('.close');
const videoContainer = document.getElementById('all-harness-second-main');
const listItems = document.querySelectorAll('#all-haress-tab-container li');
const videoData = [
    '<video id="video1" class="fill-video rounded-video" autoplay loop muted><source src="video1.mp4" type="video/mp4"></video>',
    '<video id="video2" class="fill-video rounded-video" autoplay loop muted><source src="video2.mp4" type="video/mp4"></video>',
    '<video id="video3" class="fill-video rounded-video" autoplay loop muted><source src="video3.mp4" type="video/mp4"></video>',
    '<video id="video4" class="fill-video rounded-video" autoplay loop muted><source src="video4.mp4" type="video/mp4"></video>',
    '<video id="video5" class="fill-video rounded-video" autoplay loop muted><source src="video5.mp4" type="video/mp4"></video>',
    '<video id="video6" class="fill-video rounded-video" autoplay loop muted><source src="video6.mp4" type="video/mp4"></video>'
];
let PopcurrentIndex = 0;
function createProgressBar() {
    const progressBarWrapper = document.createElement('div');
    progressBarWrapper.classList.add('progress-bar-wrapper');
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressBarWrapper.appendChild(progressBar);
    return progressBarWrapper;
}
function updateProgressBar(progressBar, videoElement) {
    const percentage = (videoElement.currentTime / videoElement.duration) * 100;
    progressBar.style.width = `${percentage}%`;
}
function playNextVideo(index) {
    videoContainer.innerHTML = videoData[index];

    // Select the video element
    const contentHarnessRight = document.querySelector('#content-harness-right video');
    if (!contentHarnessRight) {
        console.error("Video element not found in #content-harness-right!");
        return;
    }

    const parent = contentHarnessRight.parentNode;
    if (!parent) {
        console.error("Parent node of contentHarnessRight is null!");
        return;
    }

    // Create and configure the new video element
    const newVideo = document.createElement('video');
    newVideo.setAttribute('src', `video${index + 1}.mp4`);
    newVideo.setAttribute('loop', '');
    newVideo.setAttribute('muted', '');
    newVideo.setAttribute('autoplay', '');

    // Replace the current video with the new one
    parent.replaceChild(newVideo, contentHarnessRight);

    // Add progress bar if needed
    const progressBarWrapper = createProgressBar();
    parent.appendChild(progressBarWrapper); // Ensure parent exists before calling appendChild

    // Update progress bar
    const progressBar = progressBarWrapper.querySelector('.progress-bar');
    newVideo.addEventListener('timeupdate', () => {
        updateProgressBar(progressBar, newVideo);
    });

    // Handle video end event
    newVideo.addEventListener('ended', () => {
        PopcurrentIndex = (PopcurrentIndex + 1) % videoData.length;
        playNextVideo(PopcurrentIndex);
        if (listItems[PopcurrentIndex]) {
            listItems[PopcurrentIndex].click();
        }
    });

    // Start playing the new video
    // newVideo.play();

}
videoContainer.addEventListener('click', () => {
    const videoElement = videoContainer.querySelector('video');
    const currentVideoIndex = videoData.findIndex(video => videoElement.src.includes(video));
    popupMessage.textContent = `You clicked on item ${currentVideoIndex + 1}`;
    popup.classList.add('show');
});
closeBtn.addEventListener('click', () => {
    popup.classList.remove('show');
});
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('show');
    }
});
function updateModalContent(li) {
    const heading = li.getAttribute("data-heading");
    const point1 = li.getAttribute("data-point1");
    const point2 = li.getAttribute("data-point2");
    const point3 = li.getAttribute("data-point3");
    const point4 = li.getAttribute("data-point4");
    document.getElementById("main-heading").textContent = heading;
    document.getElementById("point-1").textContent = point1;
    document.getElementById("point-2").textContent = point2;
    document.getElementById("point-3").textContent = point3;
    document.getElementById("point-4").textContent = point4;
    popup.style.display = "block";
}
listItems.forEach((li, index) => {
    li.addEventListener('click', () => {
        updateModalContent(li);
        playNextVideo(index);
    });
});
window.addEventListener('load', () => {
    setTimeout(() => {
        playNextVideo(PopcurrentIndex);
    }, 1000);
    if (listItems.length > 0) {
        listItems[0].click();
    }
});

// All Harness

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
    link.href = 'https://thebravenext.com/';  
    document.head.appendChild(link);
});


// Robot Tag
document.addEventListener('DOMContentLoaded', function() {
    var metaTag = document.createElement('meta');
    metaTag.name = "robots";
    metaTag.content = "index, follow";  
    document.head.appendChild(metaTag);
});




// Header Video Loop

  const videoUrls = [
    // 'video6.mp4',
    'AI in Retail The Brave Next Era of Detecting Shopping Bags, Trolleys, and Cash Counters.mp4',
    'The Brave Next AI-Driven EHS Monitoring of Industrial Worker Movements.mp4'
  ];

  let currentVideoIndex = 0;

  function changeVideo() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    
    videoSource.src = videoUrls[currentVideoIndex];

    videoPlayer.load();
    videoPlayer.play();

    currentVideoIndex = (currentVideoIndex + 1) % videoUrls.length;
  }

  setInterval(changeVideo, 6000);
  changeVideo();
//   End


// Custom Spinner in Sevices
window.onload = function() {
    const targetElement = document.querySelector('.All-harness-main-container');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(function() {
                    document.querySelector('#loadingSpinner').style.display = 'none';
                    targetElement.classList.add('content-loaded');
                }, 7000); 

                targetElement.classList.add('spinner-visible');
                observer.disconnect();
            }
        });
    }, {
        threshold: 0.5
    });
    observer.observe(targetElement);
};
















// HARNESS IMAGE FULL SCREEN
const images = {
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
document.querySelectorAll('.harness-right img').forEach(img => {
    img.addEventListener('click', function() {
        const fullscreenOverlay = document.getElementById('fullscreenOverlay');
        const fullscreenImage = document.getElementById('fullscreenImage');
        const toggleButton = document.getElementById('toggle-btn');

        if (!fullscreenOverlay || !fullscreenImage || !toggleButton) return;

        fullscreenOverlay.style.display = 'flex';

        if (images[img.id]) {
            const imageArray = images[img.id];
            fullscreenImage.src = imageArray[0];
            fullscreenImage.alt = img.alt || ''; 
            fullscreenImage.title = img.title || '';  
            toggleButton.dataset.images = JSON.stringify(imageArray);
            toggleButton.dataset.currentIndex = 0; 
        }
    });
});

document.getElementById('toggle-btn').addEventListener('click', function() {
    const fullscreenImage = document.getElementById('fullscreenImage');
    const imagesArray = JSON.parse(this.dataset.images || '[]');
    let currentIndex = parseInt(this.dataset.currentIndex || '0');

    if (imagesArray.length === 0) return;

    currentIndex = (currentIndex + 1) % imagesArray.length; 

    fullscreenImage.src = imagesArray[currentIndex];
    this.dataset.currentIndex = currentIndex;
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









// Harness image animatioon
const harnessDivs = document.querySelectorAll('.harness-right');

function addMouseMoveEffect() {
  harnessDivs.forEach(harness => {
    harness.addEventListener('mousemove', (e) => {
      const { clientY: mouseY } = e;
      const { top, height } = harness.getBoundingClientRect();
      const centerY = top + height / 2;
      
      const rotateX = ((mouseY - centerY) / height) * 10; // Up-down tilt effect
      
      harness.style.transform = `perspective(500px) rotateX(${rotateX}deg)`;
    });

    harness.addEventListener('mouseleave', () => {
      harness.style.transition = 'transform 0.3s ease-in-out';
      harness.style.transform = 'perspective(500px) rotateX(0)';
    });
  });
}

function removeMouseMoveEffect() {
  harnessDivs.forEach(harness => {
    harness.removeEventListener('mousemove', () => {});
    harness.removeEventListener('mouseleave', () => {});
    harness.style.transform = ''; // Reset transformation on smaller screens
  });
}

function handleResize() {
  if (window.innerWidth < 768) {
    removeMouseMoveEffect();
  } else {
    addMouseMoveEffect();
  }
}

// Initialize on page load
handleResize();

// Re-check on window resize
window.addEventListener('resize', handleResize);
















// HOW WE WORK ANIMATION
document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll('.step-container > div');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const step = entry.target;
                if (step.classList.contains('step-number')) {
                    if (step.id === 'step-number-1') {
                        step.classList.add('animate-from-left');
                    } else if (step.id === 'step-number-2') {
                        step.classList.add('animate-from-right');
                    } else if (step.id === 'step-number-3') {
                        step.classList.add('animate-from-top');
                    } else if (step.id === 'step-number-4') {
                        step.classList.add('animate-from-bottom');
                    }else if (step.id === 'step-number-5') {
                        step.classList.add('animate-from-bottom');
                    }
                }

                if (step.classList.contains('step-circle')) {
                    if (step.id === 'step-circle-1') {
                        step.classList.add('animate-from-left');
                    } else if (step.id === 'step-circle-2') {
                        step.classList.add('animate-from-right');
                    } else if (step.id === 'step-circle-3') {
                        step.classList.add('animate-from-top');
                    } else if (step.id === 'step-circle-4') {
                        step.classList.add('animate-from-bottom');
                    } else if (step.id === 'step-circle-5') {
                        step.classList.add('animate-from-bottom');
                    }
                }

                if (step.classList.contains('step-box')) {
                    if (step.id === 'step-box-1') {
                        step.classList.add('animate-from-left');
                    } else if (step.id === 'step-box-2') {
                        step.classList.add('animate-from-right');
                    } else if (step.id === 'step-box-3') {
                        step.classList.add('animate-from-top');
                    } else if (step.id === 'step-box-4') {
                        step.classList.add('animate-from-bottom');
                    }else if (step.id === 'step-box-5') {
                        step.classList.add('animate-from-bottom');
                    }
                    
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, 
        threshold: 0.1 
    });
    steps.forEach(step => {
        observer.observe(step);
    });
});







// Small Screen 
document.addEventListener("DOMContentLoaded", function () {
    const smallSteps = document.querySelectorAll('.small-step-container > div');
    const smallStepObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const smallStep = entry.target;

                if (smallStep.classList.contains('step-circle')) {
                    if (smallStep.id === 'small-step-circle-1') {
                        smallStep.classList.add('animate-small-from-left');
                    } else if (smallStep.id === 'small-step-circle-2') {
                        smallStep.classList.add('animate-small-from-right');
                    } else if (smallStep.id === 'small-step-circle-3') {
                        smallStep.classList.add('animate-small-from-top');
                    } else if (smallStep.id === 'small-step-circle-4') {
                        smallStep.classList.add('animate-small-from-bottom');
                    } else if (smallStep.id === 'small-step-circle-5') {
                        smallStep.classList.add('animate-small-from-bottom');
                    }
                }

                if (smallStep.classList.contains('small-step-line')) {
                    if (smallStep.id === 'small-step-line-1') {
                        smallStep.classList.add('animate-small-from-left');
                    } else if (smallStep.id === 'small-step-line-2') {
                        smallStep.classList.add('animate-small-from-right');
                    } else if (smallStep.id === 'small-step-line-3') {
                        smallStep.classList.add('animate-small-from-top');
                    } else if (smallStep.id === 'small-step-line-4') {
                        smallStep.classList.add('animate-small-from-bottom');
                    }
                    else if (smallStep.id === 'small-step-line-5') {
                        smallStep.classList.add('animate-small-from-bottom');
                    }
                }

                if (smallStep.classList.contains('small-step-text-container')) {
                    if (smallStep.id === 'small-step-text-container-1') {
                        smallStep.classList.add('animate-small-from-left');
                    } else if (smallStep.id === 'small-step-text-container-2') {
                        smallStep.classList.add('animate-small-from-right');
                    } else if (smallStep.id === 'small-step-text-container-3') {
                        smallStep.classList.add('animate-small-from-top');
                    } else if (smallStep.id === 'small-step-text-container-4') {
                        smallStep.classList.add('animate-small-from-bottom');
                    }
                    else if (smallStep.id === 'small-step-text-container-5') {
                        smallStep.classList.add('animate-small-from-bottom');
                    }
                }

                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1 
    });

    smallSteps.forEach(step => {
        smallStepObserver.observe(step);
    });
});





// Numbers Carousel



// Call Pop Up 

document.addEventListener("DOMContentLoaded", function () {
    function showPopup() {
        document.getElementById("call-popip-main-container").style.display = "flex";
    }

    function hidePopup() {
        document.getElementById("call-popip-main-container").style.display = "none";
        setTimeout(showPopup, 20000); 
    }

    setTimeout(showPopup, 10000);

    document.getElementById("cancel").addEventListener("click", hidePopup);

    function openWhatsApp() {
        console.log("Opening WhatsApp...");
        window.open("https://api.whatsapp.com/send?phone=447463151997", "_blank");
    }

    let whatsappNumber = document.getElementById("Whatsapp-number");
    if (whatsappNumber) {
        whatsappNumber.addEventListener("click", openWhatsApp);
    } else {
        console.error("Element #Whatsapp-number not found!");
    }
});

// Disappeare and Appear And Cancel

// Call Pop Up




// About Carousel For mobile
const carousel = document.getElementById("about-card-carousel");
let isDragging = false;
let startX, scrollLeft, velocity = 0;
let isAutoScrolling = true;
function autoSlide() {
    if (!isDragging) {
        carousel.scrollBy({ left: 320, behavior: "smooth" });
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
            carousel.scrollTo({ left: 0, behavior: "smooth" });
        }
    }
}
setInterval(autoSlide, 3000);

carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    velocity = 0;
    carousel.style.scrollBehavior = "auto"; 
});

carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1;
    carousel.scrollLeft = scrollLeft - walk;
    velocity = walk; 
});

carousel.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.style.scrollBehavior = "smooth"; 
    requestAnimationFrame(momentumScroll);
});

carousel.addEventListener("mouseleave", () => {
    isDragging = false;
});

function momentumScroll() {
    if (Math.abs(velocity) < 0.5) return;
    carousel.scrollLeft -= velocity;
    velocity *= 0.95; 
    requestAnimationFrame(momentumScroll);
}
carousel.addEventListener("dragstart", (e) => e.preventDefault());

// About Carousel For mobile
