import './Form.sass'

export function Form({ peso, altura, setPeso, setAltura }) {
  const calcularProgresso = (value, min, max) => {
    const percentage = ((value - min) / (max - min)) * 100;

    return `calc(${percentage}% + 10px - ${percentage * 0.2}px)`;
  };

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
            min="1" 
            max="300" 
            step="1" 
            id="peso" 
            name="peso" 
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
            style={{
              "--progress": calcularProgresso(peso, 1, 300),
            }} 
        />
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
            max="2.1" 
            step="0.01" 
            id="altura" 
            name="altura" 
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required 
            style={{
              "--progress": calcularProgresso(altura, 0.5, 2.1),
            }} 
        />
      </div>
      
    </form>
  )
}