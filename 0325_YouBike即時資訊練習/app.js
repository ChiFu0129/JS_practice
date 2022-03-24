// 程式碼寫這裡
const API =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
const ul = document.querySelector("ul");

async function getAddress(input) {
  const rawData = await fetch(API);
  const address = await rawData.json();
  const addressList = address.filter(function (ad) {
    return ad.ar.includes(input);
  });
  addressList.forEach(function (ubike) {
    const addText = `<li class="list-group-item fs-5">
              <i class="fas fa-bicycle"></i>
              ${ubike.sna.replace("YouBike2.0_", "")} (${ubike.sbi})<br />
              <small class="text-muted">${ubike.ar}</small>
            </li>`;
    ul.insertAdjacentHTML("afterbegin", addText);
  });
}

// 重要：停止瀏覽器對於form 的『預設行為』
const form = document.querySelector("#searchForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputText = document.querySelector("input");
  if (inputText.value === "") {
    alert("尚未輸入任何文字");
    // 加一個alert以防使用者未輸入成功
  } else {
    getAddress(inputText.value);
    ul.innerHTML = "";
  }
});
