function carregar()
{
var horario = document.getElementById ('hours')
var img = document.getElementById('imag')
var datas = new Date()
var hora = 0
horario.innerHTML= `Agora são ${hora}`
if (hora >= 0 && hora <12) 
{img.src = 'images/manha.png'   }

}
