
 var calculadora = {

  eventoClick: function(){
    event = document.getElementsByClassName("tecla");

      event[0].addEventListener("mousedown", function(){
      event[0].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[0].addEventListener("mouseup", function(){
      event[0].setAttribute("style","transform:scale(1,1)")
    }),

      event[1].addEventListener("mousedown", function(){
      event[1].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[1].addEventListener("mouseup", function(){
      event[1].setAttribute("style","transform:scale(1,1)")
    }),

      event[2].addEventListener("mousedown", function(){
      event[2].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[2].addEventListener("mouseup", function(){
      event[2].setAttribute("style","transform:scale(1,1)")
    }),

      event[3].addEventListener("mousedown", function(){
      event[3].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[3].addEventListener("mouseup", function(){
      event[3].setAttribute("style","transform:scale(1,1)")
    }),

      event[4].addEventListener("mousedown", function(){
      event[4].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[4].addEventListener("mouseup", function(){
      event[4].setAttribute("style","transform:scale(1,1)")
    }),

      event[5].addEventListener("mousedown", function(){
      event[5].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[5].addEventListener("mouseup", function(){
      event[5].setAttribute("style","transform:scale(1,1)")
    }),

      event[6].addEventListener("mousedown", function(){
      event[6].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[6].addEventListener("mouseup", function(){
      event[6].setAttribute("style","transform:scale(1,1)")
    }),

      event[7].addEventListener("mousedown", function(){
      event[7].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[7].addEventListener("mouseup", function(){
      event[7].setAttribute("style","transform:scale(1,1)")
    }),
 
      event[8].addEventListener("mousedown", function(){
      event[8].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[8].addEventListener("mouseup", function(){
      event[8].setAttribute("style","transform:scale(1,1)")
    }),
      event[9].addEventListener("mousedown", function(){
      event[9].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[9].addEventListener("mouseup", function(){
      event[9].setAttribute("style","transform:scale(1,1)")
    }),

      event[10].addEventListener("mousedown", function(){
      event[10].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[10].addEventListener("mouseup", function(){
      event[10].setAttribute("style","transform:scale(1,1)")
    }),

      event[11].addEventListener("mousedown", function(){
      event[11].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[11].addEventListener("mouseup", function(){
      event[11].setAttribute("style","transform:scale(1,1)")
    }),

      event[12].addEventListener("mousedown", function(){
      event[12].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[12].addEventListener("mouseup", function(){
      event[12].setAttribute("style","transform:scale(1,1)")
    }),

      event[13].addEventListener("mousedown", function(){
      event[13].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[13].addEventListener("mouseup", function(){
      event[13].setAttribute("style","transform:scale(1,1)")
    }),

      event[14].addEventListener("mousedown", function(){
      event[14].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[14].addEventListener("mouseup", function(){
      event[14].setAttribute("style","transform:scale(1,1)")
    }),

      event[15].addEventListener("mousedown", function(){
      event[15].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[15].addEventListener("mouseup", function(){
      event[15].setAttribute("style","transform:scale(1,1)")
    }),

      event[16].addEventListener("mousedown", function(){
      event[16].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[16].addEventListener("mouseup", function(){
      event[16].setAttribute("style","transform:scale(1,1)")
    }),
 
      event[17].addEventListener("mousedown", function(){
      event[17].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[17].addEventListener("mouseup", function(){
      event[17].setAttribute("style","transform:scale(1,1)")
    }),

      event[18].addEventListener("mousedown", function(){
      event[18].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[18].addEventListener("mouseup", function(){
      event[18].setAttribute("style","transform:scale(1,1)")
    }),
 
      event[19].addEventListener("mousedown", function(){
      event[19].setAttribute("style","transform:scale(0.95,0.95)")
    }),

      event[19].addEventListener("mouseup", function(){
      event[19].setAttribute("style","transform:scale(1,1)")
    })
  },

  metodoSumar:  function(valor1,valor2){
    return valor1 + valor2
  },

  metodoRestar:  function(valor1,valor2){
    return valor1 - valor2
  },

  metodoMultiplicar:  function(valor1,valor2){
    return valor1 * valor2
  },

  metodoDividir:  function(valor1,valor2){
    return valor1 / valor2
  }

 }

 calculadora.eventoClick();
