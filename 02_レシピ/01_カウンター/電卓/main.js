const inputText1 = document.getElementById("input-text1")
const inputText2 = document.getElementById("input-text2")
const allArea = document.getElementById("all-area")
const allButton = document.getElementById("all-button")

const allNumber = function () {
  allArea.value = inputText1.value + inputText2.value
  console.log(allArea.value)
}

//inputText1.oninput = logValue
allButton.onclick = allNumber

//console.dir(input)
