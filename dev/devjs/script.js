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
  $('#canali_button2').hide();
  $('#canali_button4').hide();

  $('#canali_button3').click(function() {  
    $('.canali').css("background-image","url(assets/canali_3.png)");
    $('#button').hide();
    $('#canali_button3').hide();
    $('#canali_button4').show();
  });

   $('#button').click(function() {  
    $('.canali').css("background-image","url(assets/canali_2.png)");
    $('#button').hide();
    $('#canali_button3').hide();
    $('#canali_button2').show();
  });

  $('#canali_button2').click(function() {  
    $('.canali').css("background-image","url(assets/canali_1.png)");
    $('#canali_button2').hide();
    $('#button').show();
    $('#canali_button3').show();
  });  

  $('#canali_button4').click(function() {  
    $('.canali').css("background-image","url(assets/canali_1.png)");
    $('#canali_button4').hide();
    $('#button').show();
    $('#canali_button3').show();
  });
  
$(window).on("load resize", function(){
  if($(window).innerWidth() <= 962) {
    $('#Canali').removeClass('section');
    $('#Canali').addClass('section2');
    $('#button').removeClass('canali_button');
    $('#button').addClass('canali_button_fixed ');

  }
  else { 
    $('#Canali').addClass('section');
    $('#Canali').removeClass('section2');
    $('#button').removeClass('canali_button_fixed ');
    $('#button').addClass('canali_button');

  }
});

  //  var backcss = $('.canali').css('background-image');
  //   console.log(/assets\/canali_1\.png/.test(backcss));

  // if ($('.canali').css("background-image") === "url(../assets/canali_1.png)") { 
  //   console.log('image1');
  //   $('#canali_button2').hide();
  // }
  // else {
  //   console.log('image2');
  //   $('#canali_button2').show();
  // }



  // $('#canali_button').click(function() {  
  //   console.log ('changing');
  //   $('#canali').addClass('canali_2');
  // });  

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

  /********* Scroll Sections **********/
  function getSection(currenttop){
    var sectionDivHeights = [0,
      $('#Fit_Guide').offset().top,
      $('#Canali').offset().top,
      $('#Hart_Schaffner_Marx').offset().top,
      $('#Hugo_Boss').offset().top,
      $('#Theory').offset().top,
      $('#Z_Zegna').offset().top,
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
        $('html, body').animate({scrollTop: $('#Fit_Guide').offset().top,}, 2000);
      } 
      break;
      case '/Canali':
      if(ismobile) {
        $('html, body').animate({scrollTop: $('#canali_mobile').offset().top,}, 2000); 
      }
      else {
        $('html, body').animate({scrollTop: $('#Canali').offset().top,}, 2000);
      } 
      break;
      case '/Hart_Schnaffner':
      if(ismobile) {
        $('html, body').animate({scrollTop: $('#hart_mobile').offset().top,}, 2000); 
      }
      else {
        $('html, body').animate({scrollTop: $('#Hart_Schaffner_Marx').offset().top,}, 2000);
      } 
      break;
      case '/Hugo_Boss':
      if(ismobile) {
        $('html, body').animate({scrollTop: $('#hugoboss_mobile').offset().top,}, 2000); 
      }
      else {
        $('html, body').animate({scrollTop: $('#Hugo_Boss').offset().top,}, 2000);
      } 
      break;
      case '/Theory':
      if(ismobile) {
        $('html, body').animate({scrollTop: $('#theory_mobile').offset().top,}, 2000); 
      }
      else {
        $('html, body').animate({scrollTop: $('#Theory').offset().top,}, 2000);
      } 
      break;
      case '/Z_Zegna':
      if(ismobile) {
        $('html, body').animate({scrollTop: $('#zegna_mobile').offset().top,}, 2000); 
      }
      else {
        $('html, body').animate({scrollTop: $('#Z_Zegna').offset().top,}, 2000);
      } 
      break;
    }  
  }); 




}(window));
