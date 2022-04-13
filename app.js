
let input = document.querySelector('.text-input');
let operador;

let temporalValor = 0;
let finalValor = 0;


const sendNumber = (e) => {

  let value = Number(e.currentTarget.textContent);

  if (input.textContent == finalValor) {
    input.textContent = ''
  }

  input.textContent += value;

  temporalValor = Number(input.textContent);

  if (operador === 'sum') {
    temporalValor = Number(input.textContent) + Number(finalValor);
  }

  if (operador === 'rest') {
    temporalValor = finalValor - Number(input.textContent)
  }

  if (operador === 'multi') {
    temporalValor = Number(input.textContent) * finalValor;
  }

  if (operador === 'divi') {
    temporalValor = finalValor / Number(input.textContent);
  }
};


const checkIfDecimals = (valor) => {
  if (valor % 1 !== 0) {
    temporalValor = valor.toFixed(3);
  }
}

const calculate = (e) => {
  const signo = e.currentTarget.value
  operador = signo
  finalValor = temporalValor;
  document.querySelector('.text-input').textContent = ''
  document.querySelector('.text-input').textContent = finalValor;
};

const result = () => {

  if (!operador) {
    temporalValor = Math.sqrt(Number(input.textContent));
  }

  checkIfDecimals(Number(temporalValor));
  finalValor = Number(temporalValor);

  input.textContent = finalValor;
  operador = '';
}

const undo = () => {
  input.textContent = '';
};

const reset = (value) => {
  finalValor = value;
  temporalValor = finalValor;
  input.textContent = ''
  operador = '';
}


const btnUndo = document.querySelector("#btn-undo");
btnUndo.addEventListener("click", undo);

const btnReset = document.querySelector("#btn-reset");
btnReset.addEventListener("click", reset);

const btnCalculateSum = document.querySelector("#btn-calculate-sum");
btnCalculateSum.addEventListener('click', calculate)

const btnCalculateRest = document.querySelector("#btn-calculate-rest");
btnCalculateRest.addEventListener("click", calculate)

const btnCalculateMulti = document.querySelector("#btn-calculate-multi");
btnCalculateMulti.addEventListener("click", calculate)

const btnCalculateDivi = document.querySelector("#btn-calculate-divi");
btnCalculateDivi.addEventListener("click", calculate);

const btnSendNumber1 = document.querySelector("#btn-sendNumber-1");
btnSendNumber1.addEventListener("click", sendNumber)

const btnSendNumber2 = document.querySelector("#btn-sendNumber-2");
btnSendNumber2.addEventListener("click", sendNumber)

const btnSendNumber3 = document.querySelector("#btn-sendNumber-3");
btnSendNumber3.addEventListener("click", sendNumber)

const btnSendNumber4 = document.querySelector("#btn-sendNumber-4");
btnSendNumber4.addEventListener("click", sendNumber)

const btnSendNumber5 = document.querySelector("#btn-sendNumber-5");
btnSendNumber5.addEventListener("click", sendNumber)

const btnSendNumber6 = document.querySelector("#btn-sendNumber-6");
btnSendNumber6.addEventListener("click", sendNumber)

const btnSendNumber7 = document.querySelector("#btn-sendNumber-7");
btnSendNumber7.addEventListener("click", sendNumber)

const btnSendNumber8 = document.querySelector("#btn-sendNumber-8");
btnSendNumber8.addEventListener("click", sendNumber)

const btnSendNumber9 = document.querySelector("#btn-sendNumber-9");
btnSendNumber9.addEventListener("click", sendNumber)

const btnSendNumber0 = document.querySelector("#btn-sendNumber-0");
btnSendNumber0.addEventListener("click", sendNumber)

const btnSendNumberDot = document.querySelector("#btn-sendNumber-dot");
btnSendNumberDot.addEventListener("click", sendNumber)

const btnResult = document.querySelector("#btn-result");
btnResult.addEventListener("click", result)