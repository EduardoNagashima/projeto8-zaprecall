import "./style.css"

export default function Footer({ counter }) {
    const score = [{ miss: <ion-icon name="close-circle-sharp"></ion-icon> }, { close: <ion-icon name="help-circle"></ion-icon> }, { correct: <ion-icon name="checkmark-circle"></ion-icon> }];
    return (
        <div className="tela2__footer">
            <p>{counter}/8 CONCLUÍDOS</p>
        </div>
    );
}