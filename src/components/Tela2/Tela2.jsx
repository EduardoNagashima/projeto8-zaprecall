import "./style.css";
import Question from "./Question";


export default function Tela2() {

  const perguntas = [{ display: "Pergunta 1", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" }, { display: "Pergunta 2", pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces" }, { display: "Pergunta 3", pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula" }, { display: "Pergunta 4", pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" }, { display: "Pergunta 5", pergunta: "O ReactDOM nos ajuda __", resposta: " interagindo com a DOM para colocar componentes React na mesma" }, { display: "Pergunta 6", pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências" }, { display: "Pergunta 7", pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes" }, { display: "Pergunta 8", pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }]

  return (
    <div className="tela2">

      <div className="tela2__header">
        <img src="./assets/logo-pequeno.png" alt="logo-pequeno" />
        <h1>ZapRecall</h1>
      </div>

      <div className="tela2__questions">
        {
          perguntas.map(({ display, pergunta, resposta }) => {
            return (
              <Question display={display} pergunta={pergunta} resposta={resposta} />
            );
          })
        }
      </div>

      <div className="tela2__footer">
        <p>0/4 CONCLUÍDOS</p>
      </div>

    </div>
  );
}
