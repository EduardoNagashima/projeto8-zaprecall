import "./style.css";

export default function Tela1({ handleClick }) {
  return (
    <div className="tela1">
      <div className="tela1__logo">
        <img src="./assets/logo.png" alt="logo" />
        <h1 className="tela1__logo-nome">ZapRecall</h1>
      </div>
      <button onClick={() => handleClick(true)}>Iniciar Recall!</button>
    </div>
  );
}