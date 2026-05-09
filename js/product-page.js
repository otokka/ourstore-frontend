const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));
const product = products.find(p => p.id === id);

if (!product) {
  alert("Product not found");
  window.location.href = "index.html";
}

document.getElementById("productName").innerText = product.name;
document.getElementById("productPrice").innerText = "₹" + product.price;

const mainImg = document.getElementById("mainImage");
const images = product.images || [product.image];
let currentIndex = 0;

// Set first image
mainImg.src = images[0];

// Build thumbnails
const thumbs = document.getElementById("thumbnails");
images.forEach((img, i) => {
  const image = document.createElement("img");
  image.src = img;
  image.onclick = () => {
    currentIndex = i;
    mainImg.src = img;
    updateActive();
  };
  if (i === 0) image.classList.add("active-thumb");
  thumbs.appendChild(image);
});

function updateActive() {
  document.querySelectorAll("#thumbnails img").forEach((t, i) => {
    t.classList.toggle("active-thumb", i === currentIndex);
  });
  mainImg.src = images[currentIndex];
}

// Arrow navigation
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateActive();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateActive();
}

const sizeDiv = document.getElementById("sizes");
const sizeSection = document.getElementById("sizeSection");
let selectedSize = null;

if (product.sizes && product.sizes.length > 0) {
  product.sizes.forEach(size => {
    const btn = document.createElement("button");
    btn.innerText = size;
    btn.onclick = () => {
      document.querySelectorAll("#sizes button").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedSize = size;
    };
    sizeDiv.appendChild(btn);
  });
} else {
  sizeSection.style.display = "none";
}

document.getElementById("addToCartBtn").addEventListener("click", () => {
  if (product.sizes && product.sizes.length > 0 && !selectedSize) {
    alert("Please select a size");
    return;
  }
  addToCart(product.id, selectedSize, images[currentIndex]);
});