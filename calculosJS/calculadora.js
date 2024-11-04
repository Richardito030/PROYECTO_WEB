function calcular() {
    // Obtener los valores ingresados
    const numero1 = parseFloat(document.getElementById("n1").value);
    const numero2 = parseFloat(document.getElementById("n2").value);
    const operacion = document.getElementById("operacion").value;
    let resultado;
    let operacionSimbolo;

    function isNumber(n){
        return !isNan (parseInt(n) && isFinite(n));
    }
    // Comprobar si los números son válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resultado").textContent = "Resultado: Ingrese ambos números";
        return;
    }

    // Realizar la operación seleccionada
    switch (operacion) {
        case "suma":
            resultado = numero1 + numero2;
            operacionSimbolo = "+";
            break;
        case "resta":
            resultado = numero1 - numero2;
            operacionSimbolo = "-";
            break;
        case "multiplicacion":
            resultado = numero1 * numero2;
            operacionSimbolo = "*";
            break;
        case "division":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
                operacionSimbolo = "/";
            } 
            
            
            else {
                document.getElementById("resultado").textContent = "Resultado: No se puede dividir por cero";
                return;
                
            }
            
            break;
        default:
            document.getElementById("resultado").textContent = "Resultado: Operación no válida";
            return;
    }

   
    document.getElementById("resultado").textContent = `Resultado: ${numero1} ${operacionSimbolo} ${numero2} = ${resultado}`;
}
