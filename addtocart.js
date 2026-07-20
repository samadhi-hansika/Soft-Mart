let cartCount = localStorage.getItem("cartCount") || 0;
document.getElementById("cart-count").innerText = cartCount;

function addToCart() {
  cartCount++;
  localStorage.setItem("cartCount", cartCount);
  document.getElementById("cart-count").innerText = cartCount;
  alert("Item added to cart!");
    function goToPayment() {
    window.location.href = "payment.html";
  }

}
