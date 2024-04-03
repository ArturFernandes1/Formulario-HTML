//// Obter os valores dos campos do formulário

document.getElementById("myForm").onsubmit = function() {
    localStorage.setItem("nome", document.getElementsByName("nome")[0].value);
    localStorage.setItem("email", document.getElementsByName("email")[0].value);

}

