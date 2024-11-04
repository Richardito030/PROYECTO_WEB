const tasasCambio = {
    mxn: { usd: 0.056, eur: 0.048 }, // 1 MXN = 0.056 USD, 0.048 EUR
    usd: { mxn: 17.85, eur: 0.86 },  // 1 USD = 17.85 MXN, 0.86 EUR
    eur: { mxn: 20.72, usd: 1.16 }   // 1 EUR = 20.72 MXN, 1.16 USD
};

const imagenes = {
    mxn: 'peso.jpg',
    usd: 'cent.jpeg',
    eur: 'euro1.jpeg'
};


function convertir() {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const monedaOrigen = document.getElementById('monedaOrigen').value;
    const monedaDestino = document.getElementById('monedaDestino').value;
    const resultado = document.getElementById('resultado');
    const imagen = document.getElementById('imagenMoneda');
    

    if (isNaN(cantidad) || cantidad <= 0) {
        resultado.textContent = 'Por favor, ingresa una cantidad válida.';
        imagen.style.display = 'none';
        return;
    }

    if (monedaOrigen === monedaDestino) {
        resultado.textContent = 'Por favor, selecciona una moneda diferente para convertir.';
        imagen.style.display = 'none';
        return;
    }

    const tasa = tasasCambio[monedaOrigen][monedaDestino];
    if (!tasa) {
        resultado.textContent = 'No se encontró una tasa de conversión para las monedas seleccionadas.';
        imagen.style.display = 'none';
        return;
    }

    const valorConvertido = (cantidad * tasa).toFixed(2);
    resultado.textContent = `${cantidad} ${monedaOrigen.toUpperCase()} = ${valorConvertido} ${monedaDestino.toUpperCase()}`;

    imagen.src = imagenes[monedaDestino];
    imagen.style.display = 'block';
}

       