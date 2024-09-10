import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <label for="txtidentificacion">Identificación del usuario:</label>
  <input type="text" id="txtidentificacion" value="1316055795"/>
  <div id="estado"></div>
  <button id="btnvalidar">Validar</button>
`;

const txtidentificacion = document.querySelector<HTMLInputElement>('#txtidentificacion')!;
const btnvalidar = document.querySelector<HTMLButtonElement>('#btnvalidar')!;
const estado = document.querySelector<HTMLDivElement>('#estado')!;

// Función para validar identificación
function validarIdentificacion(identificacion: string, coeficiente: string): string {
  if (identificacion.length !== coeficiente.length + 1) {
    return "La identificación debe tener " + (coeficiente.length + 1) + " dígitos.";
  }

  let acumulador = 0;

  for (let i = 0; i < coeficiente.length; i++) {
    let numeroAAcumular = parseInt(identificacion[i]) * parseInt(coeficiente[i]);
    if (numeroAAcumular > 9) {
      numeroAAcumular -= 9;
    }
    acumulador += numeroAAcumular;
  }

  const residuo = 10 - acumulador % 10;
  const digitoVerificador = (residuo === 10) ? 0 : residuo;

  return digitoVerificador === parseInt(identificacion[coeficiente.length])
    ? "Identificación válida"
    : "Identificación inválida";
}

const cedulaCoeficiente = "212121212"; // Coeficiente para cédula de ciudadanía
const rucPrivadoCoeficiente = "212121212"; // Coeficiente para R.U.C. sociedades privadas
const rucPublicoCoeficiente = "432765432"; // Coeficiente para R.U.C. sociedades públicas
const rucNaturalCoeficiente = "212121212"; // Coeficiente para R.U.C. persona natural

btnvalidar.onclick = () => {
  const identificacion = txtidentificacion.value;
  let coeficiente;

  // Determinar el tipo de identificación y su coeficiente
  if (identificacion.length === 10) {
    coeficiente = cedulaCoeficiente; // Cédula
  } else if (identificacion.length === 13) {
    if (identificacion.startsWith("09")) {
      coeficiente = rucPrivadoCoeficiente; // R.U.C. privado
    } else {
      coeficiente = rucPublicoCoeficiente; // R.U.C. público
    }
  } else {
    estado.innerHTML = "Formato de identificación no reconocido.";
    estado.style.color = 'red';
    return;
  }

  const resultado = validarIdentificacion(identificacion, coeficiente);
  estado.innerHTML = resultado;
  estado.style.color = resultado.includes("válida") ? 'green' : 'red';
};

// Mensaje en la consola para confirmar que el script se ejecuta correctamente
console.log('Aplicación de validación de identificación en ejecución.');