function contar() {
    let start = window.document.getElementById('ini')
    let end = window.document.getElementById('fim')
    let pass = window.document.getElementById('pas')
    let res = window.document.getElementById('res')

    if (start.value.length == 0 || end.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = 'impossível contar!'
        window.alert('[ERRO] Verifique se os dados são maiores que 0')
    } else {
        res.innerHTML = 'Contando: '
        let s = Number(start.value)
        let e = Number(end.value)
        let p = Number(pass.value)
        if (p <= 0) {
            window.alert('Número do passo inválido! Considerando passo 1')
            p = 1
        }
        if (s < e) {
            for(let c = s; c <= e; c += p) {
                res.innerHTML += `${c}➡️`
            }
        } else {
            for(let c = s; c >= e; c -= p) {
                res.innerHTML += `${c}➡️`
            }
        }
        res.innerHTML += '🚩'
        }
    }