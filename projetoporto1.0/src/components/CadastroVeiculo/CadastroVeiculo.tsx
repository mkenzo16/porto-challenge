import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CadastroVeiculo.module.css";

interface VeiculoInfo {
    marca: string;
    modelo: string;
    ano: string;
    [key: string]: string;
}

export default function CadastroVeiculo() {
    const [vin, setVin] = useState<string>("");
    const [veiculoInfo, setVeiculoInfo] = useState<VeiculoInfo | null>(null);
    const [erro, setErro] = useState<string | null>(null);
    const [problema, setProblema] = useState<string>("");
    const navigate = useNavigate();

    const buscarVeiculo = async () => {
        setErro(null);
        setVeiculoInfo(null);

        try {
            const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json&api_key=b685120c2d35`);
            const data = await response.json();

            if (data.Results) {
                const marca = data.Results.find((item: { Variable: string }) => item.Variable === "Make")?.Value || "N/A";
                const modelo = data.Results.find((item: { Variable: string }) => item.Variable === "Model")?.Value || "N/A";
                const ano = data.Results.find((item: { Variable: string }) => item.Variable === "Model Year")?.Value || "N/A";

                setVeiculoInfo({ marca, modelo, ano });
            } else {
                setErro("Nenhuma informação foi encontrada para esse VIN.");
            }
        } catch (error) {
            console.error("Erro ao buscar o VIN:", error);
            setErro("Erro ao buscar informações do veículo. Tente novamente.");
        }
    };

    const handleCadastro = () => {
        if (!vin || !problema) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const veiculo = {
            vin,
            problema,
            ...veiculoInfo
        };

        localStorage.setItem("veiculo", JSON.stringify(veiculo));
        alert("Cadastro de veículo realizado com sucesso!");


        navigate("/confirmacao-agendamento");
    };

    return (
        <section className={styles.cadastroVeiculo}>
            <h1>Cadastro de Veículo</h1>
            <div className={styles.formGroup}>
                <label>VIN</label>
                <input
                    type="text"
                    value={vin}
                    onChange={(e) => setVin(e.target.value)}
                    placeholder="Digite o VIN do veículo"
                />
                <button onClick={buscarVeiculo} className={styles.buscarButton}>Buscar Veículo</button>
            </div>

            {erro && <p className={styles.msgErro}>{erro}</p>}

            {veiculoInfo && (
                <div className={styles.dadosVeiculo}>
                    <h2>Informações do Veículo</h2>
                    <p><strong>Marca:</strong> {veiculoInfo.marca}</p>
                    <p><strong>Modelo:</strong> {veiculoInfo.modelo}</p>
                    <p><strong>Ano:</strong> {veiculoInfo.ano}</p>
                </div>
            )}

            <div className={styles.formGroup}>
                <label>Problema</label>
                <select value={problema} onChange={(e) => setProblema(e.target.value)}>
                    <option value="">Selecione o problema</option>
                    <option value="Alinhamento e Balanceamento">Alinhamento e Balanceamento</option>
                    <option value="Embreagem">Embreagem</option>
                    <option value="Filtros e Velas">Filtros e Velas</option>
                    <option value="Discos e Pastilhas de Freio">Discos e Pastilhas de Freio</option>
                </select>
            </div>

            <button onClick={handleCadastro} className={styles.cadastrarButton}>Cadastrar</button>
        </section>
    );
}
