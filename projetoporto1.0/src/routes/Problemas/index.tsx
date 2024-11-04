import AlinhamentoBalanceamento from "../../components/AlinhamentoBalanceamento/AlinhamentoBalanceamento";
import DiscosPastilhasFreios from "../../components/DiscosPastilhasFreios/DiscosPastilhasFreios";
import Embreagem from "../../components/Embreagem/Embreagem";
import FiltrosVelas from "../../components/FiltrosVelas/FiltrosVelas";

export default function Problemas() {
  return (
    <div>
      <h1>Problemas Automotivos</h1>
      <AlinhamentoBalanceamento />
      <DiscosPastilhasFreios />
      <Embreagem />
      <FiltrosVelas />
    </div>
  );
}
