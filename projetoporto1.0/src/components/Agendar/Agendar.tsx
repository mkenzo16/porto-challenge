import styles from "./Agendar.module.css";
import agendamento from "/img/agendamento.jpg";
import { Link } from "react-router-dom";

export default function Agendar() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1>Agende já a sua manutenção!</h1>
        <Link to="/login" className={styles.btnLink}>Clique Aqui</Link> {/* Ajustado para levar ao login */}
      </div>
      <div className={styles.rightSection}>
        <img src={agendamento} alt="imagem do agendamento" className={styles.image} />
      </div>
    </div>
  );
}


