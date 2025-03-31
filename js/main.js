import { db } from './firebase-init.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

document.addEventListener('DOMContentLoaded', () => {
    const bookingsCollection = collection(db, "bookings");
    
    document.getElementById('bookingForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const bookingData = {
            name: document.getElementById('name').value,
            date: document.getElementById('date').value,
            service: document.getElementById('service').value,
            createdAt: new Date()
        };

        try {
            const docRef = await addDoc(bookingsCollection, bookingData);
            alert(`Booking confirmed! ID: ${docRef.id}`);
        } catch (error) {
            console.error("Error:", error);
            alert("Booking failed. Please try again.");
        }
    });
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0 = Sunday
    
    const responseIndicator = document.createElement('div');
    responseIndicator.className = 'response-time p-3 mt-3 text-center';
    
    if (day === 0 || (day === 6 && hour >= 14) || hour < 9 || hour >= 19) {
        responseIndicator.innerHTML = `
            <p class="mb-1"><i class="fas fa-clock me-2"></i> Currently outside business hours</p>
            <p class="small mb-0">Responses may take longer than usual</p>
        `;
    } else {
        responseIndicator.innerHTML = `
            <p class="mb-1"><i class="fas fa-bolt me-2"></i> Currently within business hours</p>
            <p class="small mb-0">Average response time: 2-4 hours</p>
        `;
    }
    
    document.querySelector('.contact-info-card').appendChild(responseIndicator);
});