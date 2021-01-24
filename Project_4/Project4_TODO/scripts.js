var lis = document.querySelectorAll("li");
var todos = ["Project 1 - Bare Bone HTML Portfolio", "Project 2 - Add CSS to Project 1", "Project 3 - Build Responsive Portfolio using Bootstrap", "Project 4 - Build TodoList", "Project 5 - Host a portfolio website with custom domain"];

//Append "Close" text to all todos
var i, ans, op;
for (i = 0; i < lis.length; i++) {
	
	var span1 = document.createElement("SPAN");
	var spanText1 = document.createTextNode('\u274C');
	span1.className = "close";	
	span1.appendChild(spanText1);
	lis[i].appendChild(span1);

	var span2 = document.createElement("SPAN");
	var spanText2 = document.createTextNode("\u2714");
	span2.className = "done";
	span2.appendChild(spanText2);
	lis[i].appendChild(span2);
}

//Remove todo from list
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
	
	close[i].onclick = function () {

		this.parentElement.classList.add("liTransaction");

	}
}

//Mark todo as done from list
var done = document.getElementsByClassName("done");
var i;
for (i = 0; i < close.length; i++) {
	
	done[i].onclick = function () {
	
		this.innerHTML === "\u2714"?this.innerHTML = "\u238C":this.innerHTML = "\u2714";
	
		this.parentElement.classList.toggle("mark");		
	}
}

// add todo
function add_to_todo(){

	var ul = document.querySelector("ul");
	var inputValue = document.querySelector("#inputValue");
	var li = document.createElement("li");
	var inputs = document.createTextNode(inputValue.value);

	li.appendChild(inputs);
	
	if (inputValue.value === '') {
		alertMessage(0);
	} else {
		//check todo already exist
		if (testExistence(inputValue.value) == true) {
			alertMessage(1);
		} else {
			// new todo added
			todos.push(inputValue.value);	
			ul.appendChild(li);
			alertMessage(2);
		}
	}
	
	//input field after adding todo
	inputValue.value = "";

	// create span to delete todo
	var span1 = document.createElement("SPAN");
	var spanText1 = document.createTextNode("\u274C");
	span1.classList.add("close");	
	span1.appendChild(spanText1);
	li.appendChild(span1);

	// create span to mark as done
	var span2 = document.createElement("SPAN");
	var spanText2 = document.createTextNode("\u2714");
	span2.classList.add("done");
	span2.appendChild(spanText2);
	li.appendChild(span2);

	for (i = 0; i <= close.length; i++) {

		close[i].onclick = function () {
			this.parentElement.classList.add("liTransaction");
		}

		done[i].onclick = function () {
			this.innerHTML === "Done"?this.innerHTML = "Undo":this.innerHTML = "Done";
			this.parentElement.classList.toggle("mark");			
		}

	}
	
}

// Checks if input todo already exist
function testExistence(val) {

	for (var i = 0; i < todos.length; i++) {
		console.log(todos[i]);
		if (todos[i] === val) {
			return true;
			break;
		}
	}

}

// Alert Box Funtion
function alertMessage(pp){
	let message = document.querySelector("#myMessage");

	if(pp === 0){
		message.innerHTML = "No todo was entered";
		document.querySelector("#alertMsg").style.display = "block";
	}else if(pp === 1){
		message.innerHTML = "You have already added this todo";
		document.querySelector("#alertMsg").style.display = "block";
	}else if(pp === 2){
		message.innerHTML = "Yoohoo! Todo added successfully";
		document.querySelector("#alertMsg").style.display = "block";
	} 
}

// Alert box Close button function
function closeFunc(){
	document.querySelector("#alertMsg").style.display = "none";
}