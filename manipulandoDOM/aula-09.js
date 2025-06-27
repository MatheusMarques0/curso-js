document.title = "última aula"

document.body.style.background = "#ccc"

let elemento = document.createElement("li")

let texto = document.createTextNode("item da lista adicionado")

elemento.appendChild(texto)

let lista = document.getElementsByTagName("ul")[0]

lista.appendChild(elemento)

//InsertBefore

var lista2 = document.getElementsByTagName('ul')[1]
var itens = lista2.getElementsByTagName("li") //veja que tem que usar o getElement duas vezes com listas

//criando elemento

var elemento2 = document.createElement("li")
elemento2.textContent = "outro item"

// inserindo o valor em posição específica
lista2.insertBefore(elemento2, itens[2])

//removechild

lista2.removeChild(itens[3])