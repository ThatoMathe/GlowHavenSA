
document.addEventListener('DOMContentLoaded', async () => {
  //Firebase functions
  const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");
  const { getFirestore, collection, addDoc } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");

  // Firebase
  const firebaseConfig = {
      apiKey: "AIzaSyA4IYaCqjfAbH8xrSipChJWy4pJJkf2LPA",
      authDomain: "glowhavenza.firebaseapp.com",
      projectId: "glowhavenza",
      storageBucket: "glowhavenza.firebasestorage.app",
      messagingSenderId: "667313723125",
      appId: "1:667313723125:web:5256b355262d2bd2d757bc",
      measurementId: "G-X3NSHDX8MH"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const bookingsCollection = collection(db, "bookings");

  // FullCalendar
  const calendarEl = document.getElementById('calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      selectable: true,
      dateClick: function(info) {
          document.getElementById('appointmentDate').value = info.dateStr;
      }
  });
  calendar.render();

  //form submission
  document.getElementById('appointmentForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const bookingData = {
          name: document.getElementById('clientName').value,
          phone: document.getElementById('clientPhone').value,
          service: document.getElementById('serviceType').value,
          date: document.getElementById('appointmentDate').value,
          time: document.getElementById('appointmentTime').value,
          status: 'Pending',
          createdAt: new Date()
      };

      try {
          const docRef = await addDoc(bookingsCollection, bookingData);
          alert(`Booking confirmed! Reference: ${docRef.id}`);
          e.target.reset();
      } catch (error) {
          console.error("Error adding booking: ", error);
          alert("Booking failed. Please try again.");
      }
  });
});