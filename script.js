fetch("assets/menus.json")
  .then((res) => res.json())
  .then((menus) => {
    const container = document.getElementById("menuContainer");

    menus.forEach((menu) => {
      const card = document.createElement("div");
      card.className = "menu-card";
      card.style.backgroundImage = `url('${menu.imageUrl}')`;
      card.onclick = () =>
        openModal(menu.name, menu.price, menu.imageUrl, menu.desc);

      const info = document.createElement("div");
      info.className = "menu-info";
      info.innerHTML = `<h3>${menu.name}</h3><p>${menu.price}</p>`;

      card.appendChild(info);
      container.appendChild(card);
    });
  });

// 모달 함수 그대로
function openModal(name, price, imageUrl, desc) {
  document.getElementById("modalName").innerText = name;
  document.getElementById("modalPrice").innerText = price;
  document.getElementById("modalImage").src = imageUrl;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) closeModal();
};
