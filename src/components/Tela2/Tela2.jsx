import "./style.css";
import Header from "./Header/Header";
import Question from "./Question/Question";
import Footer from "./Footer/Footer";
import { useState } from "react";

export default function Tela2() {
  const perguntas = [{ pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" }, { pergunta: "O React é __", resposta: "Uma biblioteca JavaScript para construção de interfaces" }, { pergunta: "Componentes devem iniciar com __", resposta: "Letra maiúscula" }, { pergunta: "Podemos colocar __ dentro do JSX", resposta: "Expressões" }, { pergunta: "O ReactDOM nos ajuda __", resposta: "Interagindo com a DOM para colocar componentes React na mesma" }, { pergunta: "Usamos o npm para __", resposta: "Gerenciar os pacotes necessários e suas dependências" }, { pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes" }, { pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }];

  const [counter, setCounter] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [sequencia, setSequencia] = useState([]);

  console.log(isStart);

  if (isStart === false) {
    perguntas.sort(() => Math.random() - 0.5);
    setIsStart(true);
  }

  return (
    <div className="tela2">

      <Header />

      <div className="tela2__questions">
        {
          perguntas.map(({ pergunta, resposta }, index) => {
            return (
              <Question
                index={index + 1}
                pergunta={pergunta}
                resposta={resposta}
                callback={(contagem) => setCounter(counter + contagem)}
                sequencia={(str) => setSequencia([...sequencia, str])}
              />
            );
          })
        }
      </div>
      <Footer
        counter={counter}
        sequencia={sequencia} />

    </div>
  );
}
