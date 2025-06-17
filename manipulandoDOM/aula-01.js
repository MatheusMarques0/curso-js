//curso do canal filosodev

document.title = "Javascript - DOM alterado";

document.body.style.background = "#ccc";

let meuElemento = document.getElementById("elemento");

meuElemento.innerHTML = "<h1>Este texto foi criado no JavaScript</h1><p>É possível fazer um título e um paragráfo no mesmo comando.</p>"

let elementoNegrito = document.getElementById("negrito")

elementoNegrito.innerHTML = "<p>E também pode modificar o seu texto (deixando em <b>negrito</b>, por exemplo)</h1>"

//tecnicamente acabei fazendo a aula 2