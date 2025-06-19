// aula 03

document.title = "getElementByName"

document.body.style.background = "#ccc"

document.getElementsByName("div1")[0].innerHTML = "<p> número 1</p>"

let div3 = document.getElementsByName("div1")[2]

div3.innerText = "número 3"

let zone = document.getElementsByName("space")[0]

zone.innerHTML = "<hr>"