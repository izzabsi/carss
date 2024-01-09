function validateForm() {
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var message = document.getElementById('message').value;

    var nameError = document.getElementById('nameError');
    var numberError = document.getElementById('numberError');
    var messageError = document.getElementById('messageError');

    // Reset error messages
    nameError.textContent = 'Enter a name!!';
    numberError.textContent = 'Enter a number!!';
    messageError.textContent = 'Enterr Message';

    // Perform validation
    if (name.trim() === '') {
        nameError.textContent = 'Name is required';
        return false;
    }

    if (isNaN(number) || number.trim() === '') {
        numberError.textContent = 'Please enter a valid number';
        return false;
    }

    if (message.trim() === '') {
        messageError.textContent = 'Message is required';
        return false;
    }

    // If all validations pass, the form will be submitted
    return true;
}