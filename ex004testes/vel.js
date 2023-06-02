function test ()
{
    var velocidade = document.querySelector('input#speed')
    var resultado = document.querySelector ('p#ress')
    var checagem = Number (velocidade.value)
    resultado.innerHTML = `Velocidade de ${checagem} km/h`
    if (checagem > 60) {
        resultado.innerHTML += `<p> Você foi multado </p>`
    }
    else {
        resultado.innerHTML += `<p> Dirija sempre com sinto de segurança! </p>`
    }
}