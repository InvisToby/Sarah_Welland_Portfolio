//alt test haven't got to work...

//var navbar = document.getElementsByClassName("navbar");
//var sticky = navbar.offsetTop

//window.onscroll = function () {
//    if (window.scrollY > sticky) {
//      navbar.classList.add("sticky");
//    }else{
//        navbar.classList.remove("sticky");
//    }};

  
  var height = $('.bannerHere').height();

  $(window).scroll(function () {
    if($(this).scrollTop()>height){ 
      $('.navbar').addClass('sticky');
    }else{
      $('.navbar').removeClass('sticky');
    }
  });
  