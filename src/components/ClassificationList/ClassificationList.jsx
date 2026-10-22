import './ClassificationList.sass'
import { classifications } from '../../data/classifications'


export function ClassificationList(result) {

  return (
    <div className="classification">
      <h2 className="classification__title">
        <i className="classification__icon fa-solid fa-chart-simple"></i>
        Classificação do IMC
      </h2>

      <ul className="classification__list">
        {classifications.map((item) => {
          const valor = result?.result;
          const isCurrent = valor !== null && valor >= item.min && valor <= item.max

          return (
            <li 
              className={`classification__item ${
                isCurrent ? "classification__item--current" : ""
              }`} 
              key={item.id} 
              style={{ backgroundColor: item.bgColor, borderColor: item.color }}
            >
              <div
                className="classification__marker"
                style={{ backgroundColor: item.color }}
              >
              </div>
              <div className="classification__content">
                <p className="classification__faixa">
                  {item.faixa}
                </p>
                <h3 style={{ color: item.color }}>
                  {item.titulo}
                </h3>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}