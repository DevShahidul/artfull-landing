;(function($){
    $(function(){
        $('.dropdown-menu a.dropdown-toggle').on('click', function(e){
            $(".navbar-inner").click(function(e){
                e.stopPropagation();      
            });
          e.stopPropagation();
          if (!$(this).next().hasClass('show')){
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
          }
          var $subMenu = $(this).next(".dropdown-menu");
          $subMenu.toggleClass('show');
          $subMenu.parents(".dropdown-submenu").toggleClass('show');

          $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e){
            $('.dropdown-submenu .show').removeClass("show");
          });

          return false;
        });
        
        $("#close-nav").click(function(){
            $(this).parent().removeClass("show");
        });
        
    })
})(jQuery)