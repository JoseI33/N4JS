/*1- Crea un objeto llamado auto que tenga algunas caracteristicas como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto. Crea los metodos para permitir encender y apagar el auto.

function Auto (color, marca, modelo, encedido, apagado) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.encender = function(){
        console.log(`${this.encedido} auto encendido. XD`);
    }
    this.apagar = function(){
        console.log(`${this.apagado} El auto se apago. .:¬|`);
    }
}

let auto = new Auto ('Amarillo', 'Fiat', 1995);
let auto2 = new Auto ('Gris', 'Honda', 2010)
console.log();*/

/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

/*let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar: function (cantidad) {
        this.saldo += cantidad;
        console.log("El saldo de Alex es:" + this.saldo);
    },
    extraer: function (cantidad) {
        this.saldo -= cantidad;
        console.log("Retiro de la cuenta es:" + this. saldo);
    },
    informar: function() {
       console.log("Titular:" + this.titular);
       console.log("El saldo de la cuenta es: " + this.saldo);
    }
}
cuenta.informar();*/

/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/

/*class Rectangulos {
    constructor (alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    perimetro() {
        console.log("El perímetro del rectángulo es: " + 2 * (this.alto + this.ancho));
    }
    area() {
        console.log("El área de un rectaángulo es: " + this.alto * this.ancho);
    }
}

let formas = new Rectangulos(20, 40);*/

/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimedatos() {
        console.log(this.codigo + this.nombre + this.precio);
    }  
}

let producto1 = new Producto(1, "Fantoche", 150);
let producto2 = new Producto(2, "Tatin", 130);
let producto3 = new Producto(3, "Aguila", 300);

let articulos = [producto1, producto2, producto3];*/

/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

/*class Persona {
    constructor (nombre, edad, dni, sexo, peso, altura, año) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.año = año;
    }
    mostrarGeneracion(){
        if (this.año >= 1994 && this.año <= 2010) {
            console.log(this.nombre + ". Pertenece a la generacion Z y su rasgo es 'Irreverencia'.");
        } else if (this.año >= 1981 && this.año <= 1993) {
            console.log(this.nombre + ". Pertenece a la generación Y y su rasgo es 'Frustación'.");
        } else if ( this.año >= 1969 &&  this.año <= 1980) {
            console.log(this.nombre + ". Pertenece a la generación X y su rasgo es 'Obesión por el éxito'.");
        } else if ( this.año >= 1949 &&  this.año <= 1968) {
            console.log(this.nombre + ". Pertenece a la generación BABY BOOM y su rasgo es 'Ambición'.");
        } else {
            console.log(this.nombre + " Pertenece a la generación SILENT y su rasgo es 'Austeridad'.");
        }
    }
    esMayorDeEdad(){
        if (this.año > 17) {
            console.log("Es mayor de edad.");
        }
    }
    mostrarDatos() {
       console.log(`Nombre: ${this.nombre}`);
       console.log(`Edad: ${this.edad}`);
       console.log(`DNI: ${this.dni}`);
       console.log(`Sexo: ${this.sexo}`);
       console.log(`Peso: ${this.peso}`);
       console.log(`Altura: ${this.altura}`);
       console.log(`Año de nacimiento: ${this.año}`);
    }
    generaDNI() {
       let dniGenerado = Math.floor(Math.random() * 90000000) + 10000000;
        this.dni = dniGenerado;
        console.log(`DNI generado: ${this.dni}`);
    }
}

let persona1 = new Persona ("José", 33, 35029643, "H", 75, 180, 1990);
let persona2 = new Persona ("Osvaldo", 69, 11345543, "H", 75, 175, 1954);*/

/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

/*class libro {
    constructor(ISBN, titulo, autor, paginas) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    get ISBN2(){
        return this.ISBN;
    }
    set ISBN2(ISBN2) {
        this.ISBN = ISBN2;
    }
    get titulo(){
        return this.titulo;
    }
    set titulo2(titulo2){
        this.titulo = tiulo2;
    }
    get autor(){

    }
       

}*/
