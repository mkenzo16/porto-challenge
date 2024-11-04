import styles from "./ChatbotConteudo.module.css";
import imgRobo from "/img/robot.png"

export default function ChatbotConteudo() {

  return (
    <section className={styles.conteudo}>
      <div className={styles.fundoAzul}>
        <div className={styles.retanguloCentral}>
          <div className={styles.quadradoD9}>
              <div className={styles.robotTextContainer}>
                <img src={imgRobo} alt="Foto Robo" />
                <p>Olá! Sou seu bot particular, qualquer dúvida, posso lhe ajudar!</p>
              </div>
              <form className={styles.formContainer}>
                <label htmlFor="mensagem" className={styles.labelContainer}>
                <input className={styles.inputContainer} type="text" placeholder="Envie uma mensagem..." />
                </label>
                </form>
            </div>
          </div>
        </div>
    </section>
  )
}
