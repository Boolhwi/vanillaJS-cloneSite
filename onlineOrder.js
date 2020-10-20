
var order_btn = document.getElementById("order_button");
order_btn.onclick = function() {
	alert("Your menu ordered! Thanks!")
	location.reload()
}


window.onload = function() {

	//left bar toggle

	var toggle = document.getElementById("menu_button_set");

	var menu = document.getElementById("menu_button_wrapper");

	toggle.onclick = function() {

		if (menu.style.display === "none") {
   	 	menu.style.display = "block";
  		}

  		else {
   	 	menu.style.display = "none";
  		}
	}

	//menu 1~6 modal

	var menu_1 = document.getElementById("menu_1");
	var menu_2 = document.getElementById("menu_2");
	var menu_3 = document.getElementById("menu_3");
	var menu_4 = document.getElementById("menu_4");
	var menu_5 = document.getElementById("menu_5");
	var menu_6 = document.getElementById("menu_6");

	var modal_1 = document.getElementById("modal_1");
	var modal_2 = document.getElementById("modal_2");
	var modal_3 = document.getElementById("modal_3");
	var modal_4 = document.getElementById("modal_4");
	var modal_5 = document.getElementById("modal_5");
	var modal_6 = document.getElementById("modal_6");

	var close = document.getElementsByClassName("close");

	menu_1.onclick = function() {
		modal_1.style.display = "block";
	}
	menu_2.onclick = function() {
		modal_2.style.display = "block";
		console.log("menu2_clicked")
	}
	menu_3.onclick = function() {
		modal_3.style.display = "block";
	}
	menu_4.onclick = function() {
		modal_4.style.display = "block";
	}
	menu_5.onclick = function() {
		modal_5.style.display = "block";
	}
	menu_6.onclick = function() {
		modal_6.style.display = "block";
	}

	close[0].onclick = function() {
		modal_1.style.display = "none";
	}
	close[1].onclick = function() {
		modal_2.style.display = "none";
	}
	close[2].onclick = function() {
		modal_3.style.display = "none";
	}
	close[3].onclick = function() {
		modal_4.style.display = "none";
	}
	close[4].onclick = function() {
		modal_5.style.display = "none";
	}
	close[5].onclick = function() {
		modal_6.style.display = "none";
	}


	//modal number modify

	var number_down = document.getElementById("number_down");
	var number_up = document.getElementById("number_up");

	number_down.onclick = function() {
		number_down.nextElementSibling.innerHTML =
		Number(number_down.nextElementSibling.innerHTML) - 1;
	}

	number_up.onclick = function() {
		number_up.previousElementSibling.innerHTML =
		Number(number_up.previousElementSibling.innerHTML) + 1;
	}

	//modal order

	var order = document.getElementById("modal_order");
	var selected_exp = document.getElementById("selected_menu_exp");
	var selected_list = document.getElementById("selected_list");

	order.onclick = function() {

		var ord_number =
		order.previousElementSibling.children[1].children[1].innerHTML;
		var ord_menu =
		order.parentNode.parentNode.previousElementSibling.children[1].innerHTML;
		var ord_dollar =
		order.parentNode.parentNode.previousElementSibling.children[2].innerHTML;

		selected_list.innerHTML =
		ord_number+ " x "+ ord_menu +" "+ord_dollar;

		selected_exp.style.display = "none";
		selected_list.style.display = "block";


		modal_1.style.display = "none";
		modal_2.style.display = "none";
		modal_3.style.display = "none";
		modal_4.style.display = "none";
		modal_5.style.display = "none";
		modal_6.style.display = "none";
	}
}
