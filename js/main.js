$(function(){
  
  setTimeout(function(){
    $('.mainTop__text1 p:nth-child(1)').removeClass("feedin");
  },1000);

  setTimeout(function(){
    $('.mainTop__text1 p:nth-child(2)').removeClass("feedin");
  },2000);

  setTimeout(function(){
    $('.mainTop__text1 p:nth-child(3)').removeClass("feedin");
  },3000);

  setTimeout(function(){
    $('.mainTop__text1 p:nth-child(4)').removeClass("feedin");
  },4000);

  setTimeout(function(){
    $('.mainTop__text1 p:nth-child(2)').addClass("effect__shadow");
    $('.mainTop__text1 p:nth-child(3)').addClass("effect__shadow");
  },5000);

  // $('.theme').mouseover(function() {
 
  //   $(this).children(".theme__front").addClass("theme__feedout");
  //   $(this).children(".theme__back").removeClass("theme__feedin");
  //   // setTimeout(function(){
  //   //   $(this).children(".theme__back").addClass("theme__feedin");
  //   //   console.log($(this))
  //   //   // $('.theme__back').addClass("theme__feedin");
  //   // },500);
 
  // }).mouseout(function() {
  
  //   $('.theme__front').removeClass("theme__feedout");
  //   setTimeout(function(){
  //     $('.theme__back').removeClass("theme__feedin");
  //   },500);
  
  // });

})
