// Initialize total and elements
let total = 0;
const orderList = document.getElementById('order-list');
const totalDisplay = document.getElementById('total-price');

// Select all buttons
const buttons = document.querySelectorAll('.add-btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Find the item details
        const item = this.parentElement;
        const name = item.querySelector('h3').innerText;
        const price = parseInt(item.querySelector('.price').getAttribute('data-price'));

        // 1. Update the total
        total += price;
        totalDisplay.innerText = total.toLocaleString();

        // 2. Add item to the list
        const li = document.createElement('li');
        li.innerText = `${name} - ₦${price.toLocaleString()}`;
        orderList.appendChild(li);
    });
});
document.getElementById('checkout-btn').addEventListener('click', function() {
    let orderDetails = "New Order from Lagos Bite:%0A";
    const items = document.querySelectorAll('#order-list li');
    
    if (items.length === 0) {
        alert("Your order is empty!");
        return;
    }

    items.forEach(item => {
        orderDetails += "- " + item.innerText + "%0A";
    });

    orderDetails += "%0ATotal: ₦" + document.getElementById('total-price').innerText;

    // Replace +2348012345678 with your actual WhatsApp phone number
    const whatsappUrl = `https://wa.me/2348089994227?text=${orderDetails}`;
    window.open(whatsappUrl, '_blank');
});

// Reservation form logic
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your table has been requested.');
});