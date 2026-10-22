import { questions } from '../../data/questions.js'
import './Questions.sass'
import { useState } from 'react'

export function Questions() {
    const [openId, setOpenId] = useState(null)
    function toggleAnswer(id) {
        setOpenId(openId === id ? null : id)
    }

    return (
        <section className="questions">
            <h2 className="questions__title">
                <i className="fa-solid fa-question"></i>
                Perguntas Frequentes
            </h2>
            <ul className="questions__list">
                {questions.map((question) => {
                    const isOpen = openId === question.id

                    return (
                        <li key={question.id} className="questions__item">
                            <button 
                                type="button"
                                aria-expanded={isOpen}
                                aria-controls={`answer-${question.id}`}
                                className={`questions__button ${isOpen ? "questions__button--open" : ""}`} 
                                onClick={() => toggleAnswer(question.id)}
                            >
                                <h3 className="questions__question">
                                    <i className="fa-olid fa-question"></i>
                                    {question.question}
                                </h3>
                                <i className={isOpen ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-right"}></i>
                            </button>
                            {isOpen && (
                                <p id={`answer-${question.id}`} className="questions__answer">{question.answer}</p>
                            )}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}