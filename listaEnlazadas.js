
class Nodo {
    constructor(valor) {
        this.valor = valor; 
        this.siguiente = null; // Referencia al siguiente nodo (inicialmente nulo)
    }
}

class ListaEnlazada {
    constructor() {
        this.head = null; 
        this.size = 0; 
    }


    add(valor) {
        const nuevoNodo = new Nodo(valor); // Crear un nuevo nodo con el valor dado

        // Caso especial: lista vacía
        if (!this.head) {
            this.head = nuevoNodo; // El nuevo nodo se convierte en el nodo inicial
        } else {
            let current = this.head; 

       
            while (current.siguiente) {
                current = current.siguiente;
            }

            current.siguiente = nuevoNodo; 

        this.size++; 

    // Método para imprimir la lista enlazada
    print() {
        let current = this.head; // Comenzar desde el nodo inicial
        let resultado = ''; // Variable para almacenar la representación de la lista

        // Recorrer la lista y construir la representación en cadena
        while (current) {
            resultado += current.valor + ' -> '; // Concatenar el valor del nodo
            current = current.siguiente; // Mover al siguiente nodo
        }

        resultado += 'null'; // Añadir null al final para indicar el final de la lista
        console.log(resultado); // Imprimir la representación de la lista
    }
}

// Ejemplo de uso de la lista enlazada
const lista = new ListaEnlazada();
lista.add(1);
lista.add(2);
lista.add(3);
lista.print(); // Output esperado: "1 -> 2 -> 3 -> null"
