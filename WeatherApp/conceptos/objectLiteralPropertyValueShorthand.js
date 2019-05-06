//object literal property value shorthand ES6
/*
//ASI SE DECLARA
const tx1 = "hola";
const tx2 = "mundo";

try {
  const res = {
                tx1:tx1,
                tx2:tx2,
  };
  console.log(res) // tx1 : "hola",
                  //  tx2 : "mundo"
}catch (err){
  console.log("error")
}
*/

//ASI SE SIMPLIFICA
const tx1 = "hola";
const tx2 = "mundo";

try {
  const res = {
                tx1, //tienen exactamente el mismo nombre, no es necesario repetirlos
                tx2, //si el parámetro es distinto de los nombres de las propiedades, marca error
  };
  console.log(res) // tx1 : "hola",
                  //  tx2 : "mundo"
}catch (err){
  console.log("error")
}
