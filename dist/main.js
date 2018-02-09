const form ={
	inputs:document.querySelectorAll('input[type=text]'),
	msg:document.querySelector('textarea'),
	btn:document.querySelector('input[type=button]')
};

function removeWarns() {
	var warns = document.querySelectorAll('.warn');
	if (!warns) return;
	warns.forEach(warn=> warn.remove());
}

function validateForm() {
	removeWarns();
	var validation = true;
	var warnEmpty = '<label class="warn">Fill in field bellow!</label>'
	var warnNotLetters = '<label class="warn">Only letters can be accepted!</label>'
	form.inputs.forEach(input=>{
		if (!input.value.match(/\S/)) {
			input.insertAdjacentHTML('beforebegin',warnEmpty)
			validation=false;
		}
		if (!input.value.match(/^[A-Za-z\s]*$/)) {
			input.insertAdjacentHTML('beforebegin',warnNotLetters)
			validation=false;
		}
	});
	if (!form.msg.value.match(/\S/)) {
		form.msg.insertAdjacentHTML('beforebegin',warnEmpty)
		validation=false;
	}
	return validation;
}

form.btn.addEventListener('click',function () {
	validateForm()? sentMessage():null;
})

function sentMessage() {
	alert("Your message has been sent!")
	form.msg.value="";
	form.inputs.forEach(input=>input.value="")
}


var navBtn = document.querySelector('.fa-bars');
navBtn.addEventListener('click',function () {
	var navMenu = document.querySelector('.navbar')
	navMenu.classList.toggle('active')
})


