// Update this to your backend chat endpoint
const API_URL = "http://localhost:5000/chat";

const launcher = document.getElementById("chat-launcher");
const panel = document.getElementById("chat-panel");
const closeBtn = document.getElementById("close-btn");
const minimizeBtn = document.getElementById("minimize-btn");
const messagesEl = document.getElementById("messages");
const inputEl = document.getElementById("input");
const sendBtn = document.getElementById("send");
const unreadBadge = document.getElementById("unread-badge");
const langToggle = document.getElementById("lang-toggle");

let isOpen = false;
let unread = 0;
let language = "en"; // or 'hi' for Hindi

// simple persistence
function saveMessagesToStorage(data){
  try { localStorage.setItem("zennex_chat_history", JSON.stringify(data)); } catch(e){}
}
function loadMessagesFromStorage(){
  try { return JSON.parse(localStorage.getItem("zennex_chat_history")) || []; } catch(e){ return [];}
}

// render a message
function appendMessage(text, who){
  const div = document.createElement("div");
  div.className = `message ${who === "bot" ? "bot" : "user"}`;
  if(who === "bot"){
    // allow small HTML (links) safely - here we keep text only
    div.textContent = text;
  } else {
    div.textContent = text;
  }
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  // persist
  const hist = loadMessagesFromStorage();
  hist.push({who, text, ts: Date.now()});
  saveMessagesToStorage(hist);
}

// show typing indicator
function showTyping(){
  const t = document.createElement("div");
  t.className = "message bot typing";
  t.id = "typing";
  t.innerHTML = `<span class="typing"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>`;
  messagesEl.appendChild(t);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}
function hideTyping(){
  const t = document.getElementById("typing");
  if(t) t.remove();
}

// initial load
(function init(){
  const hist = loadMessagesFromStorage();
  hist.forEach(m => {
    const d = document.createElement("div");
    d.className = `message ${m.who === "bot" ? "bot" : "user"}`;
    d.textContent = m.text;
    messagesEl.appendChild(d);
  });
})();

// launcher events
launcher.addEventListener("click", () => {
  isOpen = true;
  panel.setAttribute("aria-hidden", "false");
  panel.style.display = "flex";
  launcher.style.display = "none";
  unread = 0;
  unreadBadge.hidden = true;
  inputEl.focus();
});

closeBtn.addEventListener("click", () => {
  isOpen = false;
  panel.setAttribute("aria-hidden", "true");
  panel.style.display = "none";
  launcher.style.display = "flex";
});

minimizeBtn.addEventListener("click", () => {
  isOpen = false;
  panel.setAttribute("aria-hidden", "true");
  panel.style.display = "none";
  launcher.style.display = "flex";
});

// language toggle
langToggle.addEventListener("click", () => {
  language = language === "en" ? "hi" : "en";
  langToggle.textContent = language === "en" ? "EN/HI" : "HI/EN";
});

// send message flow
async function sendMessage(){
  const text = inputEl.value.trim();
  if(!text) return;
  appendMessage(text, "user");
  inputEl.value = "";
  showTyping();

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ message: text, lang: language })
    });
    const data = await res.json();
    console.log("fetching data...");
    
    // expected { reply: "..." }
    hideTyping();
    if(data && data.reply){
      appendMessage(data.reply, "bot");
    } else {
      appendMessage("Sorry, I couldn't get an answer. Please try again.", "bot");
    }
  } catch (err){
    hideTyping();
    appendMessage("⚠️ Server error. Please try again later.", "bot");
    console.error(err);
  }
}

sendBtn.addEventListener("click", sendMessage);
inputEl.addEventListener("keydown", (e) => {
  if(e.key === "Enter") sendMessage();
});
