const products = [
  // ===== FEATURED =====
  {
    id: 1,
    category: "featured",
    name: "Wireless Headphones",
    price: 2500,
    image: "assets/images/product1.jpg",
    images: [
      "assets/images/headphone1.jpg",
      "assets/images/headphone2.jpg",
      "assets/images/headphone3.jpg"
    ]
  },
  {
    id: 2,
    category: "featured",
    name: "Smart Watch",
    price: 4000,
    image: "assets/images/product2.jpg",
    images: [
      "assets/images/watch1.jpg",
      "assets/images/watch2.jpg",
      "assets/images/watch3.jpg"
    ]
  },
  {
    id: 3,
    category: "featured",
    name: "Running Shoes",
    price: 3200,
    image: "assets/images/product3.jpg",
    images: [
      "assets/images/shoe1.jpg",
      "assets/images/shoe2.jpg",
      "assets/images/shoe3.jpg"
    ],
    sizes: [6, 7, 8, 9, 10]
  },
  {
    id: 4,
    category: "featured",
    name: "Handbag",
    price: 1800,
    image: "assets/images/product4.jpg",
    images: [
      "assets/images/bag1.jpg",
      "assets/images/bag2.jpg",
      "assets/images/bag3.jpg"
    ]
  },

  // ===== MEN'S =====
  {
    id: 101,
    category: "mens",
    name: "Watch",
    price: 4000,
    image: "assets/images/m-watch-main.jpg",
    images: [
      "assets/images/m-watch-main.jpg",
      "assets/images/m-watch-1.jpg",
      "assets/images/m-watch-2.jpg"
    ]
  },
  {
    id: 102,
    category: "mens",
    name: "Car Edition Watch",
    price: 7500,
    image: "assets/images/m-car-edition-watch-main.jpg",
    images: [
      "assets/images/m-car-edition-watch-main.jpg",
      "assets/images/m-car-edition-watch-1.jpg",
      "assets/images/m-car-edition-watch-2.jpg"
    ]
  },
  {
    id: 103,
    category: "mens",
    name: "Outfits",
    price: 5000,
    image: "assets/images/m-outfits-main.jpg",
    images: [
      "assets/images/m-outfits-main.jpg",
      "assets/images/m-outfits-1.jpg",
      "assets/images/m-outfits-2.jpg"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 104,
    category: "mens",
    name: "Formal Outfits",
    price: 8000,
    image: "assets/images/m-formal-outfits-main.jpg",
    images: [
      "assets/images/m-formal-outfits-main.jpg",
      "assets/images/m-formal-outfits-1.jpg",
      "assets/images/m-formal-outfits-2.jpg"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 105,
    category: "mens",
    name: "Sneaker Shoes",
    price: 3500,
    image: "assets/images/m-sneaker-shoes-main.jpg",
    images: [
      "assets/images/m-sneaker-shoes-main.jpg",
      "assets/images/m-sneaker-shoes-1.jpg",
      "assets/images/m-sneaker-shoes-2.jpg"
    ],
    sizes: [6, 7, 8, 9, 10]
  },
  {
    id: 106,
    category: "mens",
    name: "Shoes",
    price: 4500,
    image: "assets/images/m-shoes-main.jpg",
    images: [
      "assets/images/m-shoes-main.jpg",
      "assets/images/m-shoes-1.jpg",
      "assets/images/m-shoes-2.jpg"
    ],
    sizes: [6, 7, 8, 9, 10]
  },

  // ===== WOMEN'S =====
  {
    id: 201,
    category: "womens",
    name: "Casual Outfits",
    price: 5499,
    image: "assets/images/w-casual-outfits-main.jpg",
    images: [
      "assets/images/w-casual-outfits-main.jpg",
      "assets/images/w-casual-outfits-1.jpg",
      "assets/images/w-casual-outfits-2.jpg",
      "assets/images/w-casual-outfits-3.jpg"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 202,
    category: "womens",
    name: "Formal Outfits",
    price: 8499,
    image: "assets/images/w-formal-outfits-main.jpg",
    images: [
      "assets/images/w-formal-outfits-main.jpg",
      "assets/images/w-formal-outfits-1.jpg",
      "assets/images/w-formal-outfits-2.jpg"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 203,
    category: "womens",
    name: "Bags",
    price: 1500,
    image: "assets/images/w-bags-main.jpg",
    images: [
      "assets/images/w-bags-main.jpg",
      "assets/images/w-bags-1.jpg",
      "assets/images/w-bags-2.jpg"
    ]
  },
  {
    id: 204,
    category: "womens",
    name: "Levi Bags",
    price: 2500,
    image: "assets/images/w-levi-bags-main.jpg",
    images: [
      "assets/images/w-levi-bags-main.jpg",
      "assets/images/w-levi-bags-1.jpg",
      "assets/images/w-levi-bags-2.jpg"
    ]
  },
  {
    id: 205,
    category: "womens",
    name: "Necklace",
    price: 1250,
    image: "assets/images/w-necklace-main.jpg",
    images: [
      "assets/images/w-necklace-main.jpg",
      "assets/images/w-necklace-1.jpg",
      "assets/images/w-necklace-2.jpg"
    ]
  },
  {
    id: 206,
    category: "womens",
    name: "Diamond Necklace",
    price: 12500,
    image: "assets/images/w-diamond-necklace-main.jpg",
    images: [
      "assets/images/w-diamond-necklace-main.jpg",
      "assets/images/w-diamond-necklace-1.jpg",
      "assets/images/w-diamond-necklace-2.jpg"
    ]
  }
];

let filteredProducts = [...products];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("productContainer");
  if (container) {
    renderProducts(products.filter(p => p.category === "featured"));
  }
});

function renderProducts(productList) {
  const productContainer = document.getElementById("productContainer");
  if (!productContainer) return;

  productContainer.innerHTML = "";

  if (productList.length === 0) {
    productContainer.innerHTML = `
      <p style="grid-column: 1 / -1; text-align: center;">
        No products found.
      </p>
    `;
    return;
  }

  productList.forEach(product => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isSaved = wishlist.includes(product.id);

    const wrapper = document.createElement("a");
    wrapper.href = "product.html?id=" + product.id;
    wrapper.style.textDecoration = "none";
    wrapper.style.color = "inherit";
    wrapper.style.display = "block";

    const card = document.createElement("div");
    card.className = "product-card";
    card.id = "product-" + product.id;

    card.innerHTML = `
      <div class="bookmark ${isSaved ? "saved" : ""}" data-id="${product.id}">
        <i class="fas fa-bookmark"></i>
      </div>
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
      <button class="btn add-to-cart-btn" data-id="${product.id}">
        Add to Cart
      </button>
    `;

    wrapper.appendChild(card);
    productContainer.appendChild(wrapper);
  });

  bindAddToCartButtons();
  bindBookmarkButtons();
}

function bindAddToCartButtons() {
  const buttons = document.querySelectorAll(".add-to-cart-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const productId = parseInt(btn.dataset.id);
      addToCart(productId);
    });
  });
}

let searchTimeout = null;

function searchProducts() {
  clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    const searchValue = document
      .getElementById("searchInput")
      .value
      .trim()
      .toLowerCase();

    if (searchValue === "") {
      renderProducts(products.filter(p => p.category === "featured"));
      return;
    }

    filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchValue)
    );

    renderProducts(filteredProducts);
  }, 500);
}

function bindBookmarkButtons() {
  const icons = document.querySelectorAll(".bookmark");
  icons.forEach(icon => {
    icon.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const id = parseInt(icon.dataset.id);
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      if (wishlist.includes(id)) {
        wishlist = wishlist.filter(item => item !== id);
        icon.classList.remove("saved");
        showWishlistToast("Removed from Wishlist!");
      } else {
        wishlist.push(id);
        icon.classList.add("saved");
        showWishlistToast("Added to Wishlist!");
      }

      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    });
  });
}

function showWishlistToast(message = "Added to Wishlist!") {
  const toast = document.getElementById("wishlistToast");
  if (!toast) return;
  toast.querySelector("span").innerText = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}