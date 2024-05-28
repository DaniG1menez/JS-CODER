function calculadora() {
    let continuar = true;

    while (continuar) {
        console.log("********** CALCULADORA **********");
        console.log("| A: SUMA | B: RESTA | C: MULTIPLICACION | D: DIVISION |");

        let seleccion = prompt("Seleccionar qué tipo de cálculo quieres realizar").toUpperCase();

        if (seleccion === "A") {
            console.log("QUIERES HACER UNA SUMA");
            let numero1 = parseFloat(prompt("Introduce el primer número:"));
            let numero2 = parseFloat(prompt("Introduce el segundo número:"));
            let suma = numero1 + numero2;
            console.log("El resultado de la resta es: " + suma);
        } 
        
        else if (seleccion === "B") {
            console.log("QUIERES HACER UNA RESTA");
            let numero1 = parseFloat(prompt("Introduce el primer número:"));
            let numero2 = parseFloat(prompt("Introduce el segundo número:"));
            let resta = numero1 - numero2;
            console.log("El resultado de la resta es: " + resta);
        } 
        
        else if (seleccion === "C") {
            console.log("QUIERES HACER UNA MULTIPLICACION");
            let numero1 = parseFloat(prompt("Introduce el primer número:"));
            let numero2 = parseFloat(prompt("Introduce el segundo número:"));
            let multiplicación = numero1 * numero2;
            console.log("El resultado de la multiplicación es: " + multiplicación);
        } 
        
        else if (seleccion === "D") {
            console.log("QUIERES HACER UNA DIVISION");
            let numero1 = parseFloat(prompt("Introduce el primer número:"));
            let numero2 = parseFloat(prompt("Introduce el segundo número:"));

            let división = numero1 / numero2;
                console.log("El resultado de la división es: " + división);

        } 
        
        else {
            console.log("Selección no válida. Por favor, elige A, B, C o D.");
        }

        let respuesta = prompt("¿Quieres realizar otro cálculo? (sí/no)").toLowerCase();
        if (respuesta !== "sí" && respuesta !== "si") {
            continuar = false;
        }
    }

    console.log("Gracias por usar la calculadora.");
}

calculadora();