const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
let count = 0

plusButton.onclick = function () {
  //countを更新
  count += 1
  //countを表示
  display.textContent = count
}
