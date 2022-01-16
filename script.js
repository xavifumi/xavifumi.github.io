var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.marginBottom = "0"
    } else {
      panel.style.maxHeight = panel.scrollHeight +"px";
      panel.style.marginBottom = "24px"
    }
  });
}