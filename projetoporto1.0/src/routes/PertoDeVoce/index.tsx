import MapaCentros from "../../components/Mapa/MapaCentros";
import styles from "./PertoDeVoce.module.css";
import locationIcon from "/img/location.png";

const centrosAutomotivos = [
  { id: 1, nome: "Centro Automotivo - Bela Vista", endereco: "R Pedroso, 394 - Bela Vista", cidade: "São Paulo" },
  { id: 2, nome: "Centro Automotivo - Rio Branco", endereco: "Av Rio Branco, 1448 - Campos Eliseos", cidade: "São Paulo" },
  { id: 3, nome: "Centro Automotivo - Caninde Global", endereco: "Av Cruzeiro do Sul, 607 - Caninde", cidade: "São Paulo" },
  { id: 4, nome: "Centro Automotivo - Jardins", endereco: "Rua Oscar Freire, 2500 - Jardins", cidade: "São Paulo" },
  { id: 5, nome: "Centro Automotivo - Casa Verde", endereco: "Av Engenheiro Caetano Alvares, 1179 - Casa Verde Media", cidade: "São Paulo" },
  { id: 6, nome: "Centro Automotivo - Itaim Bibi", endereco: "R Clodomiro Amazonas, 57 - Itaim Bibi", cidade: "São Paulo" },
  { id: 7, nome: "Centro Automotivo - Pinheiros", endereco: "R Deputado Lacerda Franco, 410 - Pinheiros", cidade: "São Paulo" },
  { id: 8, nome: "Centro Automotivo - Vila Mariana", endereco: "Av Lins de Vasconcelos, 2474 - Vila Mariana", cidade: "São Paulo" },
  { id: 9, nome: "Centro Automotivo - Mooca", endereco: "R dos Trilhos, 1327 - Mooca", cidade: "São Paulo" },
  { id: 10, nome: "Centro Automotivo - Barra Funda", endereco: "R Quirino dos Santos, 230 - Barra Funda", cidade: "São Paulo" },
  { id: 11, nome: "Centro Automotivo - Cardeal Arcoverde", endereco: "R Cardeal Arcoverde, 93 - Pinheiros", cidade: "São Paulo" },
  { id: 12, nome: "Centro Automotivo - Ibirapuera", endereco: "R França Pinto, 1115 - Ibirapuera", cidade: "São Paulo" },
  { id: 13, nome: "Centro Automotivo - Avenida Sumaré", endereco: "Av Sumaré, 73 - Perdizes", cidade: "São Paulo" }
];

export default function PertoDeVoce() {
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Perto de você</h1>
        <p className={styles.description}>
          Encontre os centros automotivos mais próximos para atender suas necessidades.
        </p>
      </div>
      <div className={styles.contentSection}>
        <div className={styles.listContainer}>
          {centrosAutomotivos.map((centro) => (
            <div key={centro.id} className={styles.centroItem}>
              <h3>{centro.nome}</h3>
              <p>{centro.endereco}</p>
              <p>{centro.cidade}</p>
            </div>
          ))}
        </div>
        <div className={styles.mapSection}>
          <MapaCentros />
        </div>
      </div>
      <img src={locationIcon} alt="Ícone de Localização" className={styles.locationIcon} />
    </div>
  );
}
