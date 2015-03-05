function Persona (nombre, edad,genero) {
    this.nombre = nombre || "";
    this.edad = edad || "";
    this.genero = genero || "";
    this.obtDetalles(alert(this.nombre));
}
 
function Estudiante (nombre, curso, grupo) {
  this.base = Persona;
  this.base(nombre, curso, grupo);
  this.registrar();
}
Estudiante.prototype = new Persona;
 
function Profesor (nombre, asignatura, nivel) {
  this.base = Persona;
  this.base(nombre, asignatura, nivel);
  this.asignar();
}
Profesor.prototype = new Persona;

    
var estu = new Estudiante("ion",1,"dam");
   // alert(estu.__proto__ == Estudiante.prototype);
var pers = new Persona("ion","11","m");
    //alert(pers.__proto__ == Persona.prototype);
    pers.obtDetalles();