let topFunction = document.getElementById("myBtn");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 200) {
  topFunction.style.display = "block";
  } else {
  topFunction.style.display = "none";
  }
};

topFunction.onclick = function (){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};


function scrollToContact() {
  document.getElementById("contactSection").scrollIntoView({
    behavior: "smooth"
  })
};

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  document.getElementById("message").textContent =
    "Thank you " + name + "! We will contact you soon.";
});


document.getElementById("writeMessage").addEventListener("submit", function(event) {
  event.preventDefault();

  const message = document.getElementById("messageTwo").value;

  document.getElementById("message").textContent =
    "Thank You! Your message has been sent:" + message;

  document.getElementById("messageTwo").value = "";
});

 


  