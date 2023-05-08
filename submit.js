// Get the form element
const form = document.querySelector("form");

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Send the form data to the server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "submit-form.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Handle the successful response
        window.location.href = "thankyou.html";
      } else {
        // Handle the error response
        alert("Sorry, an error occurred. Please try again.");
      }
    }
  };
  xhr.send(new URLSearchParams(formData).toString());
});
