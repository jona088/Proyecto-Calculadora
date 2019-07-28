
 var calculadora = {
    aux: 0,
    operacion: "",  


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
    })
  },

  metodoSumar:  function(){
    valorDisplay = document.getElementById("display");
    aux = valorDisplay.innerHTML;
    valorDisplay.innerHTML = "";
    operacion = "+";
    flag= true;
  },

  metodoRestar:  function(){
    valorDisplay = document.getElementById("display");
    aux = valorDisplay.innerHTML;
    valorDisplay.innerHTML = " ";
    operacion = "-";
    flag= true;
  },

  metodoMultiplicar:  function(){
    valorDisplay = document.getElementById("display");
    aux = valorDisplay.innerHTML;
    valorDisplay.innerHTML = " ";
    operacion = "*";
    flag= true;
  },

  metodoDividir:  function(){
    valorDisplay = document.getElementById("display");
    aux = valorDisplay.innerHTML;
    valorDisplay.innerHTML = " ";
    operacion = "/";
    flag= true;
  },
  metodoBorrar: function(){
    valorDisplay = document.getElementById("display").innerHTML = 0;
  }, 

  metodoMostrarPantalla: function(teclaPresionada){
    valorDisplay = document.getElementById("display");
    if(valorDisplay.innerHTML.length < 8){
       if(valorDisplay.innerHTML == "0"){
           valorDisplay.innerHTML = teclaPresionada;
       }else{
        valorDisplay.innerHTML += teclaPresionada;
    }
  }
 },

  metodoPunto: function(){
    valorDisplay = document.getElementById("display");
    if(valorDisplay.innerHTML.indexOf(".")==-1){
       valorDisplay.innerHTML += "."
    }
  },

  metodoSigno: function(){
    valorDisplay = document.getElementById("display");
    valorDisplay.innerHTML = valorDisplay.innerHTML * -1;
    },

  metodoIgual: function(){
    display = document.getElementById("display");
    if (operacion=="+") {
      if(flag == true){
        ultValor = display.innerHTML;
      }
      display.innerHTML=parseFloat(aux) + parseFloat(ultValor);
      display.innerHTML = display.innerHTML.substring(0,7)
      aux = display.innerHTML;
      flag = false;
    }else if (operacion=="-") {
      if(flag == true){
        ultValor = display.innerHTML;
      }
      display.innerHTML=parseFloat(aux) - parseFloat(ultValor);
      display.innerHTML = display.innerHTML.substring(0,7)
      aux = display.innerHTML;
      flag = false
    }else if (operacion=="*") {
      if(flag == true){
        ultValor = display.innerHTML;
      }
      display.innerHTML=parseFloat(aux) * parseFloat(ultValor);
      display.innerHTML = display.innerHTML.substring(0,7)
      aux = display.innerHTML;
      flag = false
    }else if (operacion=="/") {
      if(flag == true){
        ultValor = display.innerHTML;
      }
      display.innerHTML=parseFloat(aux) / parseFloat(ultValor);
      display.innerHTML = display.innerHTML.substring(0,7)
      aux = display.innerHTML;
      flag = false
    }
  }
   

// FIN OBJETO "CALCULADORA"
};

 calculadora.eventoClick();


// DETECTA LA TECLA PRESIONADA Y LA MUESTRA EN EL DISPLAY


///////////// ↓↓↓↓ TECLAS NUMEROS ↓↓↓↓ /////////////
 var tecla0 = document.getElementById("0");
  tecla0.addEventListener("click",function(){
    calculadora.metodoMostrarPantalla(0);
  });

  var tecla1 = document.getElementById("1");
  tecla1.addEventListener("click",function(){
    calculadora.metodoMostrarPantalla(1);
  });

  var tecla2 = document.getElementById("2");
  tecla2.addEventListener("click",function(){
    calculadora.metodoMostrarPantalla(2);
  });

  var tecla3 = document.getElementById("3");
  tecla3.addEventListener("click",function(){
    calculadora.metodoMostrarPantalla(3);
  });

  var tecla4 = document.getElementById("4");
  tecla4.addEventListener("click",function(){
    calculadora.metodoMostrarPantalla(4);
  });

  var tecla5 = document.getElementById("5");
  tecla5.addEventListener("click",function(){
    calculadora.metodoMostrarPantalla(5);
  });

  var tecla6 = document.getElementById("6");
  tecla6.addEventListener("click",function(){
    calculadora.metodoMostrarPantalla(6);
  });

  var tecla7 = document.getElementById("7");
  tecla7.addEventListener("click",function(){
    calculadora.metodoMostrarPantalla(7);
  });

  var tecla8 = document.getElementById("8");
  tecla8.addEventListener("click",function(){
    calculadora.metodoMostrarPantalla(8);
  });

  var tecla9 = document.getElementById("9");
  tecla9.addEventListener("click",function(){
    calculadora.metodoMostrarPantalla(9);
  });
//////////// ↑↑↑↑ TECLAS NUMEROS ↑↑↑↑ /////////////

//-----------------------------------------//
//ESCUCHADOR DE EVENTO ENCENDIDO
  var teclaOn = document.getElementById("on");
  teclaOn.addEventListener("click",function(){
    calculadora.metodoBorrar();
  });
//ESCUCHADOR DE EVENTO TECLA PUNTO
  var teclaPunto = document.getElementById("punto");
  teclaPunto.addEventListener("click", function(){
    calculadora.metodoPunto();
  });
//ESCUCHADOR DE EVENTO SIGNO MENOS
  var teclaSigno = document.getElementById("sign");
  teclaSigno.addEventListener("click",function(){
    calculadora.metodoSigno();
  });

//ESCUCHADOR DE EVENTO TECLA IGUAL
  var teclaIgual = document.getElementById("igual");
  teclaIgual.addEventListener("click",function(){
    calculadora.metodoIgual();
  });


///////////// ↓↓↓↓ OPERACIONES ↓↓↓↓ /////////////
  var teclaDividir = document.getElementById("dividido");
  teclaDividir.addEventListener("click",function(){
    calculadora.metodoDividir();
  });

  var teclaMultiplicar = document.getElementById("por");
  teclaMultiplicar.addEventListener("click",function(){
    calculadora.metodoMultiplicar();
  });

  var teclaSumar = document.getElementById("mas");
  teclaSumar.addEventListener("click",function(){
    calculadora.metodoSumar();
  });

  var teclaRestar = document.getElementById("menos");
  teclaRestar.addEventListener("click",function(){
    calculadora.metodoRestar();
  });


  
///////////// ↑↑↑↑ OPERACIONES ↑↑↑↑ /////////////  

