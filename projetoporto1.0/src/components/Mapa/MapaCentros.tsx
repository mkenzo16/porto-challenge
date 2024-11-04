import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./MapaCentros.module.css";

const centrosAutomotivos = [
  { id: 1, nome: "Centro Automotivo - Bela Vista", coordinates: [-46.655981, -23.561684] },
  { id: 2, nome: "Centro Automotivo - Rio Branco", coordinates: [-46.6334, -23.5362] },
  { id: 3, nome: "Centro Automotivo - Caninde Global", coordinates: [-46.6201, -23.5184] },
  { id: 4, nome: "Centro Automotivo - Jardins", coordinates: [-46.6623, -23.5645] },
  { id: 5, nome: "Centro Automotivo - Casa Verde", coordinates: [-46.6666, -23.4935] },
  { id: 6, nome: "Centro Automotivo - Itaim Bibi", coordinates: [-46.6769, -23.5874] },
  { id: 7, nome: "Centro Automotivo - Pinheiros", coordinates: [-46.6862, -23.5611] },
  { id: 8, nome: "Centro Automotivo - Vila Mariana", coordinates: [-46.6333, -23.5891] },
  { id: 9, nome: "Centro Automotivo - Mooca", coordinates: [-46.6027, -23.5575] },
  { id: 10, nome: "Centro Automotivo - Barra Funda", coordinates: [-46.6667, -23.5244] },
  { id: 11, nome: "Centro Automotivo - Cardeal Arcoverde", coordinates: [-46.6898, -23.5553] },
  { id: 12, nome: "Centro Automotivo - Ibirapuera", coordinates: [-46.6620, -23.5920] },
  { id: 13, nome: "Centro Automotivo - Avenida Sumaré", coordinates: [-46.6751, -23.5422] }
];

export default function MapaCentros() {
  return (
    <div className={styles.map}>
      <Map
        initialViewState={{
          longitude: -46.633308,
          latitude: -23.55052,
          zoom: 11
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken="pk.eyJ1Ijoia2Vuem90YWtheWFtYSIsImEiOiJjbTJ3dnoxcHgwY2IzMmtwejl1N3E1YnZ3In0.skikeMQtJt3-hOMLOXbvvg"
      >
        {centrosAutomotivos.map((centro) => (
          <Marker key={centro.id} longitude={centro.coordinates[0]} latitude={centro.coordinates[1]} anchor="bottom">
            <img src="/img/porto-icon.png" alt="Porto Seguro Icon" style={{ width: "30px", height: "30px" }} />
          </Marker>
        ))}
      </Map>
    </div>
  );
}
