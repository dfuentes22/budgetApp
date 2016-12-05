var h1 = document.querySelector("h1");
var addAmt = document.getElementById("addAmount");
var subAmt = document.getElementById("subtractAmount");
var totalAmt = document.getElementById("totalAmount");
var count = 0;


//Action when Add is clicked
addAmt.addEventListener("click", function(){
	var inputAmt = document.getElementById("inputAmount").value;
	var node = createNode();
	node.className = "list-group-item plus";	
	if(addTotal()){
		if(inputAmt >=0){
			node.className = "list-group-item plus";
			document.getElementById("addList").appendChild(node);
			document.getElementById("inputAmount").value = "";
		}
		else{
			node.className = "list-group-item minus";
			document.getElementById("subList").appendChild(node);
			document.getElementById("inputAmount").value = "";
		}
	}
});

//Action when subtract is clicked
subAmt.addEventListener("click", function(){ 
	// var node = createNode();
	// node.className = "list-group-item minus";
	// if(subTotal()){
	// 	document.getElementById("subList").appendChild(node);
	// 	document.getElementById("inputAmount").value = "";
	// }
	var inputAmt = document.getElementById("inputAmount").value;
	var node = createNode();
	node.className = "list-group-item minus";	
	if(subTotal()){
		if(inputAmt < 0){
			node.className = "list-group-item plus";
			document.getElementById("addList").appendChild(node);
			document.getElementById("inputAmount").value = "";
		}
		else{
			node.className = "list-group-item minus";
			document.getElementById("subList").appendChild(node);
			document.getElementById("inputAmount").value = "";
		}
	}
});

function createNode(){
	var node = document.createElement("LI");
	var inputAmt = document.getElementById("inputAmount").value;
	if(inputAmt){
		var textnode = document.createTextNode("$ " + inputAmt);	
	}
	node.appendChild(textnode);
	return node;
}


function subTotal(){
	var inputAmt = document.getElementById("inputAmount").value;
	if(isNaN(inputAmt)){
		alert("Need to enter a number");
		return false;
	} 
	count = count - Number(inputAmt);
	if(count >= 0){
		totalAmt.className = "good";
	}
	else{
		totalAmt.className = "bad";
	}
	totalAmt.innerHTML = "$ " + count;		

	return  true;

}

function addTotal(){
	var inputAmt = document.getElementById("inputAmount").value;
	if(isNaN(inputAmt)){
		alert("Need to enter a number");
		return false;
	}
	
	count = count + Number(inputAmt);
	if(count >= 0){
		totalAmt.className = "good";
	}
	else{
		totalAmt.className = "bad";
	}
	totalAmt.innerHTML = "$ " + count;	

	return true;

}