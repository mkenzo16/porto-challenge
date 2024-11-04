import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from '/img/porto-seguro.png'; 
import userIcon from '/img/user-icon.png'; 
import menuIcon from '/img/menu.png'; 

export default function Cabecalho() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo Porto Seguro" className={styles.logo} />
      <div className={styles.rightSection}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/autores" className={styles.navLink}>Autores</Link>
          <Link to="/pertodevoce" className={styles.navLink}>Perto de Voce</Link>
        </nav>
        <Link to="/cadastrar">
          <img src={userIcon} alt="User Icon" className={styles.icon} />
        </Link>
        <img src={menuIcon} alt="Menu Icon" className={styles.menuIcon} />
      </div>
    </header>
  );
}