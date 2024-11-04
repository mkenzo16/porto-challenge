import { useState } from "react";
import BotaoAgendar from "../BotaoAgendar/BotaoAgendar";
import styles from "./AlinhamentoBalanceamento.module.css";

export default function AlinhamentoBalanceamento() {
  const [answers, setAnswers] = useState(["", "", ""]);
  const [showFeedback, setShowFeedback] = useState(false);

  const questions = [
    "O volante vibra enquanto você dirige?",
    "O carro puxa para um lado ao dirigir em linha reta?",
    "Os pneus apresentam desgaste irregular?",
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
      return "Pode ser necessário realizar o alinhamento e balanceamento em uma oficina especializada para garantir a segurança do seu veículo.";
    } else {
      return "Parece que o alinhamento e balanceamento estão em boas condições. Continue monitorando qualquer mudança no comportamento do veículo.";
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Alinhamento e Balanceamento</h1>
      <img src="/img/alinhamento_detalhe.webp" alt="Alinhamento de rodas" className={styles.image} />
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
          <p className={styles.agendarText}>Gostaria de agendar uma visita? Clique Aqui:</p>
          <BotaoAgendar />
        </div>
      )}
    </div>
  );
}
