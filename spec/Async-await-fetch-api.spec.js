import { obtenerUsuario, procesarUsuario } from "../src/Async-await-fetch-api.js";

describe("Módulo apiRealService (asincrónico con fetch, API real)", () => {

  it("debería obtener un usuario real desde la API", async () => {
    const resultado = await procesarUsuario(1);

    expect(resultado).toMatch(/Usuario procesado:/);
  });

  it("debería obtener el usuario con id= ? y tener las propiedades minimas de identidad del usuario 'name', 'email', 'phone'", async () => {
    const usuario = await obtenerUsuario(1);

    expect(usuario).toBeDefined();

    expect(usuario.name).toBeDefined();
    expect(typeof usuario.name).toBe("string");

    expect(usuario.email).toBeDefined();
    expect(usuario.email).toMatch(/@/);

    expect(usuario.phone).toBeDefined();
    expect(typeof usuario.phone).toBe("string");


  });
});



