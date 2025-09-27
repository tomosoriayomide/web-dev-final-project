// ===== Image Slider =====
let images = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];
let index = 0;
function changeSlide() {
  let slide = document.getElementById("slide");
  if (slide) {
    index = (index + 1) % images.length;
    slide.src = images[index];
  }
}
setInterval(changeSlide, 3000); // change every 3s

// ===== Contact Form Validation =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return;
      }

      if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
      }

      alert("Message sent successfully!");
      form.reset();
    });
  }
});
