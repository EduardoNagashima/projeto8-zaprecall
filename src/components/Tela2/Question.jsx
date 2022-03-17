import { useState } from "react";

export default function Question({ display, pergunta, resposta }) {
    const [showQuestion, setShowQuestion] = useState(false);

    if (!showQuestion) {
        return (
            <div className="tela2__question">
                <p>{display}</p>
                <ion-icon name="play-outline" onClick={() => setShowQuestion(true)}></ion-icon>
            </div >
        );
    }

    return (
        <div className="tela2__question">
            <p>{pergunta}</p>
        </div >
    );
}