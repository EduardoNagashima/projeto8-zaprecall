import "./style.css"
import { useState } from "react";

export default function Footer({ counter, sequencia }) {
    let win = true;

    function convert(el) {
        if (el === 'red') {
            win = false;
            return <ion-icon name="close-circle-sharp"></ion-icon>
        } else if (el === "orange") {
            return <ion-icon name="help-circle"></ion-icon>
        } else if (el === "green") {
            return <ion-icon name="checkmark-circle"></ion-icon>
        }
    }

    const winMsg = { emoji: <span>&#129395;</span>, p: <p>PARABÉNS!</p>, msg: <span>Você não esqueceu de nenhum flashcard!</span> };

    const loseMsg = { emoji: <span>&#128549;</span>, p: <p>PUTZ!</p>, msg: <span>Ainda faltaram alguns... Mas não desanime!</span> };

    let p =
        <div className="tela2__footer">
            <div className="tela2__score">
                <p>{counter}/8 CONCLUÍDOS</p>
                <div className="tela2__ion-icons">
                    {sequencia.map(el => convert(el))}
                </div>
            </div>
        </div>

    const resultMsg =
        <div className="tela2__footer--result">
            <div>
                {win ? winMsg.emoji : loseMsg.emoji}
                {win ? winMsg.p : loseMsg.p}
            </div>
            {win ? winMsg.msg : loseMsg.msg}
            <div className="tela2__ionIcon">
                <p>{counter}/8 CONCLUÍDOS</p>
                <div className="tela2__ion-icons">
                    {sequencia.map(el => convert(el))}
                </div>
            </div>
        </div>

    { counter !== 8 ? p = p : p = resultMsg }
    return p;
}