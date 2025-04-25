document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const course = document.getElementById("course").value.trim();

  if (!fullName || !email || !dob || !gender || !course) {
    alert("Please fill in all fields.");
    return;
  }

  document.getElementById("successMessage").textContent = "Registration successful!";
  this.reset();
});
