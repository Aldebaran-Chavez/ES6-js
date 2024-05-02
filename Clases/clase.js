// Creamos una clase

class guitarra {}

class guitarraElectrica extends guitarra {
    constructor(color, precio){
        super(color, precio);
        this.stock = [];
        this.puntuacion = ""
    }
    tocar(){
        return "tocando acordes";
    }
}

// Ejemplo de THIS

var guitar = {
    foo: function(){
        console.log("Tocando acorde re fa sostenido");
    },
    
    bar: function(){
        this.foo()
    }

}

const miGuitarra = Object.create(guitar);
miGuitarra.bar();
