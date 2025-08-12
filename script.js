function showMessage(id) {
  const messages = {
    mensaje1: "Recuerdo cuando me hiciste sonreír sin razón.",
    mensaje2: "Prometo estar contigo incluso en la distancia.",
    mensaje3: "Cada día contigo es una flor que florece en mi corazón."
  };

  document.getElementById("message-text").textContent = messages[id];
  document.getElementById("message-box").classList.remove("hidden");
}

function closeMessage() {
  document.getElementById("message-box").classList.add("hidden");
}
