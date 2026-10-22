import './App.sass'
import { Form } from './components/Form/Form'
import { ResultSection } from './components/ResultSection/ResultSection'
import { ClassificationList } from './components/ClassificationList/ClassificationList'
import { Questions } from './components/Questions/Questions'
import { useState } from 'react'

function App() {
  const [peso, setPeso] = useState(1)
  const [altura, setAltura] = useState(0.5)

  const result = (peso / (altura * altura).toFixed(1)).toFixed(2) || 0

  return (
    <>
      <header className="header">
        <h1 className="header__title">
          <i className="header__icon fa-solid fa-calculator"></i>
          Calculadora de IMC
        </h1>
      </header>

      <main className="main">
        <section className="main__intro">
          <p className="main__description">
            O Índice de Massa Corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal, abaixo ou acima do peso.
          </p>
          <p className="main__description">
            Brinque com os controles abaixo para ajustar o peso e a altura, e veja como isso afeta o seu IMC.
          </p>
        </section>
        <Form 
          peso={peso} 
          altura={altura} 
          setPeso={setPeso} 
          setAltura={setAltura} 
        />
        <ResultSection
          peso={peso}
          altura={altura}
          result={result}
        />
        <ClassificationList 
          result={Number(result)}
        />
        <Questions />
      </main>
      
      <footer className="footer">
        <p className="footer__copyright">
          &copy; 2026 IMC. Todos os direitos reservados.
        </p>

        <p className="footer__creditos">
          Desenvolvido por
          <a
            href="https://github.com/tauanecustodio"
            target="_blank"
            title="Ir para o perfil do Github Tauane Custódio"
            className="footer__link"
          >					
            Tauane Custódio
          </a>
        </p>
      </footer>
    </>
  )
}

export default App
