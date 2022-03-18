import { useState } from "react";
import Tela1 from "./Tela1/Tela1";
import Tela2 from "./Tela2/Tela2";

export default function App() {
    const [game, setGame] = useState(false);

    function handleClick(value) {
        setGame(value);
    }

    return (
        <>
            {!game && <Tela1 handleClick={handleClick} />}
            {game && <Tela2 />}
        </>
    );
}