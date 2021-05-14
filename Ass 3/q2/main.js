function calculate() {
	
	var number = document.getElementById("inputnumber").value;
	if(number == 0){
		alert("Please Enter Valid Number !");
		return true;
	}

	var from =  document.querySelector('#fromselect');
	var to =  document.querySelector('#toselect');
	
	if(from.value == to.value){
		alert("From-unit and To-unit are same !");
		return true;
	}

	if(from.value == "meters" && to.value == "kilometers"){
		document.getElementById("ans").innerHTML = number/1000 + " kilometers";
	}

	if(from.value == "kilometers" && to.value == "meters"){
		document.getElementById("ans").innerHTML = number*1000 + " meters";
	}

	if(from.value == "millimetres" && to.value == "meters"){
		document.getElementById("ans").innerHTML = number/1000 + " meters";
	}

	if(from.value == "meters" && to.value == "millimetres"){
		document.getElementById("ans").innerHTML = number*1000 + " millimetres";
	}

	if(from.value == "millimetres" && to.value == "kilometers"){
		document.getElementById("ans").innerHTML = (number/1000)/1000 + " kilometers";
	}

	if(from.value == "kilometers" && to.value == "millimetres"){
		document.getElementById("ans").innerHTML = number*1000*1000 + " millimetres";
	}

	return false;
}