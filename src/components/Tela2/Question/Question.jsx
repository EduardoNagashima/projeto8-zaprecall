import "./style.css"
import { useState } from "react";
import Setinha from "./../../../assets/setinha.png"

export default function Question({ index, pergunta, resposta, callback, sequencia }) {
    const [showQuestion, setShowQuestion] = useState(0);
    const [color, setColor] = useState('');

    function selectedCard(cor) {
        setShowQuestion(showQuestion + 1);
        setColor(cor);
        sequencia(cor);
        callback(1);
    }

    function ionColor() {
        if (color === 'red') {
            return <ion-icon name="close-circle-sharp"></ion-icon>
        } else if (color === 'orange') {
            return <ion-icon name="help-circle"></ion-icon>
        } else {
            return <ion-icon name="checkmark-circle"></ion-icon>
        }
    }

    const indexPage =
        <div className="tela2__question">
            <p>Pergunta {index}</p>
            <ion-icon name="play-outline" onClick={() => setShowQuestion(1)}></ion-icon>
        </div >;

    const questionPage =
        <div className="tela2__question--yellow">
            <p>{pergunta}</p>
            <img className="tela2__turnArrow" onClick={() => setShowQuestion(2)} src={Setinha} alt="setinha" />
        </div >

    const answerPage =
        <div className="tela2__question--yellow--turned">
            <p>{resposta}</p>
            <div className="tela2__buttons">
                <button className="red" onClick={() => selectedCard('red')}>Não lembrei</button>
                <button className="orange" onClick={() => selectedCard('orange')}>Quase não lembrei</button>
                <button className="green" onClick={() => selectedCard('green')}>Zap!</button>
            </div>
        </div >

    const answeredPage =
        <div className="tela2__question">
            <p className={color}>Pergunta {index}</p>
            {ionColor()}
        </div >

    if (showQuestion === 0) {
        return indexPage;
    } else if (showQuestion === 1) {
        return questionPage;
    } else if (showQuestion === 2) {
        return answerPage;
    } else if (showQuestion === 3) {
        return answeredPage;
    }
}