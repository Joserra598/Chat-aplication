const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-navbar");
const overlay = document.querySelector(".overlay");

const modalChange = function () {
	const move = String(this) === "remove" ? 0 : -100;
	navbar.style.transform = `translateX(${move}%)`;
	overlay.classList[this]("hidden");
	navbar.classList[this]("hidden");
};

overlay.addEventListener("click", modalChange.bind("add"));

menuBtn.addEventListener("click", modalChange.bind("remove"));
