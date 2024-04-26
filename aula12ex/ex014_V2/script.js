function carregar() {
    var texto = window.document.getElementById('texto')

    var img = window.document.getElementById('img')

    var data = new Date()
    var hora = data.getHours()

    texto.innerHTML = `Agora são ${hora} horas` 

    if (hora >= 6 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fotodatarde.png'
        document.body.style.background = "#b9846f"
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = "#515154"
    }
}

