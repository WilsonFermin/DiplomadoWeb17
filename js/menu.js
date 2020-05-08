  var btnMenu = document.getElementById('btn-menu');
  var nav = document.getElementById('nav');

  btnMenu.addEventListener('click', function(){
    nav.classList.toggle('mostrar');
  }) 

   $(document).ready(function(){
            $('#btn4').click(function(){

              var correo = $ ("#correo").val();
              var comentario = $ ("#comentario").val();

              if(correo == ""){
                 $('#mj').fadeIn();
                 return false;
             }else{
                $('#mj').fadeOut();
                if (comentario == "") {
                   $('#mj2').fadeIn();
                     return false;
                }
             }
            });
        });   