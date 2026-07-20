function processPayment() {
  const email = document.getElementById("email").value;
  if (!email) {
    alert("Email required for license delivery.");
    return;
  }

  const license =
    "BP-" + Math.random().toString(36).substring(2, 10).toUpperCase();

  localStorage.setItem("license", license);

  alert(
    "Payment Successful!\n\nLicense Key:\n" +
    license +
    "\n\nBlueprint will be sent to:\n" +
    email
  );
}
