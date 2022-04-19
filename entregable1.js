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
});
 function guardar(){
    function ResultadoOperacion(numero1, operacion,numero2){ //cada vez que se inicie el objeto y se coloquen los datos se va a transformar en el objeto que estamos definiendo (es un constructor de objetos)
        this.numero1 = numero1;
        this.operacion = operacion;
        this.numero2 = numero2;
        this.resultado = resultado;
    };
    let numero1Guardar = document.getElementById("numero1").value; //capturo los datos que se guardan en la variable numero1Guardar
    let operacionGuardar = document.getElementById("operacion").value; //capturo los datos que se guardan en la variable operacionGuardar
    let numero2Guardar = document.getElementById("numero2").value; //capturo los datos que se guardan en la variable numero2Guardar
    let resultadoHtml = document.getElementById("resultado").value; //capturo los datos que se guardan en la variable resultadoHtml


    resultadoTotal = new ResultadoOperacion(numero1Guardar, operacionGuardar, numero2Guardar, resultadoHtml)    //creando un nuevo objeto llado "ResultadoOperacion" donde almacenara el resultado total
    guardarResultado();
};
    let resultadoBD = [];
    function guardarResultado (){
        resultadoBD.push(resultadoTotal) //Agrego al arrays resultadoBD los datos del objeto que creamos arriba (no lleva "var" ni "let" porque es una variable global)
        document.getElementById("tabla").innerHTML += '<tbody><td>'+resultadoTotal.numero1+'</td><td>'+resultadoTotal.operacion+'</td><td>'+resultadoTotal.numero2+'</td><td>'+resultadoTotal.resultadoHtml+'</td></tbody>';
    //Detecta la tabla e inserta html con etiquetas propias de una tabla ("https://getbootstrap.com/docs/4.0/content/tables/")
    };