function Pokemon(nombre, color, ataque, vida) {
    this.nombre = nombre;
    this.color = color;
    this.amistad = 0;
    this.vida = vida;
    this.ataque = ataque;

    this.presentarPokemon = function() {
        return ('Hola ^-^!!, soy:' + this.nombre + ' y  soy de color: ' + this.color);
    }

    this.aumentarAmistad = function(valor) {
        this.amistad += valor
    }
}