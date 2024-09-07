document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Mock payment processing
    const cardNumber = document.getElementById('cardNumber').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    // Here you would normally send payment data to a real payment API
    // Simulating a successful payment response
    setTimeout(() => {
        document.getElementById('paymentForm').style.display = 'none';
        document.getElementById('confirmation').style.display = 'block';
    }, 1000);
});
