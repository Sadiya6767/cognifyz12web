/*Task 4: Interactive Button*/

function myFunction() {
    document.getElementById("myDIV").style.backgroundColor = "lightblue";
}



//Task 6:form stylling and validation

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Reset error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation
    let isValid = true;

    if (username === '') {
        isValid = false;
        document.getElementById('usernameError').textContent = 'Username is required';
    }

    if (email === '') {
        isValid = false;
        document.getElementById('emailError').textContent = 'Email is required';
    } else if (!isValidEmail(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
    }

    if (password === '') {
        isValid = false;
        document.getElementById('passwordError').textContent = 'Password is required';
    }

    // Submit the form if valid
    if (isValid) {
        alert('Form registered successfully');
    }
});

//email validation function
function isValidEmail(email) {
    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


// Task 5: API Integration


document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('users-list');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.id}: ${user.name} (${user.email})`;
                userList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});

