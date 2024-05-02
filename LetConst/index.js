// Creamos la funcion

// Decidi una funcion recursiva, para cambiar el ejemplo
(function contar (numero){
    if (numero>10) {
        return;
    }

    let n = numero;
    console.log(n)

    contar(numero + 1);

})(1);

// Ahora usaremos const 

const uva = "Dulce";
uva = "Salado"

console.log(uva);

// Esto debe da error
