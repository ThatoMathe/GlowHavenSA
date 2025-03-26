function bookAppointment() {
    const clientName = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const service = document.getElementById("service").value;
  
    // Save to Firestore
    db.collection("bookings").add({
      clientName: clientName,
      date: date,
      time: time,
      service: service,
      status: "Pending"
    })
    .then(() => {
      alert("Booking saved! 🎉");
    })
    .catch((error) => {
      alert("Error: " + error);
    });
  }