/* Check for click events on the navbar burger icon
// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
// author: Eric
// date: 25-NOV-2018
*/
function navbar_burger_ddp_activator(){
	$(document).ready(function() {
	  $(".navbar-burger").click(function() {
		  $(".navbar-burger").toggleClass("is-active");
		  $(".navbar-menu").toggleClass("is-active");

	  });
	});
}

