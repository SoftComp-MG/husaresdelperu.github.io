const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }

//select
document.addEventListener("keyup", e=>{

  if (e.target.matches("#buscador")){

      if (e.key ==="Escape")e.target.value = ""

      document.querySelectorAll(".n_profesional").forEach(nombre =>{

        nombre.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?nombre.classList.remove("filtro")
            :nombre.classList.add("filtro")
      })

  }
})
//active
//const menu = document.getElementById('buscador');
//  menu.addEventListener('click', () => {
//  document.getElementById('lista-profesionales').classList.toggle('active');
//});