//burger

$(document).ready(function(){
    $('.header__menu').click(function(event){
      $('.menu').toggleClass('active__menu');
  
    });
    var headerMenu = $('.header__menu');
    var menuImage = headerMenu.find('.burger__img');
    var menuImageSrc = menuImage.attr('src'); // Сохраняем исходный src изображения

    headerMenu.on('click', function() {
        if (menuImage.attr('src') === menuImageSrc) {
            menuImage.attr('src', 'assets/img/close.png');
        } else {
            menuImage.attr('src', menuImageSrc);
        }
    });
});  

//header

$(function() {
  let header = $('.header');
  let headerHeight = header.outerHeight(); // Use outerHeight() to include padding, border, and margin
  
  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
     header.addClass('scrolled');
     $('body').css({
        'paddingTop': headerHeight + 'px'
     });
    } else {
     header.removeClass('scrolled');
     $('body').css({
      'paddingTop': 0
     })
    }
  });
});

// Hover unsere

$(document).ready(function() {
    $('.unsere__set').hover(
      function() {
        $(this).find('.unsere__column_img').attr('src', 'assets/img/arrow-white.png');
      },
      function() {
        $(this).find('.unsere__column_img').attr('src', 'assets/img/arrow-green.png');
      }
    );
  });
$(document).ready(function() {
  $('.gallery__more').hover(
    function() {
      $(this).find('.gallery__arrow').attr('src', 'assets/img/arrow-white.png');
    },
    function() {
      $(this).find('.gallery__arrow').attr('src', 'assets/img/arrow-green.png');
    }
  );
});  
// input 
$(document).ready(function() {
    $('.input').on('input', function() {
      if ($(this).val().trim() !== '') {
        $(this).css('background', '#36AC82');
      } else {
        $(this).css('background', '');
      }
    });
  });
  

//file 

$(document).ready(function() {
    $('#file-input').change(function() {
      // Получаем имя выбранного файла
      var fileName = $(this).val().split('\\').pop();
  
      // Обновляем текст внутри элемента #file-name
      $('#file-name').text(fileName);
  
      // Меняем картинку на assets/img/file-2.png
      $('.file-img').attr('src', 'assets/img/file-2.png');
    });
  });
  
// tabs

$(function() {
  $('.tab__item').on('click', function(e) {
    e.preventDefault();
    var tabId = $(this).data('tab');
    
    $('.tab__item').removeClass('active__item');
    $(this).addClass('active__item');
    
    $('.tabs__content').removeClass('active__tab');
    $('#' + tabId).addClass('active__tab');
  });
});


//Ordning

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.header__btn');

  btn.addEventListener('click', function(e) {
      e.preventDefault();
      const firstSection = document.querySelector('#ordning'); // Выбираем первый элемент <section>
      firstSection.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const btn2 = document.querySelector('.individuell__btn');

  btn2.addEventListener('click', function(e) {
      e.preventDefault();
      const firstSection2 = document.querySelector('#ordning'); // Выбираем первый элемент <section>
      firstSection2.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const btn3 = document.querySelector('.unsere__btn');

  btn3.addEventListener('click', function(e) {
      e.preventDefault();
      const firstSection3 = document.querySelector('#ordning'); // Выбираем первый элемент <section>
      firstSection3.scrollIntoView({ behavior: 'smooth' });
  });
});