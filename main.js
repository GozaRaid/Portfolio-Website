window.onload = function() {
  window.scrollTo(0, 0);
}

window.onbeforeunload = function() {
  window.location.reload(false);
}

//FadeinSection
document.addEventListener('DOMContentLoaded', function() {
  fadeInSections();
  window.addEventListener('scroll', fadeInSections);
  window.addEventListener('resize', fadeInSections);
});

function fadeInSections() {
  const sections = document.querySelectorAll('.to-fade-in');
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight) {
      section.classList.add('is-visible');
    } else {
      section.classList.remove('is-visible');
    }
  });
}

//Navbar effect
document.addEventListener("DOMContentLoaded",function(){
  var navbar = document.getElementById("navbar")
  window.addEventListener("scroll", function(){
    if (window.scrollY) {
      navbar.classList.add("on-scroll");
    } else {
      navbar.classList.remove("on-scroll");
    }
  });
  
  var menu_btn = document.querySelector('.hamburger-lines');
	var mobile_menu = document.querySelector('.nav-mobile');

	menu_btn.addEventListener('click', function () {
    mobile_menu.classList.add("on-scroll");
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});

});

//scroll-behavior
document.addEventListener("DOMContentLoaded", function() {
  var navbarHeight = document.getElementById("navbar").offsetHeight;
  var links = document.querySelectorAll("#navbar div a");
  links.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        var targetPosition = targetElement.offsetTop - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});

//animated-percentage
document.addEventListener("DOMContentLoaded", function() {
  // Select the elements with class "percentage"
  var elements = document.querySelectorAll('.percentage');

  // Function to handle intersection of the target element with the viewport
  function handleIntersection(entries, observer) {
    entries.forEach(function(entry) {
      // Check if the target element is intersecting with the viewport
      if (entry.isIntersecting) {
        var targetNumber = parseInt(entry.target.textContent);
        var currentNumber = 0;

        var interval = setInterval(function() {
          currentNumber += Math.ceil(targetNumber / 50);
          if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(interval);
          }
          entry.target.textContent = currentNumber + "%";
        }, 80);
        // Stop observing the target element after the animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }
  // Create a new IntersectionObserver instance
  var observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
  // Observe each element with class "percentage"
  elements.forEach(function(element) {
    observer.observe(element);
  });
});


// Contact form
var script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
script.onload = function() {
  emailjs.init({
    publicKey: "yXQSNbLVMqzgtjElu"
  });
};
document.head.appendChild(script);

var button = document.getElementById("sendmail");
button.addEventListener('click', function (event) {
  event.preventDefault();
  SendMail();
})

function SendMail(){
  var parms = {
    from_name : document.getElementById("name").value,
    email_id : document.getElementById("email").value,
    message : document.getElementById("message").value
  }
  
  if(!parms.from_name || !parms.email_id || !parms.message){
    alert("Please fill out all fields");
    return;
  } else {
    emailjs.send("service_lgbpk25","template_c4fkpk8",parms)
    .then(alert("Email sent successfully!"))
    .catch(function(err){
      alert("Failed to send email: " + err);
    });
  }
}

// document.querySelectorAll('.nav-mobile a').forEach(link => {
//   link.addEventListener('click',function(event){
//     event.preventDefault();
//     var target = this.getAttribute('href');
//     var section = document.querySelector(target);
//     document.querySelector('.nav-mobile').style.width = "0";
//   })
// })
