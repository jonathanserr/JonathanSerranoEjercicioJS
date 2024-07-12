// 1
alert ("EJERCICIO 1:"+"\n"+"Ingrese 2 numeros");
let numA = parseInt(prompt("Ingresa PRIMER numero:"))
let numB = parseInt(prompt("Ingresa SEGUNDO numero:"))
if (numA > numB) {
    console.log("El PRIMER numero "+numA+" ES MAYOR que el Segundo numero "+numB)
} else {
    console.log("El PRIMER numero "+numA+" NO ES MAYOR que el Segundo numero "+numB)
}

// 2
alert ("EJERCICIO 2:"+"\n"+"Ingrese 2 numeros");
let numC = parseInt(prompt("Ingresa PRIMER numero:"))
let numD = parseInt(prompt("Ingresa SEGUNDO numero:"))
if (numC === numD) {
    console.log("Los NUMEROS son IGUALES "+numC);
} else {
    console.log("Los NUMEROS son DIFERENTES");
}

// 3
alert ("EJERCICIO 3:"+"\n"+"Ingrese 2 numeros");
let numE = parseInt(prompt("Ingresa PRIMER numero:"))
let numF = parseInt(prompt("Ingresa SEGUNDO numero:"))
if (numE > numF) {
    console.log("El PRIMER numero "+numE+" es MAYOR que el Segundo numero "+numF)

} else if(numE === numF){
    console.log("los numeros son IGUALES"+numE);
} else {
    console.log("El SEGUNDO numero "+numF+" es MAYOR que el Primer numero "+numE);
}

// 4
alert ("EJERCICIO 4:"+"\n"+"Ingrese 3 numeros");
let num1 = parseInt(prompt("Ingresa PRIMER numero:"))
let num2 = parseInt(prompt("Ingresa SEGUNDO numero:"))
let num3 = parseInt(prompt("Ingresa TERCER numero:"))
if (num1<num2){
    if (num2<=num3) {
        console.log("El PRIMER numero "+num1+" es el MENOR");
        alert("El PRIMER numero "+num1+" es el MENOR");

    } else if(num1===num3){
        console.log("El PRIMER numero y el TERCER numero ("+num3+") son MENORES");
        alert("El PRIMER numero y el TERCER numero ("+num3+") son MENORES");

    } else{
        console.log("El TERCER numero "+num3+" es el MENOR");
        alert("El TERCER numero "+num3+" es el MENOR");
    }

} else if (num1>num2) {
    if (num2<num3) {
        console.log("El SEGUNDO numero "+num2+" es el MENOR");
        alert("El SEGUNDO numero "+num2+" es el MENOR");

    } else if(num2===num3){
        console.log("El SEGUNDO numero y el TERCER numero ("+num3+") son MENORES");
        alert("El SEGUNDO numero y el TERCER numero ("+num3+") son MENORES");
    } else {
        console.log("El TERCER numero "+num3+" es el MENOR");
        alert("El TERCER numero "+num3+" es el MENOR");
    }

} else{
    if (num1>num3) {
        console.log("El TERCER numero "+num3+" es el MENOR");
        alert("El TERCER numero "+num3+" es el MENOR");
        
    } else if (num1===num3) {
        console.log("Los tres numeros son IGUALES");
        
    } else {
        console.log("El PRIMER numero y el SEGUNDO numero ("+num2+") son MENORES");
        alert("El PRIMER numero y el SEGUNDO numero ("+num2+") son MENORES");
    }
}

// 5
alert ("EJERCICIO 5:"+"\n"+"Ingrese Nombre, Edad y Altura:");
let persona1 ={    
    nombre:"juan",
    edad: 18,
    altura: 187,
}
let persona2 ={    
    nombre:"andrea",
    edad: 61,
    altura: 178,
}
persona1.nombre = prompt("Ingresa Nombre 1:")
persona1.edad = parseInt(prompt("Ingresa EDAD de "+persona1.nombre))
persona1.altura = parseInt(prompt("Ingresa ALTURA de "+persona1.nombre +" (cms)"))
persona2.nombre = prompt("Ingresa Nombre 2:")
persona2.edad = parseInt(prompt("Ingresa EDAD de "+persona2.nombre))
persona2.altura = parseInt(prompt("Ingresa ALTURA de "+persona2.nombre +" (cms)"))

if (persona1.altura > persona2.altura) {
    alert(persona1.nombre + " ES MAS ALTO")
} else if(persona1.altura < persona2.altura){
    alert(persona2.nombre + " ES MAS ALTO")    
} else {
    alert(persona1.nombre +" y "+ persona2.nombre + " TIENEN LA MISMA ALTURA")  
}

if (persona1.edad > persona2.edad) {
    alert(persona1.nombre + " ES MAYOR")
} else if(persona1.edad < persona2.edad){
    alert(persona2.nombre + " ES MAYOR")    
} else {
    alert(persona1.nombre +" y "+ persona2.nombre + " TIENEN LA MISMA EDAD")  
}

// 6
alert ("EJERCICIO 6:"+"\n"+"Ingrese Nombre, Edad, Altura y Vision:");
let persona3 ={
    nombre:null, 
    edad:null, 
    altura:null, 
    vision:null,
}

persona3.nombre = prompt("Ingresa Nombre")
persona3.edad = parseInt(prompt("Edad"))
persona3.altura = parseInt(prompt("Altura (cms)"))
persona3.vision = parseInt(prompt("Vision (1-10)"))
if (persona3.edad>=18 && persona3.altura>=150 && persona3.vision>=8 ) {
    console.log("ESTAS CAPACITADO PARA CONDUCIR");
    alert("ESTAS CAPACITADO PARA CONDUCIR");

} else {
    console.log("NO CAPACITADO");
    alert("NO CAPACITADO");   
}


// 7
alert ("EJERCICIO 7:"+"\n"+"Ingrese Nombre, Pase y Entrada:");
let nombre = prompt("Ingresa tu Nombre")
let pase = prompt("Ingrese PASE (vip/normal/no)")
let entrada = prompt("Tiene Entrada (si/no)")

if (nombre === "Jonathan" || pase === "vip") {
    console.log("BIENVENIDO");
} else if (entrada === "si") {

    let UsarEntrada = prompt("Desea Usar Entrada ?? (si/no)")
    if (UsarEntrada === "si") {
        console.log("BIENVENIDO");
    } else {
        console.log("Gracias por venir");
    }
} else {
    let comprar = prompt("Desea Comprar Entrada ?? (si/no)")
    if (comprar === "si") {
        let dinero = parseInt(prompt("Dinero disponible?"))
        if (dinero >= 1000) {
            console.log("gracias por comprar entrada, BIENVENIDO");
        } else {
            console.log("Fondos insuficientes para la entrada");
        }
    } else {
        console.log("Gracias por venir");

    }
}

// 8
alert ("EJERCICIO 8:"+"\n"+"ADIVINA EL NUMERO DEL 1 AL 10:");
let numeroIncognita = 5
let numeroIngresado = parseInt(prompt(" PRIMER INTENTO ingrese numero (1-10) :"))
if (numeroIngresado === numeroIncognita) {
    console.log("Ganaste, haz adivinado el número");
} else if (numeroIngresado > numeroIncognita) {
    console.log("El numero ingresado es MAYOR, vuelve a intentarlo");
    numeroIngresado = parseInt(prompt(" SEGUNDO INTENTO ingrese numero (1-10) :"))

    if (numeroIngresado === numeroIncognita) {
        console.log("Ganaste, haz adivinado el número");

    } else if (numeroIngresado > numeroIncognita) {
        console.log("El numero ingresado es MAYOR, vuelve a intentarlo");
        numeroIngresado = parseInt(prompt(" ULTIMO INTENTO ingrese numero (1-10) :"))

        if (numeroIngresado === numeroIncognita) {
            console.log("Ganaste, haz adivinado el número");

        } else {
            console.log("PERDISTE!!!!!");
        }

    } else {
        console.log("El numero ingresado es MENOR, vuelve a intentarlo");
        numeroIngresado = parseInt(prompt(" ULTIMO INTENTO ingrese numero (1-10) :"))
        if (numeroIncognita === numeroIngresado) {
            console.log("Ganaste, haz adivinado el número");
        } else {
            console.log("PERDISTE!!!!!");
        }
    }

} else {
    console.log("El numero ingresado es MENOR, vuelve a intentarlo");
    numeroIngresado = parseInt(prompt(" SEGUNDO INTENTO ingrese numero (1-10) :"))
    if (numeroIngresado === numeroIncognita) {
        console.log("Ganaste, haz adivinado el número");
    } else if (numeroIngresado > numeroIncognita) {
        console.log("El numero ingresado es MAYOR, vuelve a intentarlo");
        numeroIngresado = parseInt(prompt(" ULTIMO INTENTO ingrese numero (1-10) :"))
        if (numeroIncognita === numeroIngresado) {
            console.log("Ganaste, haz adivinado el número");
        } else {
            console.log("PERDISTE!!!!!");
        }

    } else {
        console.log("El numero ingresado es MENOR, vuelve a intentarlo");
        numeroIngresado = parseInt(prompt(" ULTIMO INTENTO ingrese numero (1-10) :"))
        if (numeroIncognita === numeroIngresado) {
            console.log("Ganaste, haz adivinado el número");
        } else {
            console.log("PERDISTE!!!!!");
        }
    }
}

// 9
alert ("EJERCICIO 9:"+"\n"+"EDADES:");
let edad = parseInt(prompt(" Ingrese su Edad"))
if (edad <= 12) {
    alert("Eres un INFANTE");
    console.log("Eres un INFANTE");
} else if (edad <= 18) {
    alert("Eres ADOLECENTE");
    console.log("Eres ADOLECENTE");
} else if (edad <= 45) {
    alert("Eres un JOVEN MAYOR");
    console.log("Eres un JOVEN MAYOR");
} else if (edad <= 100) {
    alert("Eres un ANCIANO");
    console.log("Eres un ANCIANO");
} else if (edad >= 100) {
    let pregunta = prompt("Estas Seguro tener mas de 100años???? (si/no)")
    if (pregunta === "si") {
        alert("Eres un MUY MUY ANCIANO");     
        console.log("Eres un MUY MUY ANCIANO");
    } else {
        alert("Vuelva a ingresar su edad")
        console.log("Vuelva a ingresar su edad");
    }
}

// 10
alert("EJERCICIO 10:"+"\n"+"PIEDRA, PAPEL O TIJERAS");

let jugador1 = prompt("PLAYER 1 : (piedra/papel/tijeras)")
let jugador2 = prompt("PLAYER 2 : (piedra/papel/tijeras)")

if (jugador1 === jugador2) {
    alert("EMPATE");
    console.log("EMPATE");
} else if (jugador1 === "piedra") {
    if (jugador2 == "papel") {
        alert("GANA PLAYER 2");
        console.log("GANA PLAYER 2");
    } else if (jugador2 === "tijeras") {
        alert("GANA PLAYER 1")
        console.log("GANA PLAYER 1");
    } else {
        alert("TRAMPA PLAYER 2")
        console.log("TRAMPA PLAYER 2");
    }
    
} else if (jugador1 === "papel") {
    if (jugador2 == "tijeras") {
        alert("GANA PLAYER 2");
        console.log("GANA PLAYER 2");
    } else if (jugador2 === "piedra") {
        alert("GANA PLAYER 1")
        console.log("GANA PLAYER 1");
    } else {
        alert("TRAMPA PLAYER 2")
        console.log("TRAMPA PLAYER 2");
    }
    
} else if (jugador1 === "tijeras") {
    if (jugador2 == "piedra") {
        alert("GANA PLAYER 2");
        console.log("GANA PLAYER 2");
    } else if (jugador2 === "papel") {
        alert("GANA PLAYER 1")
        console.log("GANA PLAYER 1");
    } else {
        alert("TRAMPA PLAYER 2")
        console.log("TRAMPA PLAYER 2");
    }    
       
} else {
    alert("TRAMPA PLAYER 1")    
    console.log("TRAMPA PLAYER 1");
} 


// 11
alert("EJERCICIO 11:"+"\n"+"COLORES");
let color = prompt("Ingrere un COLOR (minusculas)")
switch (color) {
    case "negro":
        console.log("Falta de color");
        break;
    case "blanco":
        console.log("Falta de color");
        break;
    case "verde":
        console.log("El color de la naturaleza");
        break;
    case "azul":
        console.log("El color del agua");
        break;
    case "amarillo":
        console.log("El color del sol");
        break;
    case "rojo":
        console.log("El color del fuego");
        break;
    case "marron":
        console.log("El color de la tierra");
        break;
    default:
        console.log("Excelente elección, no lo teníamos pensado");
        break;
}

// 12
alert("EJERCICIO 12:"+"\n"+"OPERACIONES: Ingresa 2 Numeros y la Operacion:");
let numeroA = parseFloat(prompt("Ingresa PRIMER numero:"))
let numeroB = parseFloat(prompt("Ingresa SEGUNDO numero:"))
let operacion = prompt("Ingresa OPERACION (suma/resta/multiplicacion/division):")
let resultado = parseFloat(null);
switch (operacion) {
    case "suma":
        resultado = numeroA + numeroB;
        alert("La SUMA de " + numeroA + " + " + numeroB + " es igual a : " + resultado);
        console.log("La SUMA de " + numeroA + " + " + numeroB + " es igual a : " + resultado);
        break;
    case "resta":
        resultado = numeroA - numeroB;
        alert("La RESTA de " + numeroA + " - " + numeroB + " es igual a : " + resultado);
        console.log("La RESTA de " + numeroA + " - " + numeroB + " es igual a : " + resultado);
        break;
    case "multiplicacion":
        resultado = numeroA * numeroB;
        alert("La MULTIPLICACION de " + numeroA + " * " + numeroB + " es igual a : " + resultado);
        console.log("La MULTIPLICACION de " + numeroA + " * " + numeroB + " es igual a : " + resultado);
        break;
    case "division":
        if (numB === 0) {
            alert("ERROR divisor 0");
            console.log("ERROR divisor 0");
        } else {
            resultado = numeroA / numeroB;
            alert("La DIVISION de " + numeroA + " / " + numeroB + " es igual a : " + resultado);
            console.log("La DIVISION de " + numeroA + " / " + numeroB + " es igual a : " + resultado);
        }
        break;

    default:
        break;
}

// 13
alert("EJERCICIO 1:"+"\n"+"DOCUMENTO NACIONAL DE IDENTIDAD:");
let nombre1 = prompt("Ingrese su NOMBRE")
let apellido1 = prompt("Ingrese su APELLIDO")
let documento1 = prompt("Ingrese su NUMERO DE DOCUMENTO")
let fecha1 = prompt("Ingrese su FECHA DE NACIMIENTO")
let lugar1 = prompt("Ingrese su LUGAR DE NACIMIENTO")

let datosIngresado = "DATOS INGRESADOS: \n" +
    "Nombre: " + nombre1 + "\n" +
    "Apellido: " + apellido1 + "\n" +
    "Numero de Documento: " + documento1 + "\n" +
    "Fecha de Nacimiento: " + fecha1 + "\n" +
    "Lugar de Nacimiento: " + lugar1 + "\n\n" +
    "LOS DATOS INGRESADOS SON CORRECTOS???";

let confirmacion = confirm(datosIngresado);

if (confirmacion) {
    let dni = {
        nombre: nombre1,
        apellido: apellido1,
        numeroDeDocumento: documento1,
        fechaDeNacimiento: fecha1,
        lugarDeNacimiento: lugar1,
    }

    console.table(dni);
    alert("REGISTRO EXITOSO");
    console.log("REGISTRO EXITOSO");
} else {
    alert("Vuelva a intentarlo en un mes");
    console.log("Vuelva a intentarlo en un mes");
}
