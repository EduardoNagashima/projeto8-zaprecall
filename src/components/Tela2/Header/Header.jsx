import "./style.css";
import LogoPequeno from "./../../../assets/logo-pequeno.png"


export default function Header() {
    return (
        <div className="tela2__header">
            <img src={LogoPequeno} alt="logo-pequeno" />
            <h1>ZapRecall</h1>
        </div>
    );
}