// men suits - actually name?


(function (window){

  $(window).ready(function(){
    /********* Detect Device **********/
    if(jQuery.browser.mobile)
    {
      console.log('mobile!')
      $('.desktop').hide();
      ismobile=true;
    }
    else
    {
      console.log('not mobile!')
      $('.mobile').hide();
      ismobile=false;
    } 

  });


 /********* click states **********/  
 $('.button').click(function() {
    var thisButton = $(this);
    var urlValue =  thisButton.attr('data-new-image');
    var buttonValue = thisButton.attr('data-button');
    var cssUrlThing = 'url(' + urlValue + ')';
    var section = $('.button').next(".section");
    $(section).css('background-image', cssUrlThing); 
    $('.button').toggleClass('hide');
    
    if (buttonValue === '1') { 
      $('[data-button="3"]').css({marginLeft : "90%"});
    }
    if (buttonValue === '2') { 
      $('[data-button="3"]').css({marginLeft : "60.5%"});
    }
  
    $(window).on("click resize", function(){
      if($(window).innerWidth() <= 962) {
        if (buttonValue === '1') { 
          $('[data-button="3"]').css({marginLeft : "870px"});
        }
        if (buttonValue === '2') { 
          $('[data-button="3"]').css({marginLeft : "583px"});
        }
      }
      else { 
        if (buttonValue === '1') { 
          $('[data-button="3"]').css({marginLeft : "90%"});
        }
        if (buttonValue === '2') { 
          $('[data-button="3"]').css({marginLeft : "60.5%"});
        }
      }
     });
  });


function fixButton() {
  $('#canali-button1').css({marginLeft : "430px", marginTop : "340px"});
  $('#canali-button2').css({marginLeft : "680px", marginTop : "290px"});
  $('#hart-button1').css({marginLeft : "565px", marginTop : "370px"});
  $('#hugoboss-button1').css({marginLeft : "390px", marginTop : "310px"});
  $('#hugoboss-button2').css({marginLeft : "510px", marginTop : "310px"});
  $('#hugoboss-button3').css({marginLeft : "730px", marginTop : "305px"});
  $('#theory-button1').css({marginLeft : "330px", marginTop : "355px"});
  $('#theory-button2').css({marginLeft : "515px", marginTop : "345px"});
  $('#theory-button3').css({marginLeft : "705px", marginTop : "390px"});
  $('#zegna-button1').css({marginLeft : "425px", marginTop : "390px"});
  $('#canali-shop').css({marginLeft : "45px", marginTop : "333px", width : "100px"});
  $('#hart-shop').css({marginLeft : "45px", marginTop : "390px", width : "190px"});
  $('#hugoboss-shop').css({marginLeft : "45px", marginTop : "370px", width : "130px"});
  $('#theory-shop').css({marginLeft : "45px", marginTop : "345px", width : "100px"});
  $('#zegna-shop').css({marginLeft : "45px", marginTop : "345px", width : "100px"});
}

function flexButton() {
  $('#canali-button1').css({marginLeft : "45%", marginTop : "35%"});
  $('#canali-button2').css({marginLeft : "71%", marginTop : "30%"});
  $('#hart-button1').css({marginLeft : "58.5%", marginTop : "38%"});
  $('#hugoboss-button1').css({marginLeft : "40.5%", marginTop : "32%"});
  $('#hugoboss-button2').css({marginLeft : "53%", marginTop : "32%"});
  $('#hugoboss-button3').css({marginLeft : "76%", marginTop : "31%"});
  $('#theory-button1').css({marginLeft : "34%", marginTop : "36%"});
  $('#theory-button2').css({marginLeft : "53%", marginTop : "35%"});
  $('#theory-button3').css({marginLeft : "73%", marginTop : "40%"});
  $('#zegna-button1').css({marginLeft : "44%", marginTop : "40%"});
  $('#canali-shop').css({marginLeft : "5%", marginTop : "34.4%", width : "10%"});
  $('#hart-shop').css({marginLeft : "5%", marginTop : "40%", width : "19%"});
  $('#hugoboss-shop').css({marginLeft : "5%", marginTop : "38%", width : "13%"});
  $('#theory-shop').css({marginLeft : "5%", marginTop : "36%", width : "10%"});
  $('#zegna-shop').css({marginLeft : "5%", marginTop : "36%", width : "10%"});
}

 
$(window).on("load resize", function(){
  if($(window).innerWidth() <= 962) {
    $('.section').removeClass('expand');
    $('.section').addClass('fixed');
    $('.button').removeClass('button_expand');
    $('.button').addClass('button_fixed');
    $('.shop_button').removeClass('shop_expand');
    $('.shop_button').addClass('shop_fixed');
    fixButton();
  }
  else { 
    $('.section').addClass('expand');
    $('.section').removeClass('fixed');
    $('.button').removeClass('button_fixed');
    $('.button').addClass('button_expand');
    $('.shop_button').removeClass('shop_fixed');
    $('.shop_button').addClass('shop_expand');
    flexButton();
  }
});



   /********* Sticky Navigation **********/   
  if (!!$('#sticky_navigation').offset()) { 
    var stickyTop = $('#sticky_navigation').offset().top; 
    $(window).scroll(function(){ // scroll event
      var windowTop = $(window).scrollTop(); 
      if (stickyTop < windowTop){
        $('#sticky_navigation').css({ position: 'fixed', top: 0 });
      }
      else {
        $('#sticky_navigation').css('position','absolute');
      }
    });
  }

  /********* Back to Top **********/  

  $("#totop").on("click", function(event) {
    $('html, body').animate({
        scrollTop: $("#Fit_Guide").offset().top - 70, 
    }, 1900);
  }); 

  /********* Scroll Sections **********/
  function getSection(currenttop){
    var sectionDivHeights = [0,
      $('#Fit_Guide').offset().top - 70,
      $('#Canali').offset().top - 70,
      $('#Hart_Schaffner_Marx').offset().top - 70,
      $('#Hugo_Boss').offset().top - 70,
      $('#Theory').offset().top -70,
      $('#Z_Zegna').offset().top - 70,
    ]; 

    sectionDivHeights.push(currenttop);
    sectionDivHeights.sort(function(a, b){return a-b;});
    return sectionDivHeights.indexOf(currenttop);
  }

  currentSection=-1;
  currentSection=getSection($(window).scrollTop());

  $(window).scroll(function () {
    if(currentSection!=getSection($(window).scrollTop())){
      currentSection=getSection($(window).scrollTop());
    }
  });

  $(window).scroll(function () {
    if(currentSection!=getSection($(window).scrollTop())){
      currentSection=getSection($(window).scrollTop());
    }
    if(currentSection===1) {
      $('[data-info="Fit_Guide"]').addClass('active');
    } 
    else { 
      $('[data-info="Fit_Guide"]').removeClass('active');
    }
    if(currentSection===2) {
      $('[data-info="Canali"]').addClass('active');
    } 
    else { 
      $('[data-info="Canali"]').removeClass('active');
    }
    if(currentSection===3) {
      $('[data-info="Hart_Schnaffner"]').addClass('active');
    } 
    else { 
      $('[data-info="Hart_Schnaffner"]').removeClass('active');
    }
    if(currentSection===4) {
      $('[data-info="Hugo_Boss"]').addClass('active');
    } 
    else { 
      $('[data-info="Hugo_Boss"]').removeClass('active');
    }
    if(currentSection===5) {
      $('[data-info="Theory"]').addClass('active');
    } 
    else { 
      $('[data-info="Theory"]').removeClass('active');
    }
    if(currentSection===6) {
      $('[data-info="Z_Zegna"]').addClass('active');
    } 
    else { 
      $('[data-info="Z_Zegna"]').removeClass('active');
    }
  }); 

  /********* JQuery Address **********/
  $('.change_section').click(function() {  
    $.address.value($(this).attr('data-info'));  
  });  

  $.address.change(function(event) {
    var offset = $()
    switch(event.value) {
      case '/Fit_Guide':
      if(ismobile) {
        $('html, body').animate({scrollTop: $('#fit_guide_mobile').offset().top,}, 2000); 
      }
      else {
        $('html, body').animate({scrollTop: $('#Fit_Guide').offset().top - 70,}, 2000);
      } 
      break;
      case '/Canali':
      if(ismobile) {
        $('html, body').animate({scrollTop: $('#canali_mobile').offset().top,}, 2000); 
      }
      else {
        $('html, body').animate({scrollTop: $('#Canali').offset().top - 70,}, 2000);
      } 
      break;
      case '/Hart_Schnaffner':
      if(ismobile) {
        $('html, body').animate({scrollTop: $('#hart_mobile').offset().top,}, 2000); 
      }
      else {
        $('html, body').animate({scrollTop: $('#Hart_Schaffner_Marx').offset().top - 70,}, 2000);
      } 
      break;
      case '/Hugo_Boss':
      if(ismobile) {
        $('html, body').animate({scrollTop: $('#hugoboss_mobile').offset().top,}, 2000); 
      }
      else {
        $('html, body').animate({scrollTop: $('#Hugo_Boss').offset().top -70,}, 2000);
      } 
      break;
      case '/Theory':
      if(ismobile) {
        $('html, body').animate({scrollTop: $('#theory_mobile').offset().top,}, 2000); 
      }
      else {
        $('html, body').animate({scrollTop: $('#Theory').offset().top - 70,}, 2000);
      } 
      break;
      case '/Z_Zegna':
      if(ismobile) {
        $('html, body').animate({scrollTop: $('#zegna_mobile').offset().top,}, 2000); 
      }
      else {
        $('html, body').animate({scrollTop: $('#Z_Zegna').offset().top - 70,}, 2000);
      } 
      break;
    }  
  }); 




}(window));
