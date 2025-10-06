
export async function obtenerUsuario(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!response.ok) {
    throw new Error(`Error al obtener usuario: ${response.status}`);
  }

  const data = await response.json();
  return data; 
}


 export async function procesarUsuario(id) {

  const usuario = await obtenerUsuario(id);
  
  return `Usuario procesado: ${usuario.name}`;
}


