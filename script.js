// Theme toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Swap icon
  if (document.body.classList.contains("dark")) {
    themeToggle.src = "./assets/images/icon-sun.svg"; // change to sun
  } else {
    themeToggle.src = "./assets/images/icon-moon.svg"; // back to moon
  }
});

// Remove extension
document.querySelectorAll(".remove").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".cards");
    card.remove();
  });
});

// Toggle active/inactive
document.querySelectorAll(".toggle").forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    const card = e.target.closest(".cards");
    const isActive = card.getAttribute("data-active") === "true";

    card.setAttribute("data-active", !isActive);

    // Optional: update icon
    e.target.name = isActive ? "toggle" : "toggle-outline";
  });
});
