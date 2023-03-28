function openCity(evt, cityName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
    autoHeight:true,
    loop:true,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:false,
    nav: true,
    navText: [
      "<div class='nav-button customNextBtn' style='position: absolute; top: 50%; transform: matrix(1, 0, 0, 1, 0, -30); left: 0; visibility: inherit; opacity: 1;'><img style='height:auto; max-width:100%' src='img/icons/left_arrow.svg' alt=''></div>",
    "<div class='nav-button customPreviousBtn' style='position: absolute; top: 50%; transform: matrix(1, 0, 0, 1, -50, -30); left: 100%; visibility: inherit; opacity: 1;'><img style='height:auto; max-width:100%' src='img/icons/right_arrow.svg' alt=''></div>"]
  });

  
  $('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
  });
  $('.customPreviousBtn').click(function() {
  owl.trigger('prev.owl.carousel');
  });
});


