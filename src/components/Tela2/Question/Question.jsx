import "./style.css"
import { useState } from "react";

export default function Question({ index, pergunta, resposta, questionCounter }) {
    const [showQuestion, setShowQuestion] = useState(0);

    if (showQuestion === 0) {
        return (
            <div className="tela2__questions">
                <div className="tela2__question">
                    <p>Pergunta {index}</p>
                    <ion-icon name="play-outline" onClick={() => setShowQuestion(1)}></ion-icon>
                </div >
            </div >

        );
    } else if (showQuestion === 1) {
        return (
            <div className="tela2__questions">
                <div className="tela2__question--yellow">
                    <p>{pergunta}</p>
                    <img className="tela2__turnArrow" onClick={() => setShowQuestion(2)} src="./assets/setinha.png" alt="setinha" />
                </div >
            </div>
        );
    }

    return (
        <div className="tela2__questions">
            <div className="tela2__question--yellow--turned">
                <p>{resposta}</p>
                <div className="tela2__buttons">
                    <button className="red" onClick={() => questionCounter}>Não lembrei</button>
                    <button className="orange">Quase não lembrei</button>
                    <button className="green">Zap!</button>
                </div>
            </div >
        </div>
    );
}