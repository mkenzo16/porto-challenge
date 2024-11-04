import styles from "./Rodape.module.css"
import { Link } from "react-router-dom";
import duvida from "/img/duvida48x48.png";
import whatsapp from  "/img/whatsapp50x50.png";
import instagram from "/img/instagram50x50.png";
import twitter from "/img/twitter50x50.png"

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
    <div className={styles.footerText}>
      <p>Dúvidas?</p>
      <Link to="/chatbot">
        <img className={styles.duvidas} src={duvida} alt="dúvidas" />
      </Link>
    </div>
    <nav>
      <ul>
        <li className={styles.whatsapp}>
          <img src={whatsapp} alt="whatsapp" />
        </li>
        <li className={styles.instagram}>
          <img src={instagram} alt="instagram" />
        </li>
        <li className={styles.twitter}>
          <img src={twitter} alt="twitter" />
        </li>
      </ul>
    </nav>
  </footer>
  )
}
