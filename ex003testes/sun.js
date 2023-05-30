function soma()
{
var pri = window.document.querySelector('input#t001')
var duo = window.document.querySelector('input#t002')
var ress = window.document.querySelector('div#resultado')
var num1 = Number(pri.value)
var num2 = Number(duo.value)
var somador = num1 * num2
ress.innerText = `O resultado de ${num1} x ${num2} é igual a: ${somador}`
}