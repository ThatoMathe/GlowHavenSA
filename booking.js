const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function bookAppointment(date, time, clientName, service) {
    db.collection("bookings").add({
        date: date,
        time: time,
        clientName: clientName,
        service: service,
        status: "confirmed"
    }).then(() => {
        alert("Booking confirmed!");
    });
}