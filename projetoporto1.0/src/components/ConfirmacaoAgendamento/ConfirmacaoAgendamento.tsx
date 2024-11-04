import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Agendamento.module.css";

interface Usuario {
    nome: string;
    email: string;
    telefone: string;
}

interface Veiculo {
    marca: string;
    modelo: string;
    ano: string;
    vin: string;
    problema: string;
}

export default function ConfirmacaoAgendamento() {
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [veiculo, setVeiculo] = useState<Veiculo | null>(null);
    const [dataSelecionada, setDataSelecionada] = useState<string>("");
    const [horarioSelecionado, setHorarioSelecionado] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        const usuarioArmazenado = localStorage.getItem("usuario");
        const veiculoArmazenado = localStorage.getItem("veiculo");

        if (usuarioArmazenado) setUsuario(JSON.parse(usuarioArmazenado) as Usuario);
        if (veiculoArmazenado) setVeiculo(JSON.parse(veiculoArmazenado) as Veiculo);
    }, []);

    const horariosDisponiveis = [
        "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
    ];

    const confirmarAgendamento = () => {
        if (!dataSelecionada || !horarioSelecionado) {
            alert("Por favor, selecione uma data e horário.");
            return;
        }

        // Código para confirmar o agendamento
        alert("Manutenção agendada com sucesso!");
        navigate("/pagamento"); // Redireciona para a página de pagamento após a confirmação
    };

    return (
        <section className={styles.confirmacaoAgendamento}>
            <h1>Confirmação de Agendamento</h1>
            {usuario && veiculo ? (
                <div className={styles.dadosAgendamento}>
                    <h2>Dados do Cliente:</h2>
                    <p><strong>Nome:</strong> {usuario.nome}</p>
                    <p><strong>Email:</strong> {usuario.email}</p>
                    <p><strong>Telefone:</strong> {usuario.telefone}</p>

                    <h2>Dados do Veículo:</h2>
                    <p><strong>Marca:</strong> {veiculo.marca}</p>
                    <p><strong>Modelo:</strong> {veiculo.modelo}</p>
                    <p><strong>Ano:</strong> {veiculo.ano}</p>

                    <h2>Selecione a Data e o Horário</h2>
                    <label>Data:</label>
                    <input
                        type="date"
                        value={dataSelecionada}
                        onChange={(e) => setDataSelecionada(e.target.value)}
                        className={styles.inputData}
                    />

                    <label>Horário:</label>
                    <select
                        value={horarioSelecionado}
                        onChange={(e) => setHorarioSelecionado(e.target.value)}
                        className={styles.selectHorario}
                    >
                        <option value="">Selecione um horário</option>
                        {horariosDisponiveis.map((horario) => (
                            <option key={horario} value={horario}>{horario}</option>
                        ))}
                    </select>

                    <button onClick={confirmarAgendamento} className={styles.confirmarButton}>
                        Confirmar Agendamento
                    </button>
                </div>
            ) : (
                <p>Carregando dados do cliente e veículo...</p>
            )}
        </section>
    );
}
