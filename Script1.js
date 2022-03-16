// JavaScript source code

var cells = document.getElementsByClassName("box_cell");
var turn = 0;
/*
while(turn < 9) {
	if(turn % 2 == 0){
		console.log("it's player 1's turn");
	}
	else {
		console.log("it's player 2's turn");
	}
	turn++;
}
*/
document.getElementById("turn").innerHTML = "it's player X's turn";

for(var i = 0; i <= 8; i++) {
	cells[i].addEventListener("click", function() {XorO(turn,this);});
}
function XorO(turn,cell) {
	if(turn % 2 == 0){
		document.getElementById("turn").innerHTML = "it's player O's turn";
		printX(cell); 
	}
	else{
		document.getElementById("turn").innerHTML = "it's player X's turn";
		printO(cell); 
	}
	CheckWin();
}
function printX(cell) {
	cell.innerHTML = "X";
	turn++;
}
function printO(cell) {
	cell.innerHTML = "O";
	turn++;
}
function Reset() {
	for(var i = 0; i < cells.length; i++) {
		cells[i].innerHTML = "";
	}
	turn = 0;
	document.getElementById("turn").innerHTML = "it's player X's turn";
	//XorO();
}
function CheckWin() {
	if(cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML && cells[0].innerHTML != "") {
		//console.log("if 1");
		alert("player "+cells[0].innerHTML+" won!");
		Reset();
	}
	else if(cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML && cells[3].innerHTML != "") {
		//console.log("if 2");
		alert("player "+cells[3].innerHTML+" won!");
		Reset();
	}
	else if(cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML && cells[6].innerHTML != "") {
		//console.log("if 3");
		alert("player "+cells[6].innerHTML+" won!");
		Reset();
	}
	else if(cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML && cells[0].innerHTML != "") {
		//console.log("if 4");
		alert("player "+cells[0].innerHTML+" won!");
		Reset();
	}
	else if(cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML && cells[1].innerHTML != "") {
		//console.log("if 5");
		alert("player "+cells[1].innerHTML+" won!");
		Reset();
	}
	else if(cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML && cells[2].innerHTML != "") {
		//console.log("if 6");
		alert("player "+cells[2].innerHTML+" won!");
		Reset();
	}
	else if(cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML && cells[0].innerHTML != "") {
		//console.log("if 7");
		alert("player "+cells[0].innerHTML+" won!");
		Reset();
	}
	else if(cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML && cells[2].innerHTML != "") {
		//console.log("if 8");
		alert("player "+cells[2].innerHTML+" won!");
		Reset();
	}

	//draw is not working properly yet
	else {
		let full = 0;
		for(var i = 0; i < cells.length; i++) {
			if(cells[i].innerHTML != "") {
				full++;
				console.log(full);
			}
		}
		if(full == 9) {
			alert("Draw!");
			Reset();
		}
		else return;
	}
}

//printX();

document.getElementById("reset").onclick = function() { Reset()};