db.collection("bookings").onSnapshot((snapshot) => {
    const bookingsList = document.getElementById("bookingsList");
    bookingsList.innerHTML = ""; // Clear old data
  
    snapshot.forEach((doc) => {
      const booking = doc.data();
      bookingsList.innerHTML += `
        <div class="booking-card">
          <p><strong>${booking.clientName}</strong></p>
          <p>${booking.date} at ${booking.time}</p>
          <p>Service: ${booking.service}</p>
        </div>
      `;
    });
  });