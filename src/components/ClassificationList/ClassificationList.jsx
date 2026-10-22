import './ClassificationList.sass'

const faixasIMC = [
  {
    faixa: "Abaixo de 18,5",
    titulo: "Abaixo do peso",
    color: "#52A9E8",
    bgColor: "#EDF6FC"
  },
  {
    faixa: "18,5 – 24,9",
    titulo: "Peso adequado",
    color: "#219466",
    bgColor: "#EDF6F0"
  },
  {
    faixa: "25,0 – 29,9",
    titulo: "Sobrepeso",
    color: "#F3AD24",
    bgColor: "#FCF5E7"
  },
  {
    faixa: "30,0 – 34,9",
    titulo: "Obesidade grau I",
    color: "#FF741F",
    bgColor: "#FFF1E8"
  },
  {
    faixa: "35,0 – 39,9",
    titulo: "Obesidade grau II",
    color: "#F34F55",
    bgColor: "#FCEEEF"
  },
  {
    faixa: "40 ou mais",
    titulo: "Obesidade grau III",
    color: "#C92F36",
    bgColor: "#F8EDEE"
  },
];

export function ClassificationList() {
  return (
    <div className="imc__levels">
      <h2 className="imc__title">
        <i className="fa-solid fa-chart-simple"></i>
        Classificação do IMC
      </h2>

      <div className="imc__timeline">
        {faixasIMC.map((item) => (
        <div className="imc__item" key={item.titulo} style={{ backgroundColor: item.bgColor }}>
          <div
          className="imc__marker"
          style={{ backgroundColor: item.color }}
          />
            <div className="imc__content">
            <span className="imc__faixa">
              {item.faixa}
            </span>
            <h3 style={{ color: item.color }}>
              {item.titulo}
            </h3>
          </div>
        </div>
        ))}
      </div>

    </div>
  )
}