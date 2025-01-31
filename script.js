document
  .getElementById("signInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    if (validateEmail(email)) {
      alert("Proceeding to password page...");
      // Here you can redirect to the next step of the sign-in process
    } else {
      alert("Please enter a valid email or phone number");
    }
  });

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
