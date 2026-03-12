// Show a welcome message only on the home page
if (document.body.classList.contains("home-page")) {
  console.log("Welcome to EventX 🎉");
}

// Form validation for Register page
function validateForm(event) {
  event.preventDefault(); // stop default submit

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  if (name === "" || email === "" || phone === "") {
    alert("⚠️ All fields are required!");
    return false;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("❌ Please enter a valid email.");
    return false;
  }

  let phonePattern = /^[0-9]{10}$/;
  if (!phone.match(phonePattern)) {
    alert("❌ Phone number must be 10 digits.");
    return false;
  }

  alert("✅ Registration successful! 🎉");
  return true;
}
