$(document).ready(function(){
  
    $('.nav-link').on('click', function() {
        // Remover a classe "active" de todos os itens do menu
        $('.nav-link').removeClass('active');
        // Remover o atributo "aria-current" de todos os itens do menu
        $('.nav-link').removeAttr('aria-current');
        // Adicionar a classe "active" ao item do menu clicado
        $(this).addClass('active');
        // Adicionar o atributo "aria-current" ao item do menu clicado
        $(this).attr('aria-current', 'page');
      });
});
