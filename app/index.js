export function togglePasswordVisibility() {
    var passwordInput = document.getElementById("passwordInput");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }