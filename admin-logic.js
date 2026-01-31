// 1. Firebase Configuration
const firebaseConfig = {
    databaseURL: "https://coffeecafe-5c8b2-default-rtdb.firebaseio.com/",
    projectId: "coffeecafe-5c8b2"
};

// 2. Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// 3. Listen for Orders in Real-Time
db.ref('orders').on('value', (snapshot) => {
    const orders = snapshot.val();
    const tableBody = document.getElementById('ordersBody');
    tableBody.innerHTML = ''; // Clear current rows

    if (!orders) {
        tableBody.innerHTML = '<tr><td colspan="4">No active orders</td></tr>';
        return;
    }

    for (let id in orders) {
        const order = orders[id];
        const itemsList = order.items.map(i => `${i.name} (x${i.quantity})`).join(', ');
        
        const row = `
            <tr>
                <td><strong>${order.customerName}</strong></td>
                <td>${itemsList}</td>
                <td>${order.total}</td>
                <td><button class="btn-done" onclick="removeItem('orders', '${id}')">Complete</button></td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    }
});

// 4. Listen for Reservations
db.ref('reservations').on('value', (snapshot) => {
    const resData = snapshot.val();
    const tableBody = document.getElementById('resBody');
    tableBody.innerHTML = '';

    if (!resData) {
        tableBody.innerHTML = '<tr><td colspan="4">No reservations</td></tr>';
        return;
    }

    for (let id in resData) {
        const res = resData[id];
        const row = `
            <tr>
                <td>${res.name}</td>
                <td>${res.date}<br><small>${res.time}</small></td>
                <td>${res.guests}</td>
                <td><button class="btn-done" onclick="removeItem('reservations', '${id}')">Clear</button></td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    }
});

// 5. Function to delete/complete entries
function removeItem(path, id) {
    if (confirm("Are you sure you want to clear this entry?")) {
        db.ref(`${path}/${id}`).remove()
            .then(() => console.log("Entry removed"))
            .catch(err => alert("Error: " + err.message));
    }
}