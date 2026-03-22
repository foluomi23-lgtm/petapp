document.addEventListener("DOMContentLoaded", function() {
  var routes = {"home":"index.html","shop":"shop.html","message":"message.html","mine":"mine.html"};
  document.querySelectorAll(".tab-bar a, .tab-bar button").forEach(function(el) {
    var key = el.getAttribute("data-tab");
    if (key && routes[key]) {
      el.addEventListener("click", function(e) { e.preventDefault(); window.location.href = routes[key]; });
    }
  });
  document.querySelectorAll(".back-btn").forEach(function(btn) {
    btn.addEventListener("click", function(e) { e.preventDefault(); history.length > 1 ? history.back() : (window.location.href = "index.html"); });
  });
});
