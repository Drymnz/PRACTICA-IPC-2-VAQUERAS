const switchers = [...document.querySelectorAll('.switcher')]
switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})
function ingresarCliente(){
	console.log(document.getElementById("ingrese-Nombre-cliente").value);
	console.log(document.getElementById("ingrese-Apellido").value);
	console.log(document.getElementById("ingrese-CUI").value);
	console.log(document.getElementById("ingrese-Departamento").value);
}
function registrar(){
	console.log(document.getElementById("signup-email").value);
	console.log(document.getElementById("signup-Nombre").value);
	console.log(document.getElementById("signup-password").value);
	console.log(document.getElementById("signup-password-confirm").value);
	if (!((document.getElementById("signup-password").value) === (document.getElementById("signup-password-confirm").value))) {
		alert("las contraseña no son iguales");
	}
}
function login(){
	console.log(document.getElementById("login-email").value);
	console.log(document.getElementById("login-password").value);
}