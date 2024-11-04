import { useState } from "react";
import BotaoAgendar from "../BotaoAgendar/BotaoAgendar";
import styles from "./Embreagem.module.css";

export default function AlinhamentoBalanceamento() {
  const [answers, setAnswers] = useState(["", "", ""]);
  const [showFeedback, setShowFeedback] = useState(false);

  const questions = [
    "A embreagem está escorregando durante a mudança de marcha?",
    "Você percebe um cheiro de queimado ao dirigir?",
    "A troca de marchas está difícil?",
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
      return "Pode ser necessário verificar o sistema de embreagem em uma oficina especializada, especialmente se houver dificuldade ao trocar de marcha.";
    } else {
      return "Aparentemente, a embreagem está funcionando corretamente. Mantenha atenção a qualquer mudança na resposta do pedal.";
    }
  };
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Embreagem</h1>
      <img src="/img/embreagem.webp" alt="Embreagem" className={styles.image} />
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
