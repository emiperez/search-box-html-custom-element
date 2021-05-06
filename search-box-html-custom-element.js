class SearchBox extends HTMLFormElement {

	constructor() {
		super();
	}

	connectedCallback() {
		const p = this.getAttribute("placeholder");
		
		const text = document.createElement("input");
		text.setAttribute("type", "search");
		text.required = true;
		if (this.hasAttribute("placeholder")) {
			text.setAttribute("placeholder", this.getAttribute("placeholder"));
		}
		
		this.appendChild(text);

		const resetButton = document.createElement("button");
		resetButton.setAttribute("type", "reset");
		//Magnifying Glass SVG image
		resetButton.innerText = "X";
		
		this.appendChild(resetButton);

		const submitButton = document.createElement("button");
		submitButton.setAttribute("type", "submit");
		//Magnifying Glass SVG image
		submitButton.innerHTML = "<svg viewBox='0 0 490 490' xmlns='http://www.w3.org/2000/svg'>" +
			"<path fill='none' stroke='#000' stroke-width='36' stroke-linecap='round' " +
			" d='m280,278a153,153 0 1,0-2,2l170,170m-91-117 110,110-26,26-110-110'/></svg> ";
		
		this.appendChild(submitButton);
	}
}

customElements.define("search-box", SearchBox, { extends: "form" });