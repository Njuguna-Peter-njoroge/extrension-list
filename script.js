// === Theme toggle ===
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.src = document.body.classList.contains("dark")
    ? "./assets/images/icon-sun.svg"
    : "./assets/images/icon-moon.svg";
});

// === Toggle active/inactive ===
document.querySelectorAll(".cards .toggle").forEach(toggle => {
  toggle.addEventListener("click", function () {
    const card = this.closest(".cards");
    const isActive = card.getAttribute("data-active") === "true";
    card.setAttribute("data-active", !isActive);
  });
});

// === Remove with modal ===
document.querySelectorAll(".cards").forEach(card => {
  const removeBtn = card.querySelector(".remove-btn");
  const modal = card.querySelector(".modal");
  const confirmBtn = card.querySelector(".confirmRemove");
  const cancelBtn = card.querySelector(".cancelRemove");

  // Open modal
  removeBtn.addEventListener("click", () => {
    modal.classList.add("show");
  });

  // Confirm remove
  confirmBtn.addEventListener("click", () => {
    card.remove();
  });

  // Cancel remove
  cancelBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // Close when clicking outside modal-box
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("show");
  });
});

// === Filter buttons ===
const filterButtons = document.querySelectorAll(".header-right .buttons p");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.textContent.trim().toLowerCase();
    const cards = document.querySelectorAll(".cards");

    cards.forEach(card => {
      const isActive = card.getAttribute("data-active") === "true";

      if (filter === "all") {
        card.style.display = "block";
      } else if (filter.startsWith("active")) {
        card.style.display = isActive ? "block" : "none";
      } else if (filter.startsWith("inactive")) {
        card.style.display = !isActive ? "block" : "none";
      }
    });
  });
});
