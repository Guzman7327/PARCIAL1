import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hola</h1>
  <div>
    <input id="identificacion" placeholder="Ingrese su identificación" />
    <select id="tipoIdentificacion">
      <option value="cedula">Cédula</option>
      <option value="rucPersonaNatural">RUC Persona Natural</option>
      <option value="rucSociedadPrivada">RUC Sociedad Privada</option>
      <option value="rucSociedadPublica">RUC Sociedad Pública</option>
    </select>
    <button id="validar">Validar</button>
    <p id="resultado"></p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

function validarIdentificacion(identificacion: string, tipo: 'cedula' | 'rucSociedadPrivada' | 'rucSociedadPublica' | 'rucPersonaNatural'): boolean {
  if (!/^\d{10,13}$/.test(identificacion)) {
    return false; // Verifica que la identificación tenga entre 10 y 13 dígitos numéricos
  }

  const coeficiente: number[] = tipo === 'cedula' || tipo === 'rucPersonaNatural'
    ? [2, 1, 2, 1, 2, 1, 2, 1, 2]
    : tipo === 'rucSociedadPrivada'
    ? [4, 3, 2, 7, 6, 5, 4, 3, 2]
    : [3, 2, 7, 6, 5, 4, 3, 2, 1]; // Coeficientes para los diferentes tipos de identificación

  let suma = 0;

  for (let i = 0; i < coeficiente.length; i++) {
    let valor = parseInt(identificacion[i]) * coeficiente[i];
    if (tipo === 'cedula' || tipo === 'rucPersonaNatural') {
      if (valor >= 10) valor -= 9;
    }
    suma += valor;
  }

  const ultimoDigito = parseInt(identificacion[identificacion.length - 1]);
  const modulo = suma % 10;
  const digitoVerificador = modulo === 0 ? 0 : 10 - modulo;

  return digitoVerificador === ultimoDigito;
}

document.querySelector<HTMLButtonElement>('#validar')!.addEventListener('click', () => {
  const identificacion = (document.querySelector<HTMLInputElement>('#identificacion')!).value;
  const tipoIdentificacion = (document.querySelector<HTMLSelectElement>('#tipoIdentificacion')!).value as 'cedula' | 'rucSociedadPrivada' | 'rucSociedadPublica' | 'rucPersonaNatural';
  
  const esValida = validarIdentificacion(identificacion, tipoIdentificacion);
  
  const resultado = document.querySelector<HTMLParagraphElement>('#resultado')!;
  resultado.textContent = esValida ? 'Identificación válida' : 'Identificación inválida';
});
