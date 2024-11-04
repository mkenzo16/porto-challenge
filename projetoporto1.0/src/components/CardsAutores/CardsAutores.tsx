import styles from "./CardsAutores.module.css"
import { ListaAutores } from "./Autores"
import githubLogo from "/img/github-logo.png"

export default function CardsAutores() {
  return (
    <section className={styles.conteudo}>
    <div className={styles.fundo}>
    {ListaAutores.map((autor) => (
        <div className={styles.card}>
            <img src={autor.foto} alt={autor.nome} className={styles.perfil}/>
            <a href={autor.github}>
            <img src={githubLogo} alt={`Github - ${autor.nome}`} className={styles.gitImg}/></a>
            <p>RM - {autor.rm}</p>
            <p>{autor.nome}</p>
            <p>{autor.sala}</p>
        </div>
    ))}
    </div>
    </section>
  )
}
