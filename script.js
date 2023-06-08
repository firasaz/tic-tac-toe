// JavaScript source code

function printX(cell) {
	cell.innerHTML = "X";
	turn++;
}
function printO(cell) {
	cell.innerHTML = "O";
	turn++;
}

function CheckWin() {
	if(cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML && cells[0].innerHTML != "") {
		alert("player "+cells[0].innerHTML+" won!");
		Reset();
	}
	else if(cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML && cells[3].innerHTML != "") {
		alert("player "+cells[3].innerHTML+" won!");
		Reset();
	}
	else if(cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML && cells[6].innerHTML != "") {
		alert("player "+cells[6].innerHTML+" won!");
		Reset();
	}
	else if(cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML && cells[0].innerHTML != "") {
		alert("player "+cells[0].innerHTML+" won!");
		Reset();
	}
	else if(cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML && cells[1].innerHTML != "") {
		alert("player "+cells[1].innerHTML+" won!");
		Reset();
	}
	else if(cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML && cells[2].innerHTML != "") {
		alert("player "+cells[2].innerHTML+" won!");
		Reset();
	}
	else if(cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML && cells[0].innerHTML != "") {
		alert("player "+cells[0].innerHTML+" won!");
		Reset();
	}
	else if(cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML && cells[2].innerHTML != "") {
		alert("player "+cells[2].innerHTML+" won!");
		Reset();
	}
	else {
		let full = 0;
		for(var i = 0; i < cells.length; i++) {
			if(cells[i].innerHTML != "") {
				full++;
			}
		}
		if(full == 9) {
			alert("Draw!");
			Reset();
		}
		else return;
	}
}

function XorO(cell) {
	if(turn % 2 == 0){
		printX(this);
		document.getElementById("turn").innerHTML = "it's player O's turn";
	}
	else{
		printO(this); 
		document.getElementById("turn").innerHTML = "it's player X's turn";
	}
	// console.log(cell==cells[0]); /* this is false even when i click on cells[0] because cell isn't what i clicked "this" is the element that invoked the event listener */
	this.removeEventListener('click', XorO);
	setTimeout(CheckWin, 100);
}

function Reset() {
	for(var i = 0; i < cells.length; i++) {
		cells[i].innerHTML = "";
	}
	turn = 0;
    EventListener();
	document.getElementById("turn").innerHTML = "it's player X's turn";
}

function EventListener(){
    for(var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", XorO);
    }
}
var cells = document.getElementsByClassName("box_cell");
var turn = 0;

document.getElementById("turn").innerHTML = "it's player X's turn";

EventListener();

document.getElementById("reset").onclick = Reset;
