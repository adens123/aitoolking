// 漢堡menu
const mobileMenu = document.querySelector(".mobile-menu");
// 漢堡menu導覽列
const navCollapes = document.querySelector(".nav-collapes");
// body下第一層全部div
const divs = document.querySelectorAll("body > div");
// 回到網頁最上面
const backToTop = document.querySelector(".backToTop-btn");

function render() {
  // 將X圖示換成漢堡
  mobileMenu.textContent = "menu";
  // 隱藏漢堡導覽列
  navCollapes.style.display = "none";
  // 重新渲染body下第一層全部div
  for (let i = 0; i < divs.length; i++) {
    document.body.appendChild(divs[i]);
  }
}

// 監聽漢堡menu的click事件
mobileMenu.addEventListener("click", () => {
  // 清空所有網頁內容
  document.body.innerHTML = "";

  // 判斷漢堡和x圖示去決定要渲染的div
  if (mobileMenu.textContent == "menu") {
    // 渲染header和footer
    mobileMenu.textContent = "close";
    navCollapes.style.display = "flex";
    document.body.appendChild(divs[0]);
    document.body.appendChild(divs[divs.length - 1]);
  } else {
    // 渲染所有網頁內容
    render();
  }
});

// 監聽browser width
window.addEventListener("resize", () => {
  // 大於等於767px，mobile menu的圖示還是x時，渲染所有網頁內容
  if (window.innerWidth >= 767 && mobileMenu.textContent == "close") {
    render();
  }
});

// 監聽回到網頁最上面btn
backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
