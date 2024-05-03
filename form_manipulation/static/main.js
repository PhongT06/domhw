class User {
    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.querySelector('form');

    userForm.addEventListener('submit', (event) => {
        event.preventDefault();
        handleFormSubmission(event);
    });
});

let users = [];

function handleFormSubmission(event) {
    const name = document.getElementById('formname').value;
    const email = document.getElementById('formemail').value;
    const message = document.getElementById('message').value;

    if (validateForm(name, email, message)) {
        const user = new User(name, email, message);
        users.push(user);
        console.log('User:', user);
        alert('User information submitted successfully!');
    } else {
        alert('Please fill out all required fields.');
    }
}

function validateForm(name, email, message) {
    return name.trim() !== '' && email.trim() !== '' && message.trim() !== '';
}
