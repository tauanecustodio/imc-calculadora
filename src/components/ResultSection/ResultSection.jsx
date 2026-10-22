import './ResultSection.sass'

export function ResultSection({ peso, altura }) {
  return (
    <div className="imc">

      <h2 className="imc__title">
        <i className="fa-solid fa-gauge-high"></i>
        Seu IMC
      </h2>
      <div className="imc__formula">
        <span className="imc__texto">IMC =</span>
        <div className="imc__fracao">
          <span className="imc__numerador">
            {peso || "Peso"} (kg)
          </span>
          <span className="imc__divisor" />
          <span className="imc__denominador">
            {altura || "Altura"} (m)<sup>2</sup>
          </span>
        </div>
        <span className="imc__igual">=</span>
        <span className="imc__resultado">
          {(peso / (altura * altura).toFixed(1)).toFixed(2) || 0}
        </span>
      </div>
    </div>
  );
}
