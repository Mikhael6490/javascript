function test()
{
    var ida = document.querySelector ('input#idade')
    var result = document.querySelector ('div#bloco')
    var check = Number(ida.value)
    if (check < 16) {result.innerHTML=`não vota`}
    else if (check < 18) {result.innerHTML=`voto opcional`}
    else if (check >= 18 && check <= 66) { result.innerHTML=`voto abrigatório`}
    else if (check > 66 && check < 100) {result.innerHTML = `voto opcional`}
    else {result.innerHTML= `ainda tá vivo?`}

}