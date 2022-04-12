document.querySelector('#calcular').addEventListener('click', () =>{      //Elemento a escuchar para calcular; Al darle click en calcular se inidica la arroy function que recoge valores
    const numero1 = parseInt(document.querySelector('#numero1').value);   //El elemento parseInt convierte a un numero entero
    const numero2 = parseInt(document.querySelector('#numero2').value);
    const operacion = document.querySelector('#operacion').value;

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
    //document.querySelector('#r').innerHTML = r;  --------> NO PUEDO HACERLO ANDAR
    console.log(resultado);
})