import { delaySum } from "../src/Callback-Function.js";

describe("Pruebas de asincronismo en Jasmine", () => {
  describe("Callbacks con done()", () => {
    it("debería sumar de forma asíncrona usando callback y done", (done) => {
      delaySum(2, 3, 50, (resultado) => {
        try {
          expect(resultado).toBe(5);
          done();
        } catch (error) {
          done.fail(error);
        }
      });
    });
  });

  describe("Control de timers con jasmine.clock()", () => {
    beforeEach(() => {
      jasmine.clock().install();
    });

    afterEach(() => {
      jasmine.clock().uninstall();
    });

    it("debería controlar setTimeout con tick()", () => {
      let resultado = 0;
      delaySum(1, 2, 1000, (suma) => {
        resultado = suma; // 3
      });

      // Avanzamos 999ms --> aún no debería haberse ejecutado
      jasmine.clock().tick(999);
      expect(resultado).toBe(0);

      // Avanzamos 1ms más --> ahora debe ejecutarse el callback
      jasmine.clock().tick(1);
      expect(resultado).toBe(3);
    });

  });
});
