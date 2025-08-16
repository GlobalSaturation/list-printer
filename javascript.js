const addBtn = document.querySelector("#add-btn");
const itemInput = document.querySelector("#item-input");
const list = document.querySelector("ul");

function createIcon(iconId) {
	//use an already defined symbol and package it into an svg element
	const useTag = document.createElementNS("http://www.w3.org/2000/svg", "use");
	useTag.setAttribute("href", `#${iconId}`);

	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.classList.add("icon");
	svg.appendChild(useTag);

	return svg;
}

function createListItem() {
	const newItem = document.createElement("li");
	newItem.innerText = itemInput.value;
	itemInput.value = "";//reset input

	const deleteButton = document.createElement("button");
	deleteButton.appendChild(createIcon("deleteId"));
	deleteButton.setAttribute("aria-label", "Delete item");//alt text
	//TODO: make delete button functional

	newItem.appendChild(deleteButton);
	list.appendChild(newItem);
}

//create list element
addBtn.addEventListener("click", () => {
	//TODO: display error message when no input is given
	if (itemInput.value != "") {
		createListItem();
	}
});
