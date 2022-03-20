// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
const btn = document.querySelector("button")
const h = document.querySelector("#bodyHeight")
const w = document.querySelector("#bodyWeight")
const result = document.querySelector("#resultText")

btn.addEventListener("click", function () {
  result.textContent = (
    Number(w.value) /
    (Number(h.value / 100) * Number(h.value / 100))
  ).toFixed(3)
})
