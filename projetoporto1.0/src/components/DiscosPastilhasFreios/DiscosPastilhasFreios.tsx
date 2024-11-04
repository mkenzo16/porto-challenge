import { useState } from "react";
import BotaoAgendar from "../BotaoAgendar/BotaoAgendar";
import styles from "./DiscosPastilhasFreios.module.css";

export default function AlinhamentoBalanceamento() {
  const [answers, setAnswers] = useState(["", "", ""]);
  const [showFeedback, setShowFeedback] = useState(false);

  const questions = [
    "Você sente um ruído ao frear?",
    "O pedal do freio vibra ao ser pressionado?",
    "O freio parece menos responsivo do que o normal?",
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
      return "Recomendamos uma inspeção das pastilhas e discos de freio. Manter o sistema de freio em boas condições é essencial para a segurança.";
    } else {
      return "Parece que as pastilhas e discos de freio estão em boas condições. Fique atento a qualquer ruído ou alteração ao frear.";
    }
  };
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Discos e Pastilhas de Freios</h1>
      <img src="/img/disco-pastilha.jpg" alt="Discos e Freio" className={styles.image} />
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
