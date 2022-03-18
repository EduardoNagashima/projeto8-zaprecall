import "./style.css";
import Header from "./Header/Header";
import Question from "./Question/Question";
import Footer from "./Footer/Footer";
import { useState } from "react";

export default function Tela2() {
  const perguntas = [{ pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" }, { pergunta: "O React é __", resposta: "Uma biblioteca JavaScript para construção de interfaces" }, { pergunta: "Componentes devem iniciar com __", resposta: "Letra maiúscula" }, { pergunta: "Podemos colocar __ dentro do JSX", resposta: "Expressões" }, { pergunta: "O ReactDOM nos ajuda __", resposta: "Interagindo com a DOM para colocar componentes React na mesma" }, { pergunta: "Usamos o npm para __", resposta: "Gerenciar os pacotes necessários e suas dependências" }, { pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes" }, { pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }];

  perguntas.sort(() => Math.random() - 0.5);

  const score = [{ miss: <ion-icon name="close-circle-sharp"></ion-icon> }, { close: <ion-icon name="help-circle"></ion-icon> }, { correct: <ion-icon name="checkmark-circle"></ion-icon> }];

  const [counter, setCounter] = useState(0);

  return (
    <div className="tela2">
      <Header />

      {
        perguntas.map(({ pergunta, resposta }, index) => {
          return (
            <Question index={index + 1} pergunta={pergunta} resposta={resposta} />
          );
        })
      }

      <Footer />

    </div>
  );
}
