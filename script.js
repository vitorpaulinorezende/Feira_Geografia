const texts = {
	1: ["Título 1", 
		"1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
		"",
	2: ["Título 2",
		"2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
		"",
	3: ["Título 3",
		"3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
		"",
	4: ["Título 4",
		"4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
		"",
};

var selectedContent = 1;
var contentContainer = document.querySelector(".content-container");
var content = document.querySelector(".content");

function setContent(number) {
	content.querySelector("h1").setHTML("<h1>"+texts[number][0]+"</h1>");
	content.querySelector("p").setHTML("<p>"+texts[number][1]+"</p>");
}

function prevContent() {
	if (selectedContent > 1) {
		selectedContent--;
		setContent(selectedContent)
	}
	else if (selectedContent == 1) {
		selectedContent = 4
		setContent(selectedContent)
	};
	content.setAttribute("id", "anim");
}

function nextContent() {
	if (selectedContent < 4) {
		selectedContent++;
		setContent(selectedContent)
	}
	else if (selectedContent == 4) {
		selectedContent = 1
		setContent(selectedContent)
	};
	content.setAttribute("id", "anim");
}


document.addEventListener("click", function click(event) {
	if (window.innerWidth < 720){
		if (event.clientX < window.innerWidth / 2) {
			prevContent()
		} else if (event.clientX > window.innerWidth / 2) {
			nextContent()
		}
	}
})
