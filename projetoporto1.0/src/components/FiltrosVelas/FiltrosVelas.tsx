import { useState } from "react";
import BotaoAgendar from "../BotaoAgendar/BotaoAgendar";
import styles from "./FiltrosVelas.module.css";

export default function AlinhamentoBalanceamento() {
  const [answers, setAnswers] = useState(["", "", ""]);
  const [showFeedback, setShowFeedback] = useState(false);

  const questions = [
    "O carro apresenta dificuldades para ligar?",
    "O consumo de combustível está mais alto que o normal?",
    "Você percebe um desempenho irregular do motor?",
  ];

  const handleAnswerChange = (index: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
    setShowFeedback(false);
  };

  const generateFeedback = () => {
    setShowFeedback(true);
  };

  const feedbackMessage = () => {
    if (answers.includes("Não sei informar") || answers.includes("Sim")) {
      return "Recomendamos a verificação dos filtros e velas do motor para garantir a eficiência e evitar problemas de desempenho.";
    } else {
      return "Os filtros e velas parecem estar em boas condições. Continue realizando a manutenção regular para evitar problemas.";
    }
  };
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Filtros e Velas</h1>
      <img src="/img/filtros-velas.jpg" alt="Alinhamento de rodas" className={styles.image} />
      <p className={styles.description}>Responda as perguntas abaixo para verificar a melhor solução do seu problema.</p>
      
      {questions.map((question, index) => (
        <div key={index} className={styles.question}>
          <p>{question}</p>
          <div className={styles.options}>
            {["Sim", "Não", "Não sei informar"].map((option) => (
              <button
                key={option}
                className={`${styles.optionButton} ${answers[index] === option ? styles.selected : ""}`}
                onClick={() => handleAnswerChange(index, option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button onClick={generateFeedback} className={styles.feedbackButton}>Verificar Feedback</button>

      {showFeedback && (
        <div className={styles.feedback}>
          <p>{feedbackMessage()}</p>
          <p className={styles.agendarText}>Ou gostaria de agendar uma visita?</p>
          <BotaoAgendar />
        </div>
      )}
    </div>
  );
}
