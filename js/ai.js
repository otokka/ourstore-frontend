document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("chatbot-btn");
  const box = document.getElementById("chatbox");
  const closeBtn = document.getElementById("closeChat");

  if (btn && box && closeBtn) {
    btn.addEventListener("click", () => {
      box.classList.add("show-chat");
    });

    closeBtn.addEventListener("click", () => {
      box.classList.remove("show-chat");
    });
  }

});


function sendMessage() {
  const input = document.getElementById("chat-input");
  const chat = document.getElementById("aiChat");


  const text = input.value.trim();
  if (!text) return;

  // Show user message
  chat.innerHTML += `<div><b>You:</b> ${text}</div>`;

  input.value = "";

  const query = text.toLowerCase();

  // SEARCH PRODUCTS
  const results = products.filter(p =>
    p.name.toLowerCase().includes(query)
  );

  if (results.length > 0) {
    let reply = "<b>AI:</b> I found these products:<br>";

    results.forEach(p => {
      reply += `• ${p.name} — ₹${p.price}<br>`;
    });

    chat.innerHTML += `<div>${reply}</div>`;
  } else {
   fetch("https://ai-server-ab9y.onrender.com/chat", {

  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ message: text })
})
.then(res => res.json())
.then(data => {
  chat.innerHTML += `<div><b>AI:</b> ${data.reply}</div>`;
  chat.scrollTop = chat.scrollHeight;
})
.catch(() => {
  chat.innerHTML += `<div><b>AI:</b> Server error. Try again.</div>`;
});

  }

  chat.scrollTop = chat.scrollHeight;
}
