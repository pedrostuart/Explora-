let btnGostos = document.querySelector(".btn-gostos")
btnGostos.addEventListener("click", dialog)

function dialog(event){
    event.preventDefault()
    let dialog = document.getElementById("modal")
    dialog.style.display = 'flex'
    dialog.style.boxShadow = '1px 1px 100px 1000px #1f1f1f54'
}

let btnAplicar = document.querySelector(".btn-aplicar")
btnAplicar.addEventListener("click", aplicar)

function aplicar(event){
    event.preventDefault()
    let dialog = document.getElementById("modal")
    dialog.style.display = 'none'
}


let finalizarCadastro = document.querySelector(".btn-finalizar")

finalizarCadastro.addEventListener("click", CalcularIdade)
    
    
function CalcularIdade(event){
    event.preventDefault()

    let anoAtual = new Date().getFullYear()
    let anoIdade = parseInt(document.getElementById("ano").value)
    let mesIdade = parseInt(document.getElementById("mes").value)
    let diaIdade = parseInt(document.getElementById('dia').value)
    let label = document.querySelector("label")

    let idadeDoUsuario = anoAtual - anoIdade

    if(anoIdade > anoAtual || idadeDoUsuario < 6 || mesIdade > 12 || diaIdade > 31 || idadeDoUsuario > 112){
        label.style.color = 'red'
        label.innerHTML = 'Data inválida'
    }else{
        label.innerText = 'Tudo Ok!'
        label.style.color = 'green'
    }
}