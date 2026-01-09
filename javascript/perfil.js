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