async function renderOrderHistory() {
  const container = document.getElementById("order-history");
  if (!container) return;

  const token = localStorage.getItem("token");

  if (!token) {
    container.innerHTML = "<p>Please login to view your orders.</p>";
    return;
  }

  container.innerHTML = "<p>Loading orders...</p>";

  try {
    const res = await fetch("https://ecommerce-backend-ei0m.onrender.com/api/orders/my-orders", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token
      }
    });

    const orders = await res.json();

    container.innerHTML = "";

    if (orders.length === 0) {
      container.innerHTML = "<p>No orders found.</p>";
      return;
    }

    orders.forEach((order, index) => {
      const orderDiv = document.createElement("div");
      orderDiv.className = "order-card";

      const itemsHTML = order.items.map(item => {
        const subtotal = item.price * item.qty;
        return `
          <div style="display:flex;gap:15px;margin-bottom:10px;">
            <img src="${item.image}" style="width:70px;height:70px;object-fit:contain;">
            <div>
              <strong>${item.name}</strong><br>
              ${item.size ? `Size: ${item.size}<br>` : ""}
              Qty: ${item.qty}<br>
              Subtotal: ₹${subtotal}
            </div>
          </div>
        `;
      }).join("");

      const date = new Date(order.createdAt).toLocaleString();

      orderDiv.innerHTML = `
        <h3>Order #${index + 1}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Status:</strong> 
          <span style="color:${order.status === 'Pending' ? '#f59e0b' : '#22c55e'}">
            ${order.status}
          </span>
        </p>
        <p><strong>Payment:</strong> ${order.paymentMethod.toUpperCase()}</p>
        <p><strong>Address:</strong> ${order.address}</p>
        <hr>
        ${itemsHTML}
        <hr>
        <h4>Total Paid: ₹${order.totalAmount}</h4>
      `;

      container.appendChild(orderDiv);
    });

  } catch (err) {
    console.error(err);
    container.innerHTML = "<p>Error loading orders. Please try again.</p>";
  }
}

document.addEventListener("DOMContentLoaded", renderOrderHistory);
window.addEventListener("pageshow", renderOrderHistory);