console.log('hello world');

/// welcomespeech();

/// function welcomespeech() {
    /// Show prompt to ask for name
   /// let name = prompt("Enter your name:");

    /// Greet the user with their name
    document.getElementById('greet-name').innerHTML = `Hola ${name}, `;
//}

/// Form validation function
function validateForm() {
    /// Get form input values
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;
    
    /// Check if any field is empty
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
    } else {
        /// Show success message
        alert(`Thank u ${name}, Form submitted successfully!`);
    }
}
