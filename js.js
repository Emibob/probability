//js.js
document.getElementById('colors').addEventListener('click', getColor, false);
document.getElementById('colors').addEventListener('click', displayObjectStats, false);

probabilityApp = {};

function getColor(e){
	var colorSelected = e.target.childNodes[0].data;
	console.log("colorSelected: " + colorSelected);

	trackColorSelection(colorSelected); //move?
	return colorSelected;
}

function trackColorSelection(colorSelected){
	var i = colorSelected;

	if(probabilityApp[i]){
		probabilityApp[i] += 1;
	}
	else{
		probabilityApp[i] = 1;
	}
}

function getTotalClicks(){
	var totalClicks = 0;

	for(var property in probabilityApp){
		totalClicks += parseInt(probabilityApp[property]);
	}

	return totalClicks;
}

function displayObjectStats(){
	var probability = document.getElementById('probability');
	var message = "";
	var totalClicks = getTotalClicks();

	for(var property in probabilityApp){
		var percent = (probabilityApp[property] / totalClicks) * 100;
		message += property + ": " + percent + "%" + "<br />";
	}

	probability.innerHTML = message;
}


