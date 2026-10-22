import './ResultSection.sass'

export function ResultSection({ peso, altura, result }) {
  return (
    <section className="imc">

      <h2 className="imc__title">
        <i className="imc__icon fa-solid fa-gauge-high"></i>
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
        <span className="imc__texto">=</span>
        <span className="imc__resultado">
          {result || "Resultado"}
        </span>
      </div>
    </section>
  );
}
