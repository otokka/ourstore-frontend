// ===== CART STORAGE =====
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}


function showCartToast(message = "Item added to cart") {
  const toast = document.getElementById("cartToast");
  if (!toast) return;

  toast.querySelector("span").innerText = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

function addToCart(productId, size = null, selectedImage = null) {

  if (typeof products === "undefined") return;

  const product = products.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existingItem = cart.find(p =>
    p.id === productId && p.size === size && p.image === (selectedImage || product.image)
  );

  if (existingItem) {
    showCartToast("Item already in cart!");
    return;
  }

  cart.push({
    id: product.id,
    name: product.name,
    price: product.price,
    image: selectedImage || product.image,
    size: size,
    qty: 1
  });

  saveCart(cart);
  updateCartUI();
  showCartToast("Item added to cart!");
}

// ===== QUANTITY CONTROLS =====
function increaseQty(index) {
  const cart = getCart();
  cart[index].qty += 1;
  saveCart(cart);
  updateCartUI();
}

function decreaseQty(index) {
  const cart = getCart();
  if (cart[index].qty > 1) {
    cart[index].qty -= 1;
  }
  saveCart(cart);
  updateCartUI();
}

// ===== REMOVE ITEM =====
function removeItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  updateCartUI();
}

// ===== UPDATE UI =====
function updateCartUI() {
  const cart = getCart();

  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;
  });

  // Header
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  if (cartCount) cartCount.innerText = count;
  if (cartTotal) cartTotal.innerText = total;

  // Cart page
  const cartItems = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");

  if (totalEl) totalEl.innerText = total;
  if (!cartItems) return;

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const subtotal = item.price * item.qty;

    const div = document.createElement("div");
    div.className = "order-card";

    div.innerHTML = `
      <div style="display:flex;gap:15px;align-items:center;">
        <img src="${item.image}" style="width:80px;height:80px;object-fit:contain;">
        <div style="flex:1;">
          <h3>${item.name}</h3>
${item.size ? `<p>Size: ${item.size}</p>` : ""}
<p>Price: ₹${item.price}</p>

          <div style="display:flex;align-items:center;gap:10px;">
            <button onclick="decreaseQty(${index})">−</button>
            <strong>${item.qty}</strong>
            <button onclick="increaseQty(${index})">+</button>
          </div>
          <p><strong>Subtotal:</strong> ₹${subtotal}</p>
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      </div>
    `;

    cartItems.appendChild(div);
  });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  updateCartUI();
});
