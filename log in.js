document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // You can add your own authentication logic here
    if (username === "aziz dridi" && password === "azizdridi19202002") {
      alert("Login successful!");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
  