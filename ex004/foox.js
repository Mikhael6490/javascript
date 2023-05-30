function verificar()
{
    var notavel = document.querySelector('input#nota')
    var result = document.querySelector('div#resultado')
    var velocidade = Number(notavel.value)
    result.innerHTML = `<p>Sua velocidade é ${velocidade}km/h</p>`
    if (velocidade > 60)
    {
        result.innerHTML += `<p>você foi <strong>multado</strong> por excesso de velocidade</p>`
    } 
    result.innerHTML += `<p>Dirija sempre com cinto de segurança</p>` 

}