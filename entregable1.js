document.getElementById('calcular').addEventListener('click', () =>{      //Elemento a escuchar para calcular; Al darle click en calcular se inidica la arroy function que recoge valores
    const numero1 = parseInt(document.getElementById('numero1').value);   //El elemento parseInt convierte a un numero entero
    const numero2 = parseInt(document.getElementById('numero2').value);
    const operacion = document.getElementById('operacion').value;
    const resultadoHtml = document.getElementById('resultado');

    let resultado;
    if (operacion == '+') {                              //Si la operacion es una suma, suma
        resultado = numero1 + numero2;

    }else if (operacion == '-') {                        //Si la operacion no es una suma pero es una resta, resta
        resultado = numero1 - numero2;

    }else if (operacion == '*') {
        resultado = numero1 * numero2;                   //Si la operacion no es una resta pero es una multiplicacion, multiplica

    }else if (operacion == '/') {                        //Si la operacion no es una multiplicacion pero es una division, divide
        resultado = numero1 / numero2; 

    }
   resultadoHtml.innerHTML = ' " ' + resultado + ' " ';
})