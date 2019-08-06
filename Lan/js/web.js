var button_left = document.getElementsByClass('left');
var button_right = document.getElementsByClass('right');
var n = document.getElementsByClass('image-slide');
button_right.onclick = function(event) {
	for (var i = 0; i <= n.length; i++) {
	    if(i == 1){
	    	i[0].style.display="none";
	    	i[4].style.display="block";
	    }
	