var userInput = document.querySelector("#userInput");
var userDataList = [];

function userData(){
	var fnm = document.querySelector("#fnm");
	var lnm = document.querySelector("#lnm");
	var eml = document.querySelector("#eml");

	if (fnm.value !== "" && lnm.value !== "" && eml.value !== "") {
	
	if (testExistense(fnm.value, lnm.value, eml.value) == true) {

		alert("You Have Already Filled the Form");
	} else {

		userDataList.push(fnm.value, lnm.value, eml.value);
		console.log(userDataList);
		
		var div = document.createElement("div");
		div.className = "userDetails";
		userInput.appendChild(div);
		
		var p1 = document.createElement("p");
		var p1text = document.createTextNode(fnm.value);
		p1.appendChild(p1text);
		div.appendChild(p1);

		var p2 = document.createElement("p");
		var p2text = document.createTextNode(lnm.value);
		p2.appendChild(p2text);
		div.appendChild(p2);

		var p3 = document.createElement("p");
		var p3text = document.createTextNode(eml.value);
		p3.appendChild(p3text);
		div.appendChild(p3);
	}
		} else{
			alert("No Field should be empty");
		}
fnm.value = ""; 
lnm.value = ""; 
eml.value = "";


}

function testExistense(a, b, c) {
	for (var i = 0; i < userDataList.length; i++) {

		if(userDataList[i] === a || userDataList[i] === b || userDataList[i] === c){
			return true;
		}
	}
}