//Post & Delete Buttons
var button = document.getElementById("submit");
var posted = 0;

button.addEventListener("click", function() {

	var title = document.getElementById("title");
	var text = document.getElementById("text_area");
	var publish = document.getElementById("publisher");

	var div = document.getElementById("published");
	var date = new Date().toLocaleString();

	var blog_post = document.createElement("p");

	var delete_button = document.createElement("button");
	delete_button.innerHTML = "Delete";
	delete_button.className = "delete";

	delete_button.addEventListener("click", function() {
		var retval = window.confirm("By pressing this button you are deleting this post permenantly.");
		if (retval === true) {
			posted--;
			blog_post.remove();
		} 
	});

	var bp1 = document.createElement("p");
	var bp2 = document.createElement("p");
	var bp3 = document.createElement("p");

	bp1.innerHTML = title.value;
	bp1.className = "title";

	bp2.innerHTML = text.value;
	bp2.className = "text";

	bp3.innerHTML = publish.value + ", " + date;
	bp3.className = "publish";

	blog_post.append(bp1);
	blog_post.append(bp2);
	blog_post.append(bp3);
	blog_post.append(delete_button);

	blog_post.className = "fade_in"

	if (title.value === "" || text.value === "" || publish.value === "") {
		window.alert("You cannot post your response until you have " +  
			"filled out all of the required boxes. Please do so " +
			"before trying to post again.");
	} else if (posted === 4) {
		window.alert("You must delete one of your posts before posting again.");
	} else {
		// div.prepend(delete_button);
		div.prepend(blog_post);
		title.value = "";
		text.value = "";
		publish.value = "";
		posted++;
	}	
});

//Change Tabs
function bindEventListeners() {
	let menuItems = document.querySelectorAll("nav button");
	for (let i = 0; i < menuItems.length; i++) {
		menuItems[i].addEventListener("click", function() {
			hideAll();
			const className = menuItems[i].className;
			const section = document.querySelector("section." + className);
			unhide(section);
			console.log(menuItems[i].className);
		})
	}
}

function hideAll() {
	const sections = document.querySelectorAll("section.tabs");
	for (let i = 0; i < sections.length; i++) {
		if(!sections[i].className.match("hidden")) {
			sections[i].className += " hidden"
		}
	}
}

function unhide(element) {
	element.className = element.className.replace(" hidden", "");
}

//Driver Code
bindEventListeners();


