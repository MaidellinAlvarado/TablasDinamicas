
const frutas = ["Manzana", "Plátano", "Naranja", "Uva", "Pera"];

console.log("Primera fruta:", frutas[0]); // Output: "Manzana"
console.log("Última fruta:", frutas[frutas.length - 1]); // Output: "Pera"


frutas[1] = "Mango";
console.log("Array después de modificar:", frutas); // Output: ["Manzana", "Mango", "Naranja", "Uva", "Pera"]


frutas.push("Sandía");
console.log("Array después de añadir:", frutas); // Output: ["Manzana", "Mango", "Naranja", "Uva", "Pera", "Sandía"]

