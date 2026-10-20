import './App.sass'

function App() {

  return (
    <>
      <h1>Calculadora de IMC</h1>

      <form>
        <label htmlFor="peso">Peso (kg):</label>
        <input type="range" min="1" max="300" step="1" id="peso" name="peso" required />

        <label htmlFor="altura">Altura (m):</label>
        <input type="range" min="0.5" max="2.5" step="0.01" id="altura" name="altura" required />

        <label htmlFor="genero">Gênero:</label>
        <select id="genero" name="genero" required>
          <option value="">Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </form>

      <div className="resultado">
        <h2>Resultado:</h2>
        <p>IMC: <span id="imc">0</span></p>
        <p>Classificação: <span id="classificacao">-</span></p>
      </div>
    </>
  )
}

export default App
