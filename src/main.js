 const iconMenu = document.querySelector(".btn-menu");
     const menu = document.querySelector(".menu");
    
     iconMenu.addEventListener("click", function () {
    menu.classList.toggle("menu__show");
    
      });
 


const swiper = new swiper('.swiper', {
    loop: true,

    slidesPerView: ancho,
    spaceBetween: 2,
   });