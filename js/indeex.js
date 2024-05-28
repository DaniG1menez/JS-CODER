let EDAD_USUARIO;
let EDAD_MINIMA;

do {
    EDAD_USUARIO = prompt("INGRESA TU EDAD");
    EDAD_MINIMA = parseInt(EDAD_USUARIO);

    if (isNaN(EDAD_MINIMA)) {
        console.log("Por favor, ingresa un número válido.");
    }
} while (isNaN(EDAD_MINIMA));

if (EDAD_MINIMA >= 18) {
    console.log("¡¡Eres mayor para viajar con takeOff!! :)");
    let opcionDeViaje;
    do {
        opcionDeViaje = prompt("Ingresa la opción de viaje que te interesa: Snow/Wake/Surf").toLowerCase();
        if (opcionDeViaje !== "snow" && opcionDeViaje !== "wake" && opcionDeViaje !== "surf") {
            console.log("Opción no válida. Por favor, elige entre Snow, Wake o Surf.");
            let respuesta = prompt("¿Volver a seleccionar? (sí/no)").toLowerCase();
            if (respuesta === "no") {
                break;
            }
        }
    } while (opcionDeViaje !== "snow" && opcionDeViaje !== "wake" && opcionDeViaje !== "surf");

    if (opcionDeViaje === "snow" || opcionDeViaje === "wake" || opcionDeViaje === "surf") {
        console.log("A la brevedad te compartimos la información necesaria del viaje seleccionado.");
    }
} else if (EDAD_MINIMA >= 15 && EDAD_MINIMA <= 17) {
    let permisoAutorizado = prompt("¿Tienes el permiso de tus padres para viajar? (sí/no)").toLowerCase();
    if (permisoAutorizado === "sí" || permisoAutorizado === "si") {
        console.log("¡Tenemos una opción junior de viaje para ti! Comunícate con nosotros a través de takeOff@gmail.com");
    } else {
        console.log("¡Pídele permiso a tus padres y comunícate con nosotros!");
    }
} else {
    console.log("Lo sentimos, no cumples con la edad mínima requerida para viajar con TakeOff.");
}
