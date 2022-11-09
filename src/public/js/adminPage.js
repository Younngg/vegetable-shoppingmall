const productBtn = document.getElementById("productBtn");
const categoryBtn = document.getElementById("categoryBtn");

const greeting = document.getElementById("greeting");

const usersToken = sessionStorage.getItem("token");

fetch(`http://localhost:5500/api/users/userInfo`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${usersToken}`,
  },
})
  .then((res) => res.json())
  .then((data) => {
    if (data.role === "administrator") {
      greeting.innerHTML = `${data.fullName} 관리자님 안녕하세요!`;
    }
  })
  .catch((err) => console.error("Error : ", err));

function onClickProductBtn() {
  location.href = "/admin/products";
}

function onClickCategoryBtn() {
  location.href = "/admin/category";
}

productBtn.addEventListener("click", onClickProductBtn);
categoryBtn.addEventListener("click", onClickCategoryBtn);
