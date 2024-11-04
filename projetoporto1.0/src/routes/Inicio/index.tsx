import Agendar from "../../components/Agendar/Agendar";
import MenuProblema from "../../components/ProblemaConteudo/MenuProblema";
import styles from "./Inicio.module.css";

export default function Inicio() {
  document.title = "Página Inicial";

  return (
    <section className={styles.container}>
      <div className={styles.agendamentoSection}>
        <Agendar />
      </div>
      <div className={styles.menuProblemaSection}>
        <MenuProblema />
      </div>
    </section>
  );
}

