document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 100,
    loop: true,
    // пагинация
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // навигация
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    })

    document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
        tabsBtn.addEventListener('click', function(e){
            const path = e.currentTarget.dataset.path;

        document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
            btn.classList.remove('tabs-nav__btn--active')});
            e.currentTarget.classList.add('tabs-nav__btn--active');

        document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
            tabsBtn.classList.remove('tabs-item--active')});

        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
     });
    });
    
    
});

$( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content",
      active: 5,
      collapsible: true
    });
  } );

$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});

$(document).ready(function(){
    $(".wrap-search-btn").click(function(){
      $(".wrap, .input").toggleClass("active");
      $(".input[type='text']").focus();
    });

    $(".wrap-btn").click(function(){
        $(".wrap, .input").toggleClass("active");
      });
});

