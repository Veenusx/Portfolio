function abrirmenu(){
    let BarraMenuAberto = document.getElementById ('barra-menu');
    
    if (BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "180px";
    }else{
        BarraMenuAberto.style.width = "0px";
    }
}

const toTop = document.querySelector(".voltar-ao-topo");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})