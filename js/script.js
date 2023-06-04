"use strict";

const themeChangeButton = document.getElementById("themeChangeButton");

themeChangeButton.addEventListener("click", (e) => {
	document.body.dataset.theme === "dark"
		? document.body.setAttribute("data-theme", "light")
		: document.body.setAttribute("data-theme", "dark");
});
