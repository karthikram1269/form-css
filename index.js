const index = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('a1').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const phone = document.querySelector('input[type="tel"]').value;

    if (firstName === '') {
        alert('First Name is required');
        return;
    }

    if (email === '') {
        alert('Email is required');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return;
    }

    if (phone.length !== 10) {
        alert('Phone number must be exactly 10 digits');
        return;
    }

    alert('Form submitted successfully!');
    form.submit(); 
});

const dateTimeField = document.getElementById('dt');
dateTimeField.addEventListener('change', function () {
    console.log('Date Time value changed:', dateTimeField.value);
});

const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener('change', function () {
    const file = fileInput.files[0];
    if (file) {
        console.log('File selected:', file.name);
    }
});
