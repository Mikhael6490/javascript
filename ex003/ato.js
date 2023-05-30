var quadrado = window.document.querySelector('div#quadrado')
quadrado.addEventListener('click', clicar)
quadrado.addEventListener('mouseenter', entrar)
quadrado.addEventListener('mouseout', sair)

function clicar ()
{
quadrado.innerText = 'Clicou!'
quadrado.style.background = 'purple'
}

function entrar()
{
quadrado.innerText = 'Entrou!'
quadrado.style.background = 'red'
}

function sair()
{
quadrado.innerText = 'Saiu!'
quadrado.style.background = 'blue'

}

function somar()
{
var pri = window.document.querySelector('input#txt1')
var duo = window.document.querySelector('input#txt2')
var res = window.document.querySelector('div#ress')
var n1 = Number(pri.value)
var n2 = Number(duo.value)
var s = n1 + n2
res.innerText = `A soma entre ${n1} + ${n2} é igual a ${s}`
}