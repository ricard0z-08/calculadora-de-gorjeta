let conta = 0


const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento){
    conta = Number(evento.target.value)   
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento){
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")
    if(evento.target.value === "0"){
        paragrafoErro.computedStyleMap.display = "block"
        divErro.setAttribute("id", "erro-div")
    } else {
        paragrafoErro.computedStyleMap.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(evento.target.value)
    }
}