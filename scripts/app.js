document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;

    if (!fullName || !email) {
        alert('Please fill in all required fields.');
        event.preventDefault(); // Stop form from submitting
    }
});

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    let appointmentDate = document.getElementById('date').value;
    let appointmentTime = document.getElementById('time').value;

    if (!appointmentDate || !appointmentTime) {
        alert('Please select a valid date and time for the appointment.');
        event.preventDefault(); // Stop form from submitting
    } else {
        alert('Your appointment has been booked!');
    }
});
