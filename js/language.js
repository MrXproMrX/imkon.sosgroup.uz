let listVideo = document.querySelectorAll(".header__ru_none .header__ru_list");
let mainVideo = document.querySelector(".header__ru_cart a");
let header__en__link = document.querySelector(".header__ru_cart .header__en__link");

listVideo.forEach(a => {
    a.onclick = () => {
    listVideo.forEach(header__ru_list => header__ru_list.classList.remove("active"));
    a.classList.add("active");
    if (a.classList.contains("active")) {
      let text = a.children[0].innerHTML;
      header__en__link.innerHTML = text;
    }
  };
});



// ----------------------------------------------------------

$(window).on('load',function(){
  $(".loading-area").fadeOut();
  $("#loading").delay(200).fadeOut("slow");
});

//-----------------------------------------------------------