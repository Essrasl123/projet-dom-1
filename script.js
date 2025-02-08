document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne tous les boutons "+" et "-"
  const plusButtons = document.querySelectorAll(".fa-plus-circle");
  const minusButtons = document.querySelectorAll(".fa-minus-circle");
  const deleteButtons = document.querySelectorAll(".fa-trash-alt");
  const heartButtons = document.querySelectorAll(".fa-heart");
  const totalPriceElement = document.querySelector(".total");

  // Fonction pour mettre à jour le prix total
  function updateTotalPrice() {
      let total = 0;
      document.querySelectorAll(".card").forEach((card) => {
          const quantity = parseInt(card.querySelector(".quantity").textContent);
          const price = parseFloat(card.querySelector(".unit-price").textContent.replace("$", ""));
          total += quantity * price;
      });
      totalPriceElement.textContent = total.toFixed(2) + " $";
  }

  // Gestion du bouton "+"
  plusButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
          let quantityElement = this.nextElementSibling;
          let quantity = parseInt(quantityElement.textContent);
          quantity++;
          quantityElement.textContent = quantity;
          updateTotalPrice();
      });
  });

  // Gestion du bouton "-"
  minusButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
          let quantityElement = this.previousElementSibling;
          let quantity = parseInt(quantityElement.textContent);
          if (quantity > 0) {
              quantity--;
              quantityElement.textContent = quantity;
              updateTotalPrice();
          }
      });
  });

  // Gestion du bouton "Supprimer"
  deleteButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
          this.closest(".card-body").remove();
          updateTotalPrice();
      });
  });

  // Gestion du bouton "Like" ❤️
  heartButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
          this.classList.toggle("liked");
      });
  });

  // Initialisation du prix total
  updateTotalPrice();
});
