import { useState } from "react";
import data from "./data.json";

// i componenti si definiscono con una funzione con prima lettera maiuscola
//l'unico esportato è quello con export

function Winner({ ansProp, fine }) {
  if (fine === 1) {
    if (ansProp === "4") {
      return <p>WINNER is {ansProp}</p>;
    } else {
      return <p>loser</p>;
    }
  }
}

function Opzione({ daVisualizzare, statoQuiz, option }) {
  return (
    <>
      <input
        type="radio"
        value={daVisualizzare}
        id={daVisualizzare}
        onChange={option}
        disable={statoQuiz === 1}
      />
      <label>{daVisualizzare}</label>
      <br />
    </>
  );
}

function Domanda({ id, domanda, risposte, fine, option }) {
  return (
    <>
      <p>{domanda}</p>
      {risposte.map((singolaRisposta) => {
        return (
          <Opzione
            daVisualizzare={singolaRisposta}
            statoQuiz={fine}
            option={option}
          />
        );
      })}
      <br />
    </>
  );
}

export default function Quiz() {
  const [answerArray, setAnswerArray] = useState([]);
  const [idDomanda, setDomandaId] = useState(0);
  const [fine, setFine] = useState(0);

  const onOptionChange = (e) => {
    // potrei anche scrivere onOptionChange(e)
    setAnswer(e.target.value);
  };

  return (
    <>
      {data.domande.map((singolaDomanda) => {
        return (
          <Domanda
            id={singolaDomanda.id}
            domanda={singolaDomanda.domanda}
            risposte={singolaDomanda.risposte}
            corretta={singolaDomanda.corretta}
            statoQuiz={fine}
            option={onOptionChange}
          />
        );
      })}
      <br />
      <br />
      //codice vecchio
      <h3>Quante zampe ha un gatto?</h3>
      <input
        type="radio"
        value="4"
        // checked={answer === "4"}
        // onChange={onOptionChange}
        disabled={fine}
      />
      <label>4</label>
      <br />
      <input
        type="radio"
        value="11"
        // checked={answer === "11"}
        // onChange={onOptionChange}
        disabled={fine}
      />
      <label>11</label>
      <br />
      <input
        type="radio"
        value="26"
        // checked={answer === "26"}
        // onChange={onOptionChange}
        disabled={fine}
      />
      <label>26</label>
      <br />
      <input
        type="submit"
        value="Risposta"
        onClick={() => {
          setFine(1);
        }}
      />
      {/* <p>Selected answer: {answer}</p> */}
      {/* <Winner ansProp={answer} fine={fine} /> */}
    </>
  );
}
