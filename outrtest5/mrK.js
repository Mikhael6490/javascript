var agora = new Date()
var diaSem = agora.getDay()

/* 
0 = DOMINGO
1 = SEGUNDA-FEIRA
2 = TERÇA-FEIRA
3 = QUARTA
4 = QUINTA
5 = SEXTA
6 = SÁBADO
*/

switch (diaSem)
{
    case 0:

        console.log('Domingo')

    break

    case 1:

        console.log('Segunda-feira')

    break

    case 2:

        console.log('Terça-feira')

    break

    case 3: 

        console.log('Quarta-feira')

    break
    
    case 4:

        console.log ('Quinta-Feira')

    break

    case 5:

        console.log('Sexta-Feira')

    break

    case 6:

        console.log('Sábado')

    break
}