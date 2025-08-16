const addBtn = document.querySelector("#add-btn");
const itemInput = document.querySelector("#item-input");
const list = document.querySelector("ul");

function createIcon(iconId) {
	//use an already defined symbol and package it into an svg element
	const svgURI = "http://www.w3.org/2000/svg";
	const useTag = document.createElementNS(svgURI, "use");
	useTag.setAttribute("href", `#${iconId}`);

	const svg = document.createElementNS(svgURI, "svg");
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
	//make delete button functional
	deleteButton.addEventListener("click", () => {
		list.removeChild(newItem);
	});

	newItem.appendChild(deleteButton);
	list.appendChild(newItem);
}

function attemptListItem() {
	const errorMsg = document.querySelector(".error-message");
	// itemInput.focus();

	//TODO: add a character limit
	if (itemInput.value != "") {
		errorMsg.style.display = "none";
		createListItem();
	} else {
		//show error message
		errorMsg.style.display = "block";
	}
}

//create list element either by clicking the button or pressing enter
addBtn.addEventListener("click", attemptListItem);

itemInput.addEventListener("keyup", (event) => {
	if (event.key === "Enter") {
		attemptListItem();
	}
});
