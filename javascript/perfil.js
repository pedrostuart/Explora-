/*ABRIR E FECHAR CAIXAS*/

let btnAtividade = document.querySelector(".btn-atividade")
let btnFavoritos = document.querySelector(".btn-favoritos")
let btnConfig = document.querySelector(".btn-config")

let caixaHistorico = document.querySelector(".box-historico")
let caixaFavoritos = document.querySelector(".box-favoritos")
let caixaDados = document.querySelector(".box-dados")

btnAtividade.addEventListener("click", atividade)
btnFavoritos.addEventListener("click", favoritos)
btnConfig.addEventListener("click", config)

function atividade(){
    caixaHistorico.style.display = 'flex'
    caixaFavoritos.style.display = 'none'
    caixaDados.style.display = 'none'
}
function favoritos(){
    caixaHistorico.style.display = 'none'
    caixaFavoritos.style.display = 'flex'
    caixaDados.style.display = 'none'
}
function config(){
    caixaHistorico.style.display = 'none'
    caixaFavoritos.style.display = 'none'
    caixaDados.style.display = 'flex'
}

/*MODAL*/
let btnEscolherPreferencias = document.querySelector(".aplicar-preferencias")
let modal = document.querySelector(".modal")
btnEscolherPreferencias.addEventListener("click", abriModal)

function abriModal(e){
    e.preventDefault()
    modal.style.display = 'block'
}


let btnAplicarModal = document.querySelector(".aplicar")
btnAplicarModal.addEventListener("click", fecharModal)

function fecharModal(e){
    e.preventDefault()
    modal.style.display = 'none'
}
/*CHECK BOX*/
/*let btnPreferencia = document.querySelector(".btn-preferencia")

btnPreferencia.addEventListener("click", mudarCor)
function mudarCor(){
    if(btnPreferencia.checked){
        let label = document.querySelector("label")
        label.style.background = 'red'
    }
}*/