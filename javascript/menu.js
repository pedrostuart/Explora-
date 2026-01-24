let hamburguer = document.querySelector(".hamburguer")

hamburguer.addEventListener("click", () =>{
    let menu = document.querySelector(".barra-lateral-header")
    menu.style.display = 'flex'
})
let fechar = document.querySelector(".fechar-menu")
fechar.addEventListener("click", () =>{
    let menu = document.querySelector(".barra-lateral-header")
    menu.style.display = 'none'
})