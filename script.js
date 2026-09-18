document.addEventListener("DOMContentLoaded", function () {

  // Smooth page transition
  document.querySelectorAll("a.next-btn").forEach(function (button) {

    button.addEventListener("click", function (event) {
      const target = button.getAttribute("href");

      if (!target) return;

      event.preventDefault();

      document.body.style.opacity = "0";

      setTimeout(function () {
        window.location.href = target;
      }, 250);
    });

  });

});
