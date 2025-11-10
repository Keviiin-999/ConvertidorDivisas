class Convertidor {
    constructor(monto, moneda) {
        this.monto = monto;
        this.moneda = moneda;
        this.tasas = {
            usd: 0.056, 
            eur: 0.052,
            gbp: 0.045,
            jpy: 8.7
        };
    }

    convertir() {
        const tasa = this.tasas[this.moneda];
        return (this.monto * tasa).toFixed(2);
    }

    resumen() {
        const resultado = this.convertir();
        return `Monto ingresado: $${this.monto} MXN  
        Conversión a ${this.moneda.toUpperCase()}: ${resultado}`;
    }
}

document.getElementById("formDivisas").addEventListener("submit", function(e) {
    e.preventDefault();

    const monto = parseFloat(document.getElementById("monto").value);
    const moneda = document.getElementById("moneda").value;

    const objConvertidor = new Convertidor(monto, moneda);

    document.getElementById("resultado").innerText = objConvertidor.resumen();
});
