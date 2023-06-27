function very()
{
    var numero = document.querySelector ('input#idade')
    var resultado = document.querySelector ('p#ress')
    var check = Number (numero.value)
    if (check < 16) { resultado.innerHTML = `Não Vota!` }
    else if (check < 18) { resultado.innerHTML = `Voto Opcional!` }
    else if (check < 66) { resultado.innerHTML = `Voto Obrigatório! `}
    else if (check < 100) { resultado.innerHTML = `Voto opicional` }
    else if (check < 8000) { resultado.innerHTML = `Ainda Está Vivo?`}
    else if (check >= 8000) { resultado.innerHTML = `É MAIS DE OITO MIL???!!!`}
}