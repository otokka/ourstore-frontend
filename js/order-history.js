function renderOrderHistory() {
  const container = document.getElementById("order-history");
  if (!container) return;

  const orders = JSON.parse(localStorage.getItem("orderHistory")) || [];
  container.innerHTML = "";

  if (orders.length === 0) {
    container.innerHTML = "<p>No orders found.</p>";
    return;
  }

  orders.forEach((order, index) => {
    const orderDiv = document.createElement("div");
    orderDiv.className = "order-card";

    let total = 0;

    const itemsHTML = order.items.map(item => {
      const subtotal = item.price * item.qty;
      total += subtotal;

      return `
        <div style="display:flex;gap:15px;margin-bottom:10px;">
          <img src="${item.image}" style="width:70px;height:70px;object-fit:contain;">
          <div>
            <strong>${item.name}</strong><br>
            Qty: ${item.qty}<br>
            Subtotal: ₹${subtotal}
          </div>
        </div>
      `;
    }).join("");

    orderDiv.innerHTML = `
      <h3>Order #${index + 1}</h3>
      <p><strong>Date:</strong> ${order.date}</p>
      <p><strong>Payment:</strong> ${order.payment}</p>
      <hr>
      ${itemsHTML}
      <hr>
      <h4>Total Paid: ₹${total}</h4>
    `;

    container.appendChild(orderDiv);
  });
}

/* Initial load */
document.addEventListener("DOMContentLoaded", renderOrderHistory);

/* Back / forward navigation */
window.addEventListener("pageshow", renderOrderHistory);

/* When tab becomes active again */
document.addEventListener("visibilitychange", function () {
  if (!document.hidden) {
    renderOrderHistory();
  }
});

/* Disable BFCache safely */
window.addEventListener("unload", function () {});
