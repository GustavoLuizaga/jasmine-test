
const COMBINACIONES_GANADORAS = [
  [0, 1, 2], 
  [3, 4, 5],
  [6, 7, 8], 
  [0, 3, 6],
  [1, 4, 7], 
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function verificarGanador(tablero) {
  for (const combo of COMBINACIONES_GANADORAS) {
    const [a, b, c] = combo;
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      return tablero[a]; 
    }
  }
  return null; //Aun no hay ganador
}

export function esEmpate(tablero) {
  return tablero.every(casilla => casilla !== null) && !verificarGanador(tablero);
}

export function juegoTerminado(tablero) {
  return verificarGanador(tablero) || esEmpate(tablero);
}