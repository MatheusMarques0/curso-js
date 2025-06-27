document.title = "Attribute"

document.body.style.background = "#ccc"

let atributo = document.getElementById("idQualquer2")

let atributofalse = document.getElementById("idQualquer1")

let atributotrue = document.getElementById("idQualquer3")

atributo.innerHTML = document.getElementById("idQualquer2").hasAttribute("class")

atributofalse.innerHTML = document.getElementById("idQualquer1").hasAttribute("class")

atributotrue.innerHTML = document.getElementById("idQualquer3").hasAttribute("id")

let get = document.getElementById("idQualquer4")

get.innerHTML = document.getElementById("idQualquer4").getAttribute("class")

let set = document.getElementById("idQualquer5")

set.setAttribute("style", "background: lightgrey")