let container = document.querySelector('#container')

let valorProjeto = document.querySelector('.total')
let horasDiarias = document.querySelector('.dia')
let diasEfetivos = document.querySelector('.semana')
let diasFerias = document.querySelector('.ferias')

let btn = document.querySelector('.button')

const calcular = () => {
    let valorHora = valorProjeto.value / (diasEfetivos.value * 4 * horasDiarias.value) + diasFerias.value * diasEfetivos.value * horasDiarias.value

    renderResult(valorHora.toFixed(2))
}

const renderResult = resultado => {
    let divResult = document.createElement('div')
        divResult.classList.add('result')

    if(!isNaN(resultado) && isFinite(resultado)) {
        divResult.innerHTML = `Valor por hora: ${resultado}`
        container.appendChild(divResult)
    } else {
        alert('Preencha todos os campos!')
    }
}

btn.addEventListener('click', calcular)



