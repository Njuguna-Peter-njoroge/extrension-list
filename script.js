// ==================== THEME TOGGLE ====================
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

// ==================== COUNTERS + FILTER ====================
const filterBtns = document.querySelectorAll(".filter-btn");
const countAll = document.getElementById("countAll");
const countActive = document.getElementById("countActive");
const countInactive = document.getElementById("countInactive");

function updateCounts() {
  const cards = document.querySelectorAll(".cards");
  const active = document.querySelectorAll('.cards[data-active="true"]').length;
  const inactive = document.querySelectorAll('.cards[data-active="false"]').length;

  countAll.textContent = cards.length;
  countActive.textContent = active;
  countInactive.textContent = inactive;
}

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    document.querySelectorAll(".cards").forEach(card => {
      if (filter === "all") {
        card.style.display = "block";
      } else {
        const isActive = card.getAttribute("data-active") === "true";
        if ((filter === "active" && isActive) || (filter === "inactive" && !isActive)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });
  });
});

// ==================== TOGGLE ACTIVE/INACTIVE ====================
document.querySelectorAll(".toggle").forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    const card = e.target.closest(".cards");
    const isActive = card.getAttribute("data-active") === "true";
    card.setAttribute("data-active", !isActive);
    updateCounts();
  });
});

// ==================== MODAL HANDLING ====================
document.querySelectorAll(".cards").forEach(card => {
  const removeBtn = card.querySelector(".remove-btn");
  const modal = card.querySelector(".modal");
  const confirmBtn = card.querySelector(".confirmRemove");
  const cancelBtn = card.querySelector(".cancelRemove");

  // Open modal
  removeBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Confirm remove
  confirmBtn.addEventListener("click", () => {
    card.remove();
    modal.style.display = "none";
    updateCounts();
  });

  // Cancel remove
  cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// ==================== INITIALIZE ====================
updateCounts();
