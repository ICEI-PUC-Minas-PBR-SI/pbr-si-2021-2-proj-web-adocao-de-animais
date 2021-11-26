//barra de pesquisa
$(document).ready(function(){
  alert("Não é possível combinar filtros. Use um único filtro por vezes e retorne para os valores padrão (Espécie/Porte/Sexo/Idade). A caixa de pesquisa retorna resultados a medida que se digita.")
  $("#pesquisa").on("keyup", function() {
    var z = $(this).val().toLowerCase();
    $(".animal").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(z) > -1)
    });
  });
});

//Seleção dropdown
$(document).ready(function(){
  $("#especie").on("change",function(){

    let a = $( "#especie option:selected" ).text().toLowerCase();
      $(".animal").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(a) > -1)
      });

              
  });

  $("#porte").on("change",function(){
    
      let a = $( "#porte option:selected" ).text().toLowerCase();
      $(".animal").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(a) > -1)
      });
    
  });
  $("#sexo").on("change",function(){

      let a = $( "#sexo option:selected" ).text().toLowerCase();
      $(".animal").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(a) > -1)
      });
    

  });
  $("#idade").on("change",function(){
  
      let a = $( "#idade option:selected" ).text().toLowerCase();
      $(".animal").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(a) > -1)
      });
    
  });

});

