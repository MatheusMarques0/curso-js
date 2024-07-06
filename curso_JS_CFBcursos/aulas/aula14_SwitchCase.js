let nature = "Hardy"

switch (nature) {
    case "Adamant":
        console.log('+10% de ataque físico e -10% de ataque especial')
        break

    case "Modest":
        console.log('+10% de ataque especial e -10% de ataque físico')
        break

    case "Timid":
        console.log('+10% de velocidade e -10% de ataque físico')
        break

    case "Serious": case "Quirky": case "Hardy":
        console.log('Sua nature não concede nenhum efeito')
        break

    default:
            console.log('Por favor insira uma nature válida')
            break
}