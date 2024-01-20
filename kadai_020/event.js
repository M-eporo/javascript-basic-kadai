const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(e) {
  text.textContent = "ボタンをクリックしました。";
});