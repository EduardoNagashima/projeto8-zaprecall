import "./style.css";
import Question from "./Question";


export default function Tela2() {

  const perguntas = [{ pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" }, { pergunta: "O React é __", resposta: "Uma biblioteca JavaScript para construção de interfaces" }, { pergunta: "Componentes devem iniciar com __", resposta: "Letra maiúscula" }, { pergunta: "Podemos colocar __ dentro do JSX", resposta: "Expressões" }, { pergunta: "O ReactDOM nos ajuda __", resposta: "Interagindo com a DOM para colocar componentes React na mesma" }, { pergunta: "Usamos o npm para __", resposta: "Gerenciar os pacotes necessários e suas dependências" }, { pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes" }, { pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }]

  const score = [{ miss: <ion-icon name="close-circle-sharp"></ion-icon> }, { close: <ion-icon name="help-circle"></ion-icon> }, { correct: <ion-icon name="checkmark-circle"></ion-icon> }];

  perguntas.sort(() => Math.random() - 0.5)

  return (
    <div className="tela2">

      <div className="tela2__header">
        <img src="./assets/logo-pequeno.png" alt="logo-pequeno" />
        <h1>ZapRecall</h1>
      </div>

      <div className="tela2__questions">
        {
          perguntas.map(({ pergunta, resposta }, index) => {
            return (
              <Question index={index + 1} pergunta={pergunta} resposta={resposta} />
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
