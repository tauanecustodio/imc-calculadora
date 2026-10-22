import './Form.sass'

export function Form({ peso, altura, setPeso, setAltura }) {

    return (
        <form className="form" id="formulario">

          <div className="form__container">
            <div>
              <div>
                <i className="form__icon fa-solid fa-weight-scale"></i>
                <label className="form__label" htmlFor="peso">Peso (kg):</label>
              </div>
              <span className="form__value">{peso} kg</span>
            </div>
            <input className="form__range-input"
                 type="range" 
                 min="1" ma
                 x="300" 
                 step="1" 
                 id="peso" 
                 name="peso" 
                 value={peso}
                 onChange={(e) => setPeso(e.target.value)}
                 required />
          </div>

          <div className="form__container">
            <div>
              <div>
                <i className="form__icon fa-solid fa-person"></i>
                <label className="form__label" htmlFor="altura">Altura (m):</label>
              </div>
              <span className="form__value">{altura} m</span>
            </div>
            <input className="form__range-input"
                 type="range" 
                 min="0.5" 
                 max="2.5" 
                 step="0.01" 
                 id="altura" 
                 name="altura" 
                 value={altura}
                 onChange={(e) => setAltura(e.target.value)}
                 required />
          </div>
          
          <button type="submit" className="form__button">
            Calcular
          </button>
        </form>
    )
}