async function payNow() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const payment = document.getElementById("payment").value;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const token = localStorage.getItem("token");

  if (!name || !address) {
    alert("Please fill in all fields!");
    return;
  }

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Create Razorpay order
  const res = await fetch("https://ecommerce-backend-ei0m.onrender.com/api/payment/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ amount: total })
  });

  const order = await res.json();

  const options = {
    key: "rzp_test_SgUwZnzwyyfW0W",
    amount: order.amount,
    currency: "INR",
    name: "OurStore",
    description: "Test Payment",
    order_id: order.id,

    handler: async function (response) {
      try {
        // Save order to MongoDB
        await fetch("https://ecommerce-backend-ei0m.onrender.com/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
          body: JSON.stringify({
            userName: name,
            userEmail: user?.email || "",
            items: cart,
            totalAmount: total,
            paymentMethod: payment,
            paymentId: response.razorpay_payment_id,
            address: address
          })
        });

        // Save to localStorage as backup
        const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
        orderHistory.push({
          name,
          address,
          payment,
          items: cart,
          date: new Date().toLocaleString(),
          paymentId: response.razorpay_payment_id,
          total
        });
        localStorage.setItem("orderHistory", JSON.stringify(orderHistory));

        // Clear cart
        localStorage.removeItem("cart");

        window.location.href = "order-success.html";

      } catch (err) {
        console.error("Order save error:", err);
        window.location.href = "order-success.html";
      }
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}