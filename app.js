/*Ejemplo swich
//con prompt se puede solicitar el dato
*/
var dia = parseInt(prompt ('Ingresa el numero del dia'));
switch(dia){
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;

    default:
        console.log('Dia no encontrado.')
    
}
/* Ejercicio 2
Por medio de un Swicth solicitar al usuario un numero del 1 al 12, el programa 
deberá escribir por consola el mes al que corresponde respectivamente 1= Enero 
2= Febrero...
Y en caso que el usuario ingrese cualquier otro numero el programa indique 
"Mes no encontrado
*/
 
var mes = parseInt(prompt('Ingresa un numero del 1 al 12'));
switch(mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero')
        break;
    case 3:
        console.log('Marzo')
        break;
    case 4:
        console.log('Abril')
        break;
    case 5:
        console.log('Mayo')
        break;
    case 6:
        console.log('Junio')
        break;   
    case 7:
        console.log('Julio')
        break;
    case 8:
        console.log('Agosto')
        break;
    case 9:
        console.log('Septiembre')
        break;
    case 10:
        console.log('Octubre')
        break;
    case 11:
        console.log('Noviembre')
        break;
    case 12:
        console.log('Diciembre')
        break;
    default:
        console.log('Mes no encontrado')
        break;
}
/* Ejercicio 3
Tenemos un Fruver que cuenta con los siguientes productos, vamos a hacer
 un programa usando el SWICHT, que le pida ingresar al usuario cual es la
  fruta que desea consultar, y el programa devuelva por consola el valor 
  correspondiente

Naranjas = $0.59
Manzanas = $0.32
Platanos = $0.48
Cerezas = $3.00
Mangos = $2.79
Papayas = $2.79
*/

var fruta = prompt('Ingrese que fruta desea  consultar el precio');
switch(fruta){
    case 'Naranjas':
        console.log('El precio del kg de naranjas es:$0.59');
        break;
    case 'Manzanas':
        console.log('El precio del kg de  Manzanas es:$0.32');
        break;
    case 'Platanos':
    console.log('El precio del kg de Platanos es:$0.48');
        break;
    case 'Cerezas':
        console.log('El precio del kg de Cerezas es:$3.00');
        break;
    case 'Mangos':
        console.log('El precio del kg de Mangos es:$2.79');
        break;
    case 'Papaya':
        console.log('El precio del kg de Papaya es:$2.79');
        break;
    default:
        console.log('Por el momento no contamos con '+ fruta);

}
console.log('¿Hay algo mas que deseas consultar?');

/*Ejercicio 4
dias de mayo
*/
 
var diaM = parseInt(prompt('Ingrese un numero del 1 al 31'));
switch(diaM){
    case 1: case 8: case 15: case 22: case 29:
        console.log('El dia '+diaM+' de mayo es Miercoles');
        break;
    case 2: case 9: case 16: case 23: case 30:
        console.log('El dia '+diaM+' de mayo es Jueves');
        break;
    case 3: case 10: case 17: case 24: case 31:
        console.log('El dia '+diaM+' de mayo es Viernes');
        break;  
    case 4: case 11: case 18: case 25:
        console.log('El dia '+diaM+' de mayo es Sabado');
        break; 
    case 5: case 12: case 19: case 26:
        console.log('El dia '+diaM+' de mayo es Domingo');
        break; 
    case 6: case 13: case 20: case 27:
        console.log('El dia '+diaM+' de mayo es Lunes');
        break;   
    case 7: case 14: case 21: case 28:
        console.log('El dia '+diaM+' de mayo es Martes');
        break;
}

/*Ejercicios de practica 1
Ejercicio 1
Numeros Mayores

*/

var num1 = parseInt(prompt('Ingrese el primer numero'))
var num2 = parseInt(prompt('Ingrese el segundo numero'));
var num3 = parseInt(prompt('Ingrese el tercer numero'));

if (num1>num2 && num1>num3){
    console.log(num1+' es el numero mayor')
}else if (num3>num2 && num3>num1){
    console.log(num3+' es el numero mayor');
}else if (num2>num1 && num2>num3){
    console.log(num2+' es el numero mayor');
}
/*Ejercicio 2 
Total de cuenta
*/
var cuenta = parseInt(prompt('Ingrese valor de la cuenta'));
var respuesta = prompt('¿Desea agregar propina?');
var propina = 0;
var iva = 0;
if (respuesta == 'si'){
    propina = (cuenta * 0.15);
    iva = (cuenta * 0.10);
    total = cuenta + iva +propina;
    console.log('El total de la cuenta es: '+total);
}else if (respuesta == 'no'){
    iva = (cuenta * 0.10);
    total = cuenta + iva +propina;
    console.log('El total de la cuenta es: '+total);
}
/*Ejercicio 3
Tienda de coches
*/
var tipoCarro = prompt('Elija  el tipo de carro  (gasolina,diesel o electrico)');
switch(tipoCarro){
    case 'gasolina':
    console.log('Dirijase a la oficina n° 100');
    break;
    case 'diesel':
        console.log('Dirijase a la oficina n° 200');
        break;
    case 'electrico':
        console.log('Dirijase a la oficina n° 300');
        break;

        
}
