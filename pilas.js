
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

// Clase Pila para manejar la estructura de datos tipo pila
class Pila {
    constructor() {
        this.top = null; // Inicialmente la pila está vacía
        this.size = 0;   // Tamaño inicial de la pila
    }

    // Método para agregar un elemento (push)
    push(elemento) {
        const nuevoNodo = new Nodo(elemento);
        if (!this.top) {
            this.top = nuevoNodo;
        } else {
            nuevoNodo.siguiente = this.top;
            this.top = nuevoNodo;
        }
        this.size++;
    }

    // Método para eliminar el elemento en el tope (pop)
    pop() {
        if (!this.top) {
            return null;
        }
        const eliminado = this.top;
        this.top = this.top.siguiente;
        eliminado.siguiente = null;
        this.size--;
        return eliminado.valor;
    }

    
    peek() {
        return this.top ? this.top.valor : null;
    }

   
    isEmpty() {
        return this.size === 0;
    }


    getSize() {
        return this.size;
    }
}


const miPila = new Pila();
miPila.push(10);
miPila.push(20);
miPila.push(30);

console.log("Elemento en el tope de la pila:", miPila.peek()); 
console.log("Tamaño de la pila:", miPila.getSize()); 

console.log("Eliminando elemento del tope de la pila:", miPila.pop()); // Output: 30
console.log("Tamaño de la pila después del pop:", miPila.getSize()); // Output: 2
console.log("¿La pila está vacía?", miPila.isEmpty()); // Output: false
