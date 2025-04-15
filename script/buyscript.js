function creatConfirmationOrder() {
  const content = createOverlay();
  showProcessingSpinner(content);
}

function createOverlay() {
  const overlay = document.createElement("div");
  overlay.className = "overlay";

  const content = document.createElement("div");
  content.className = "overlay-content";

  overlay.appendChild(content);
  document.body.appendChild(overlay);

  return content;
}

function showProcessingSpinner(content) {
  const spinner = document.createElement("div");
  spinner.className = "spinner";

  const text = document.createElement("p");
  text.textContent = "Ihre Bestellung wird bearbeitet...";

  content.append(spinner, text);
  setTimeout(() => {
    spinner.remove();
    text.remove();
    showThankYouAndRedirect(content);
  }, 3000);
}

function showThankYouAndRedirect(content) {
  const thankText = document.createElement("p");
  thankText.textContent = "Ihre Bestellung wurde erfolgreich bearbeitet ! ";

  const noteText = document.createElement("p");
  noteText.textContent =
    "Guten Appetit wünscht Ihnen das Team von Bestellendo ❤️";

  content.append(thankText, noteText);
  setTimeout(() => {
    window.location.href = "index.html";
  }, 3000);
}
