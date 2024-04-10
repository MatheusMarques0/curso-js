function tabuada() {
    let num = document.querySelector('input#txtnumero') //repara que é let
    let tab = document.getElementById('seltab') // ao invés de var é let
    if (num.value.length == 0) {   //pra determinar se você não deixou a caixa em branco
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1  // vai se o contador da multiplicação (tipo 1x1 1x2 1x3 1x4 1x5)
        tab.innerHTML = '' //para não deixar acumulando todo numero que você colocar para gerar
        while (c <= 10) {
            let item = document.createElement('option') //caixinha que vai ficar os numeros
            item.text = `${n} x ${c} = ${n*c}` //ele veai multiplar seu numero por c
            item.value = `tab${c}` // os options tem que ter value
            tab.appendChild(item) // necéssario para fazer os números aparecerem no option
            c++ // para fazer ter mais de um c aparecendo na cooluna
        }
    }
}