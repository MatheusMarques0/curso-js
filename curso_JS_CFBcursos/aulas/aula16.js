let num = [10, 20, 30, 40, 50]

for(n in num){
    console.log(num[n])
}

// pega posições, precisa do num[n] para pegar elementos

for(n of num){
    console.log(n)
}

//pega elementos direto