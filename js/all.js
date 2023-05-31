// 漢堡menu
const mobileMenu = document.querySelector(".mobile-menu");
// 漢堡menu導覽列
const navCollapes = document.querySelector(".nav-collapes");
// 回到網頁最上面
const backToTop = document.querySelector(".backToTop-btn");

// 監聽漢堡menu的click事件
mobileMenu.addEventListener("click", () => {
  if (mobileMenu.textContent == "menu") {
    mobileMenu.textContent = "close";
    navCollapes.style.display = "flex";
  } else {
    mobileMenu.textContent = "menu";
    navCollapes.style.display = "none";
  }
});

// 監聽browser width
window.addEventListener("resize", () => {
  // 大於等於767px，mobile menu的圖示還是x時，關閉漢堡選單
  if (window.innerWidth >= 767 && mobileMenu.textContent == "close") {
    mobileMenu.textContent = "menu";
    navCollapes.style.display = "none";
  }
});

// 監聽回到網頁最上面btn
backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// #price
// -------------------------------------

// 常見問題 all li
const qaList = document.querySelectorAll(".qa-list .list-item");
// show, hide icon
const addRemoveIcon = document.querySelector(".qa-list .material-icons");
// 常見問題答案的父層元素
const qaContents = document.querySelectorAll(".qa-list .contents");

// 取得常見問題答案的父層元素的高度，並將高度設為0
window.addEventListener("DOMContentLoaded", () => {
  qaContents.forEach((content) => {
    content.dataset.height = content.offsetHeight;
    content.style.height = "0";
  });
});

qaList.forEach((item) => {
  item.addEventListener("click", function (e) {
    // 如果常見問題答案的父層高度是0，就改為dataset.height的高度
    if (this.children[1].style.height == "0px") {
      this.children[1].style.height = `${this.children[1].dataset.height}px`;
      this.children[0].children[0].textContent = "remove";
      // 如果常見問題答案的父層高度不是0，就改為0
    } else {
      this.children[1].style.height = "0";
      this.children[0].children[0].textContent = "add";
    }
  });
});
