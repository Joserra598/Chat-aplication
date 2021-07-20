const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-navbar");
const overlay = document.querySelector(".overlay");
const sidebarItems = [...document.querySelectorAll(".navbar__menu-item")];
const navbarMenus = [...document.querySelector(".navbar").children];
const backBtnContact = document.querySelector("#backContactMenu");

const changeMenu = function () {
	navbarMenus.forEach((item) => {
		item.style.transform = `translateX(${this * -100}%)`;
	});
};

sidebarItems.forEach((item) => {
	if (item.dataset.menu === "contact") item.addEventListener("click", changeMenu.bind(1));
});

backBtnContact.addEventListener("click", changeMenu.bind(0));

const modalChange = function () {
	const move = String(this) === "remove" ? 0 : -100;
	navbar.style.transform = `translateX(${move}%)`;
	overlay.classList[this]("hidden");
	navbar.classList[this]("hidden");
	String(this) === "add" && changeMenu.call(0);
};

overlay.addEventListener("click", modalChange.bind("add"));

menuBtn.addEventListener("click", modalChange.bind("remove"));
