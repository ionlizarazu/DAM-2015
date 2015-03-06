function Persona (nombre, edad,genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.obtDetalles = function(){
        console.log("Nombre: ",this.nombre," Edad: ", this.edad," Género: ", this.genero);
    };
}
 
function Profesor (nombre,edad, genero,  asignatura, nivel) {
  this.base = Persona;
  this.base(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  this.asignar = function(){
    console.log("Nombre: ",this.nombre," Edad: ", this.edad," Género: ", this.genero, " Asignatura: ",this.asignatura," Nivel: ", this.nivel);
  };
}
Profesor.prototype = new Persona;
 
function Estudiante (nombre,edad,genero,curso, grupo) {
  this.base = Persona;
  this.base(nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  this.registrar = function(){
    console.log("Nombre: ",this.nombre," Edad: ", this.edad," Género: ", this.genero, " Curso: ", this.curso, " Grupo: ", this.grupo);
  };
}

Estudiante.prototype = new Persona;

var per1 = new Persona("ion",22,"M");
per1.obtDetalles();

var est1 = new Estudiante("ion",22,"M", 2, 1);
est1.obtDetalles();
est1.registrar();

var pro1 = new Profesor("ion",22,"M", "Historia", 1);
pro1.obtDetalles();
pro1.asignar();