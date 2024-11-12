const display = document.getElementById("display")
const buttons = document.getElementById("buttons")
const plusButton = buttons.children[0]
const twiceButton = buttons.children[1]
const minusButton = buttons.children[2]
let count = 0

plusButton.onclick = function () {
  //countを更新
  count += 1
  //countを表示
  display.textContent = count
}
twiceButton.onclick = function () {
  //countを更新
  count *= 2
  //countを表示
  display.textContent = count
}
minusButton.onclick = function () {
  //countを更新
  count -= 1
  //countを表示
  display.textContent = count
}
