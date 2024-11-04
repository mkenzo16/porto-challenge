import { Link } from 'react-router-dom';
import styles from './Problemas.module.css';

export default function MenuProblema() {
  const problemas = [
    { nome: 'Alinhamento e Balanceamento', imagem: '/img/alinhamento.jpg', path: '/problemas/alinhamento' },
    { nome: 'Discos e Pastilhas de Freios', imagem: '/img/pastilhasdefreio.jpg', path: '/problemas/freios' },
    { nome: 'Embreagem', imagem: '/img/embreagem.jpg', path: '/problemas/embreagem' },
    { nome: 'Filtros e Velas', imagem: '/img/filtros_e_velas.webp', path: '/problemas/filtros-velas' },
  ];

  return (
    <div className={styles.menu}>
      {problemas.map((problema) => (
        <Link key={problema.nome} to={problema.path} className={styles.problemaItem}>
          <img src={problema.imagem} alt={problema.nome} className={styles.problemaImagem} />
          <p className={styles.problemaNome}>{problema.nome}</p>
        </Link>
      ))}
    </div>
  );
}
