const grid = document.getElementById("grid");

/* ====== 只改这里就能换尺寸 ====== */
const GRID = {
  cols: 10,   // 横向数量
  rows: 15   // 纵向数量
};
/* ================================= */

let currentColor = "black";

/* 设置 grid 结构 */
grid.style.gridTemplateColumns = `repeat(${GRID.cols}, 30px)`;

/* 清空旧格子 */
grid.innerHTML = "";

/* 生成像素 */
for (let r = 0; r < GRID.rows; r++) {
  for (let c = 0; c < GRID.cols; c++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel white";

    const rowLabel = String.fromCharCode(65 + r); // A, B, C...
    const colLabel = c + 1;
    pixel.dataset.label = `${rowLabel}${colLabel}`;

    pixel.onclick = () => {
      pixel.classList.remove(
        "white",
        "black",
        "red",
        "green",
        "blue",
        "yellow"
      );
      pixel.classList.add(currentColor);
    };

    grid.appendChild(pixel);
  }
}

/* 选择颜色 */
function setColor(color) {
  currentColor = color;
}

/* 清空全部 */
function eraseAll() {
  document.querySelectorAll(".pixel").forEach(pixel => {
    pixel.classList.remove(
      "black",
      "red",
      "green",
      "blue",
      "yellow"
    );
    pixel.classList.add("white");
  });
}

/* 导出 PNG */
function exportPNG() {
  html2canvas(document.getElementById("export-area"), {
    backgroundColor: "#ffffff",
    scale: 3
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "pixcore-design.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}