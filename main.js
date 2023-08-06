/* Algoritmo para calcular edad promedio de personas registradas */

alert("Bienvenido a su simulador. Aquí podremos calcular el promedio de edad de las 4 primeras personas que se registren. Haga por favor click en 'aceptar' para continuar y siga las instrucciones");

let edad01 = parseInt(prompt("Usted es la primera persona, ingrese su edad: "));

let edad02 = parseInt(prompt("Usted es la segunda persona, ingrese su edad: "));

let edad03 = parseInt(prompt("Usted es la tercera persona, ingrese su edad: "));

let edad04 = parseInt(prompt("Usted es la cuarta persona, ingrese su edad: "));

alert("Se han completado los ingresos. Haga click en 'aceptar' para conocer los resultado");

let sumaEdad = edad01 + edad02 + edad03 + edad04;

alert(`El total de años de las 4 personas es ${sumaEdad} años`);

let promedioEdad = sumaEdad / 4;

alert(`El promedio de edad de las cuatro personas es ${promedioEdad} años`);

alert("Gracias por usar su simulador. Vuelva pronto");

/* Algoritmo para nota final de alumnos ingresados */

alert("Bienvenido a su simulador. Hoy le proponemos calcular la nota final de las cuatro evaluaciones realizadas por su alumno. Haga por favor click en 'aceptar' para continuar y siga las instrucciones");

alert("Le recordamos que el sistema de notación es de 1 punto hasta 20 puntos y que para aprobar, el alumno debe obtener un promedio mínimo de 12 puntos. Si el alumno obtiene un promedio de 8 a 11 puntos, tiene derecho a presentar un examen de recuperación y si el promedio es inferior a 8 puntos, el alumno está reprobado. Haga click en 'aceptar' para continuar")

let alumno = prompt("Ingrese el nombre del alumno");

let nota01 = parseInt(prompt("Ingrese la primera nota del alumno: "));

let nota02 = parseInt(prompt("Ingrese la segunda nota del alumno: "));

let nota03 = parseInt(prompt("Ingrese la tercera nota del alumno: "));

let nota04 = parseInt(prompt("Ingrese la cuarta nota del alumno: "));

alert("Se han completado los ingresos. Estamos calculando la nota final. Haga click en 'aceptar' para conocer el resultado")

let sumaNota = nota01 + nota02 + nota03 + nota04

let promedioNota = sumaNota / 4
if (promedioNota < 8) {
    alert(`El promedio de ${alumno} es ${promedioNota} puntos y está reprobado`)
} else if (promedioNota < 12) {
    alert(`El promedio de ${alumno} es ${promedioNota} puntos y puede presentar examen de recuperación`)
} else {
    alert(`El promedio de ${alumno} es ${promedioNota} puntos y está aprobado`)
}

alert("Gracias por usar su simulador. Vuelva pronto")


/* Algoritmo para que el usuario escoja dos números y mostrar la progresión del primero al segundo según la cantidad de saltos que el usuario elija dar en ese rango */

alert("Bienvenido a su calculador de números dentro de un rango. Este simulador le permite ingresar un número de inicio y de fin, y  obtener el listado de los números según vayan aumentando de acuerdo a un salto establecido por el usuario");

alert("Todos los números debe ser positivos, y el de inicio debe ser menor al de fin, sino, obtendrá un error");

let num1 = parseInt(prompt("Ingrese el número de inicio:"));

let num2 = parseInt(prompt("Ingrese el número de fin:"));

let num3 = parseInt(prompt("Ingrese el número de salto:"));

for (let i = num1; i <= num2; i = i + num3) {

    alert(`${i}`);
}

alert("El simulador ha concluido, puede comenzar de nuevo si lo desea. Para ello oprima el boton 'cargar página de nuevo'. Gracias por usar nuestro calculador.")
    