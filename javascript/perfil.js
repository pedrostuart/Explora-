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
    btnAtividade.style.color = '#1A824D'
    btnConfig.style.color = 'black'
    btnFavoritos.style.color = 'black'
}
function favoritos(){
    caixaHistorico.style.display = 'none'
    caixaFavoritos.style.display = 'flex'
    caixaDados.style.display = 'none'
    btnFavoritos.style.color = '#1A824D'
    btnAtividade.style.color = 'black'
    btnConfig.style.color = 'black'
}
function config(){
    caixaHistorico.style.display = 'none'
    caixaFavoritos.style.display = 'none'
    caixaDados.style.display = 'flex'
    btnConfig.style.color = '#1A824D'
    btnFavoritos.style.color = 'black'
    btnAtividade.style.color = 'black'
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




/*CEHECKBOX*/

// let btnPreferencia = document.querySelectorAll(".btn-preferencia")


// btnPreferencia.forEach(btn =>{
//     btn.addEventListener('click', mudarCor)
    
// })
// function mudarCor(){
//     let labels = document.querySelectorAll(".label-preferencias label")
//     labels.forEach(label=>{
//         label.style.backgroundColor ='red'
//     })
// }


/*MODAL SALVAR*/
let btnSalvar = document.querySelector(".salvar")
let modalSalvar = document.querySelector(".modal-salvar")

btnSalvar.addEventListener("click", modalSave)

function modalSave(){
    modalSalvar.style.display = 'flex'
    setTimeout(()=>{
        modalSalvar.style.display = 'none'
    }, 1000)
}