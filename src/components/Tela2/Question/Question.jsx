import "./style.css"
import { useState } from "react";

export default function Question({ index, pergunta, resposta }) {
    const [showQuestion, setShowQuestion] = useState(0);
    let [selected, setSelected] = useState(false);
    let [color, setColor] = useState('');

    function selectedCard(cor) {
        setSelected(selected = true);
        setColor(color = cor);
    }

    function ionColor() {
        const red = <ion-icon name="close-circle-sharp"></ion-icon>
        const orange = <ion-icon name="help-circle"></ion-icon>
        const green = <ion-icon name="checkmark-circle"></ion-icon>
        if (color === 'red') {
            return red;
        } else if (color === 'orange') {
            return orange;
        } else {
            return green;
        }
    }

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
    } else if (selected) {

        return (
            <div className="tela2__questions">
                <div className="tela2__question">
                    <p className={color}>Pergunta {index}</p>
                    {ionColor()}
                </div >
            </div>
        );
    }
    return (
        <div className="tela2__questions">
            <div className="tela2__question--yellow--turned">
                <p>{resposta}</p>
                <div className="tela2__buttons">
                    <button className="red" onClick={() => selectedCard('red')}>Não lembrei</button>
                    <button className="orange" onClick={() => selectedCard('orange')}>Quase não lembrei</button>
                    <button className="green" onClick={() => selectedCard('green')}>Zap!</button>
                </div>
            </div >
        </div>
    );
}