import { obtenerUsuario, procesarUsuario } from "./src/apiRealService.js";
import { verificarGanador } from "./src/VerificarGadadorTresEnRaya.js";


const tablero = 
[
    'X', 'X', 'X',
    'X', 'X', 'O',
    'O', null, 'X'
];

const ganador = verificarGanador(tablero);

if (ganador) {
    console.log(`El ganador es: ${ganador}`);
} else {
    console.log("No hay ganador aún.");
}