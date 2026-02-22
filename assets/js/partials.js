document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");
  let loaded = 0;

  includes.forEach(el => {
    const file = el.getAttribute("data-include");

    fetch(file)
      .then(res => res.text())
      .then(html => {
        el.innerHTML = html;
        loaded++;

        // Quand tous les partials sont chargés
        if (loaded === includes.length) {
          document.dispatchEvent(new Event("partialsLoaded"));
        }
      })
      .catch(err => console.error("Include error:", err));
  });
});
