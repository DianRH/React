//PROMISE

//link para ejecutar este código  https://jsfiddle.net/emiliano_ocariz/2Lxekctj/

/*Es un objeto que es utilizado para peticiones asincronas y representa un valor que puede estar disponible
en el momento. *Ahora, *En un futuro ó *Nunca
se puede encontrar en alguno de estos estados *Pendiente (estado inicial), *Cumplida, *Rechazada*/

//como se define y como se utiliza una promise

/* PRIMER BLOQUE
  new promise espera una función con dos parámetros resolve:todo correcto y
  rejected: cuando no haya ido bien
  cuerpo: setTimeout:algo que se ejecute en un instante posterior en el tiempo
  espera una función y se invoca el resolve una vez que se cumpla el tiempo establecido
  en el setTimeout,y se establece un tiempo de 2s para que se cumpla*/
let promesa = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve("Exito total!");
  },2000);
});

/*y aqui se ejecuta la promesa donde comienza*/
console.log("Ahora comienza");

/*Ahora la utilizamos, then es una palabra reservada e indica que en el momento que la promesa sea
exitosa brindamos una función que se va a ejecutar en el momento cuando haya terminado exitosamente,
entonces va a recibir una función y va a estar esperando un mensaje(exito total) y lo va a imprimir.
si queremos encadenar sincornicamente algún tipo de sentencia se debe de poner dentro de la promise.*/
promesa.then((mensaje) =>{
  console.log(mensaje);
  console.log("Aca termina");
}).catch((error) =>{
  console.log(error);
});
y cambiar el mensaje rejected("Fracaso")*/
/*catch nos mostrara el mensaje de error, tenemos que cambiar resolve por rejected en la funcion promesa
