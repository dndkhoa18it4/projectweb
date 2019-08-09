
function next() {
	var crux = document.getElementById("crux");
	var modelcrux = document.getElementById("modelcrux");
	var gunmetal = document.getElementById("gunmetal");	
	var modelgunmetal = document.getElementById("modelgunmetal");
	if (crux.style.display === "none" && modelcrux.style.display === "none" && gunmetal.style.display === "block" && modelgunmetal.style.display==="block"){
		crux.style.display = "block";
		modelcrux.style.display = "block";
		gunmetal.style.display = "none";
		modelgunmetal.style.display = "none";

	}
	else {
		crux.style.display = "none";
		modelcrux.style.display = "none";
		gunmetal.style.display = "block";
		modelgunmetal.style.display = "block";
	}
}
setInterval(next, 5000);