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