function getToKnow() {
	var favcolor= document.getElementById("favcolor").value.toLowerCase();
	var ans1="";
	switch(favcolor) {
		case "purple":
			ans1 = "That is also my favorite color!";
			break;
		case "red":
			ans1 = "That is my secondary favorite color!";
			break;
		default:
			ans1 = "Good for you but that isn't my favorite color.";
			break;
	}
    document.getElementById("tinfavcolor").innerHTML=ans1;

	var selectedage= document.getElementsByName("selectedage").value;
	var ans2="";
	if(document.getElementById('agegroup1').checked) {
		ans2 = "We are in the same age group!";
	}else if(document.getElementById('agegroup2').checked) {
		ans2 = "We are not in the same age group, but you are at the prime of life!";
	}else if(document.getElementById('agegroup3').checked) {
		ans2 = "We are not in the same age group, but I respect you!";
	} else {
		ans2 = "You did not select anything";		
	}
    document.getElementById("tinage").innerHTML=ans2;	
}