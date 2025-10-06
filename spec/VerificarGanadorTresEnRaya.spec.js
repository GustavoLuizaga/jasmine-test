import { verificarGanador, esEmpate, juegoTerminado } from "../src/VerificarGadadorTresEnRaya.js";

describe("Módulo VerificarGanadorTresEnRaya", () => {
    it("debería identificar correctamente al ganador 'X'", () => {
        const tablero = [
            'X', 'X', 'X',
            'O', 'O', null,
            null, null, null
        ];
        const ganador = verificarGanador(tablero);
        expect(ganador).toBe('X');
    });

    it("debería identificar correctamente al ganador 'O'", () => {
        const tablero = [
            'X', 'X', 'O',
            'O', 'O', 'X',
            'O', null, null
        ];
        const ganador = verificarGanador(tablero);
        expect(ganador).toBe('O');
    });

    it("debería identificar correctamente cuando el juego sigue pero aun  no hay ganador", () => {
        const tablero = [
            'X', 'O', 'X',
            'O', null, 'O',
            'X', 'O', 'X'
        ];
        const ganador = verificarGanador(tablero);
        const terminado = juegoTerminado(tablero);

        expect(terminado).toBeFalsy();
        expect(ganador).toBeNull();
    });
    it("debería identificar correctamente un empate", () => {
        const tablero = [
            'X', 'O', 'X',
            'O', 'O', 'X',
            'O', 'X', 'O'
        ];
        const empate = esEmpate(tablero);
        expect(empate).toBeTruthy();
    });
    it("debería identificar correctamente cuando el juego no ha terminado", () => {
        const tablero = [
            'X', 'O', 'X',
            'O', null, 'O',
            'X', null, null
        ];
        const terminado = juegoTerminado(tablero);
        expect(terminado).toBeFalsy();
    });
    it("debería identificar correctamente cuando el juego ha terminado con un ganador", () => {
        const tablero = [
            'X', 'X', 'X',
            'O', 'O', null,
            null, null, null
        ];
        const terminado = juegoTerminado(tablero);
        expect(terminado).toBe('X');
    });
});