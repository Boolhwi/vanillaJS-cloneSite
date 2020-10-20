window.onload = function() {

    var submit = document.getElementById('submit');

    var name=document.getElementById('input_name');
    var email=document.getElementById('input_email');
    var phone=document.getElementById('input_phone');
    var size=document.getElementById('input_event_size');

    var info = document.getElementById('info_check');

    submit.onclick = function() {
        
        if (name.value.length === 0 || email.value.length === 0 
        	|| phone.value.length === 0 || size.value.length === 0) {
        	info.innerHTML = "please add valid information.";
        }

        else {
        	alert("Thanks! We'll get back to you as soon as we can!");
        	location.reload();
        }

    }
}