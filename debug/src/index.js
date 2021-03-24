function component() {
	const element = document.createElement("div");
	element.innerHTML = "<p>hello webpack</p>";
	return element;
}

document.body.appendChild(component());
