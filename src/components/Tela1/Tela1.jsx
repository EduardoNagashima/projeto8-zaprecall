import "./style.css";
import Logo from "./../../assets/logo.png"

export default function Tela1({ handleClick }) {
  return (
    <div className="tela1">
      <div className="tela1__logo">
        <img src={Logo} alt="logo" />
        <h1 className="tela1__logo-nome">ZapRecall</h1>
      </div>
      <div className="tela1__button">
        <button className="tela1__startButton" onClick={() => { handleClick(true); }}>Iniciar Recall!</button>
      </div>
    </div>
  );
}