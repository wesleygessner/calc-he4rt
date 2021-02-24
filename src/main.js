let container = document.querySelector('#container')

let valorProjeto = document.querySelector('.total')
let horasDiarias = document.querySelector('.dia')
let diasEfetivos = document.querySelector('.semana')
let diasFerias = document.querySelector('.ferias')

let btn = document.querySelector('.button')


function calcular() {
    let valorHora = (Number(valorProjeto.value) / (Number(diasEfetivos.value) * 4 * Number(horasDiarias.value)) ) + ( ( Number(diasFerias.value) * Number(diasEfetivos.value) * Number(horasDiarias.value) ) )

    return valorHora
}

function renderResult() {

    let resultado = calcular()

    let divResult = document.createElement('div')
        divResult.classList.add('result')
        divResult.innerHTML = `Valor por hora: ${resultado}`
        container.appendChild(divResult)

}

btn.addEventListener('click', renderResult)



