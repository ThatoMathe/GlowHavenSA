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